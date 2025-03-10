import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/about" element={<AboutPage />} />

          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} CommunionHub. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;