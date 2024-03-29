// CustomCursor.js

import React, { useState, useEffect } from 'react';
import '../styles/CustomCursor.css'; // Import your CSS file for custom cursor

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Update cursor position when the mouse moves
  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    // Add event listener for mouse move
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: cursorPosition.x, top: cursorPosition.y }}
    ></div>
  );
};

export default CustomCursor;
