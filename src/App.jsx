import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import './App.css';
import MainPage from './components/pages/MainPage/mainPage';
import AboutPage from './components/pages/AboutPage/aboutPage';
import AttractionPage from './components/pages/AttractionPage/attractionPage';
import NotFoundPage from './components/pages/NotFoundPage/notFoundPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="container">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="*">404</Link>
            <Link to="/attractions">Attractions</Link>
          </nav>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/attractions" element={<AttractionPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;