import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import PostsPage from './pages/PostsPage/PostsPage';
import PatientDetails from './pages/PatientDetails/PatientDetails';
import Dashboard from './pages/Dashboard/Dashboard';
import ViewPatients from './pages/ViewPatients/ViewPatients';
import AddPatient from './pages/AddPatient/AddPatient';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Import new pages
import LoginPage from './pages/Auth/LoginPage';
import PasswordResetPage from './pages/Auth/PasswordResetPage';
import PasswordResetConfirmPage from './pages/Auth/PasswordResetConfirmPage';

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

            {/* Patient Details Page */}
            <Route path="/patients/:id" element={<PatientDetails />} />

            {/* Dashboard Page */}
            <Route path="/dashboard" element={<Dashboard />} />

            {/* View Patients Page */}
            <Route path="/patients" element={<ViewPatients />} />

            {/* Add Patient Page */}
            <Route path="/add-patient" element={<AddPatient />} />

            {/* Authentication Pages */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/password-reset" element={<PasswordResetPage />} />
            <Route path="/reset/:uidb64/:token" element={<PasswordResetConfirmPage />} />

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
