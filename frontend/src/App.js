import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import PostsPage from './pages/PostsPage/PostsPage'; // Posts Page for managing posts
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar is displayed on all pages */}
        <Navbar />
        <main>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />
            
            {/* About Page */}
            <Route path="/about" element={<About />} />
            
            {/* Posts Page */}
            <Route path="/posts" element={<PostsPage />} />
            
            {/* Catch-All Route for unknown paths */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        {/* Footer is displayed on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
