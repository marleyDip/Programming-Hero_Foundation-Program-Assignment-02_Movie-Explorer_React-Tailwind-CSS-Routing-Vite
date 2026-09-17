import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MovieListingPage from "./pages/MovieListingPage";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/movies" element={<MovieListingPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
