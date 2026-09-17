// Thin wrapper around the free TVMaze API.
// Docs: https://www.tvmaze.com/api
const BASE_URL = "https://api.tvmaze.com";

const FALLBACK_POSTER =
  "https://placehold.co/400x600/1c1613/948e86?text=No+Poster";

/**
 * Make a request to the TVMaze API.
 */
async function request(endpoint, options = {}) {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  if (!response.ok) {
    throw new Error(
      `TVMaze request failed (${response.status} ${response.statusText})`,
    );
  }

  return response.json();
}

/**
 * Strip HTML tags that TVMaze includes in summary fields.
 */
export function stripHtml(html) {
  if (!html) return "";

  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
}

/**
 * Normalize a raw TVMaze show object
 * into the shape expected by the UI.
 */
function normalizeShow(show) {
  return {
    id: show.id,
    title: show.title,

    poster: show.image?.original || show.image?.medium || FALLBACK_POSTER,

    backdrop: show.image?.original || show.image?.medium || null,

    year: show.premiered?.slice(0, 4) || "N/A",

    rating: show.rating?.average ?? null,

    summary: stripHtml(show.summary),

    genres: show.genres ?? [],

    network: show.network?.name || show.webChannel?.name || "N/A",

    status: show.status || "N/A",

    runtime: show.runtime ?? show.averageRuntime ?? null,
  };
}

/**
 * Fetch the full TVMaze show catalog.
 *
 * GET /shows
 */
export async function getAllShows(options = {}) {
  const shows = await request("/shows", options);

  return shows.map(normalizeShow);
}

/**
 * Fetch a single show by ID.
 *
 * GET /shows/:id
 */
export async function getShowById(id, options = {}) {
  if (!id) {
    throw new Error("Show ID is required");
  }

  const show = await request(`/shows/${id}`, options);

  return normalizeShow(show);
}

/**
 * Search shows by title.
 *
 * GET /search/shows?q=:query
 */
export async function searchShows(query, options = {}) {
  const trimmedQuery = query?.trim();

  if (!trimmedQuery) {
    return [];
  }

  const params = new URLSearchParams({
    q: trimmedQuery,
  });

  const results = await request(`search/shows/${params.toString()}`, options);

  return results.map(({ show }) => normalizeShow(show));
}
