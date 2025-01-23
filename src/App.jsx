import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import MainPage from "./components/pages/MainPage/mainPage";
import AboutPage from "./components/pages/AboutPage/aboutPage";
import AttractionPage from "./components/pages/AttractionPage/attractionPage";
import NotFoundPage from "./components/pages/NotFoundPage/notFoundPage";
import AttractionPageId from "./components/pages/AttractionPageId/AttractionPageId";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="container">
          <div className="container__header">
            <div className="header__background">
              <nav className="header__components">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/attractions">Attractions</Link>
              </nav>
            </div>
          </div>

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route exact path="/attractions" element={<AttractionPage />} />
            <Route
              exact
              path="/attraction/:id"
              element={<AttractionPageId />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
