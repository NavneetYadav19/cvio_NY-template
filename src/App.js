// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import LoadingAnimation from './components/LoadingAnimation';
import BackgroundBoxes from './components/BackgroundBoxes';
import './styles/CustomCursor.css'; // Import the CSS file for the custom cursor

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Function to update cursor position
    const updateCursorPosition = (e) => {
      const cursor = document.querySelector('.custom-cursor');
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };

    // Add mousemove event listener to update cursor position
    document.addEventListener('mousemove', updateCursorPosition);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []); // Run once on component mount

  return (
    <Router>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div>
          <BackgroundBoxes />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      )}
      {/* Render the custom cursor */}
      <div className="custom-cursor"></div>
    </Router>
  );
}

export default App;
