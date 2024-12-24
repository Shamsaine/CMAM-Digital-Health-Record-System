import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar is always displayed */}
        <Navbar />
        <Routes>
          {/* Defined routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Redirect unknown routes to the ErrorPage */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {/* Footer is always displayed */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
