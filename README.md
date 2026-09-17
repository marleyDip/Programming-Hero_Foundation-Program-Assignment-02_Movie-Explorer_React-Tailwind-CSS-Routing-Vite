# 🎬 Movie Explorer

A modern, responsive movie and TV show discovery application built with **React**, **Vite**, **Tailwind CSS**, and **React Router**.

Movie Explorer uses the **TVMaze API** to browse shows, search for titles, and explore detailed information through a polished cinematic interface.

> 🎓 Built as **Programming Hero Foundation Program — Assignment 02**

<p align="center">
  <a href="https://sofian-movie-explorer.vercel.app/">
    <strong>🚀 Live Demo</strong>
  </a>
</p>

---

## ✨ Features

- 🎬 Browse a collection of TV shows
- 🔍 Search shows by title
- ⏳ Debounced search to reduce unnecessary API requests
- 🔗 Search state synchronized with the URL
- 🎞️ Movie/show details displayed in an interactive modal
- 🔗 Selected movie ID stored in the URL
- ⌨️ Close modal with the `Escape` key
- 🖱️ Close modal by clicking outside
- ⏳ Loading skeletons for better user experience
- ⚠️ API error handling
- 🖼️ Fallback poster for unavailable images
- 📱 Fully responsive design
- 🎨 Cinematic dark UI with Tailwind CSS
- ♻️ Reusable React components
- 🧹 Clean API service and data normalization

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React** | Building the user interface |
| **Vite** | Development server and build tool |
| **Tailwind CSS** | Styling and responsive design |
| **React Router** | Client-side routing and URL state |
| **Lucide React** | Interface icons |
| **TVMaze API** | Movie and TV show data |
| **JavaScript (ES6+)** | Application logic |
| **Vercel** | Deployment |

---

## 🧩 React Concepts Practiced

This project focuses on practical React fundamentals and modern frontend development patterns.

- Components and component composition
- Props
- `useState`
- `useEffect`
- Controlled inputs
- Conditional rendering
- List rendering with `.map()`
- Custom hooks
- API integration with `fetch`
- Promises and `async/await`
- `AbortController`
- Debouncing
- React Router
- `useSearchParams`
- URL-based application state
- Event handling
- Reusable UI components
- Loading and error states

---

## 🔎 URL-Based Search

The search functionality keeps the user's query in the URL.

For example:

```text
/movies?search=under
```

This makes the search state:

- Shareable
- Refresh-friendly
- Easy to navigate
- Controlled through React Router

When a show is selected, its ID can also be stored in the URL:

```text
/movies?search=under&movie=1
```

Closing the details modal removes the `movie` parameter while preserving the search query.

---

## 🎞️ Movie Details

Selecting a show opens a responsive details modal containing information such as:

- Title
- Rating
- Release year
- Runtime
- Network
- Status
- Genres
- Overview
- Backdrop image

The modal also supports:

- `Escape` key to close
- Outside click to close
- Dedicated close button
- Responsive layout
- Scrollable content for smaller screens

---

## ⚡ Search & Performance

Search requests are debounced before calling the TVMaze API.

Instead of sending a request for every keystroke:

```text
u
un
und
unde
under
```

the application waits briefly until the user stops typing before performing the search.

`AbortController` is also used to cancel outdated requests when a new search begins or the component is unmounted.

This helps keep the UI responsive and avoids unnecessary API requests.

---

## 🌐 API Integration

Movie data is provided by the **TVMaze API**.

### API Endpoints Used

```text
GET /shows
```

Fetches the available shows.

```text
GET /search/shows?q={query}
```

Searches for shows by title.

```text
GET /shows/{id}
```

Fetches a specific show by ID.

The application also normalizes the API response into a consistent structure before passing the data to the UI components.

---

## 🧱 Component Structure

A simplified structure of the application:

```text
src/
├── api/
│   └── tvmaze.js
│
├── assets/
│
├── components/
│   ├── MovieCard.jsx
│   ├── MovieCardSkeleton.jsx
│   ├── MovieGrid.jsx
│   ├── MovieModal.jsx
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── HomePage.jsx
│   └── MovieListingPage.jsx
│
├── App.jsx
├── index.css
└── main.jsx
```

> The exact structure may change as the project evolves.

---

## 🎨 UI & Design

The interface follows a cinematic dark design system with:

- Dark background surfaces
- Gold accent colors
- Glassmorphism
- Responsive grids
- Subtle hover animations
- Image overlays
- Skeleton loading states
- Accessible focus states
- Mobile-first layouts

The goal is to keep the interface visually polished without sacrificing usability.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/marleyDip/Programming-Hero_Foundation-Program-Assignment-02_Movie-Explorer_React-Tailwind-CSS-Routing-Vite.git
```

### 2. Navigate into the project

```bash
cd Programming-Hero_Foundation-Program-Assignment-02_Movie-Explorer_React-Tailwind-CSS-Routing-Vite
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Vite will provide the local development URL in your terminal.

---

## 📦 Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🌐 Live Demo

**Movie Explorer**

https://sofian-movie-explorer.vercel.app/

---

## 📚 Assignment

This project was developed as part of the **Programming Hero Foundation Program — Assignment 02**.

The project helped practice:

- React fundamentals
- API integration
- Routing
- Search functionality
- Component-based architecture
- Responsive UI development
- Tailwind CSS
- URL state management

---

## 👨‍💻 Author

<div align="center">

  <h2>✨ Md. Sofian Hasan ✨</h2>

  <p>
    <strong>Software Engineer | Full-Stack (MERN / PERN) Developer</strong>
  </p>

  <p align="center">

[![🌐 Portfolio](https://img.shields.io/badge/🌐_Portfolio-Visit_Website-0A0A0A?style=for-the-badge)](https://marleydip.netlify.app/)
&nbsp;
[![💻 GitHub](https://img.shields.io/badge/💻_GitHub-View_Profile-181717?style=for-the-badge&logo=github)](https://github.com/marleyDip)

</p>

</div>

<p align="center">
  Passionate about building <strong>modern, scalable, and user-focused web applications</strong> while continuously strengthening <b><i>JavaScript, TypeScript, problem-solving, and full-stack development skills</i></b>.
</p>

### 🚀 Tech Focus

<div align="center">

<img src="https://skillicons.dev/icons?i=js,ts,react,nextjs,tailwind,nodejs,express,nestjs,mongodb,postgres" alt="Tech Stack" />

<br /><br />

<img src="https://img.shields.io/badge/MERN-Stack-61DAFB?style=for-the-badge" alt="MERN Stack" />
<img src="https://img.shields.io/badge/PERN-Stack-336791?style=for-the-badge" alt="PERN Stack" />

</div>

---

## 📄 License

This project was created for educational and learning purposes.