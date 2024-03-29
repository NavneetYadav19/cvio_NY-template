// TypingTextCarousel.js

// Import necessary dependencies from React
import React, { useState, useEffect } from 'react';
import '../styles/TypingTextCarousel.css'; // Import CSS for TypingTextCarousel styling

// Define the TypingTextCarousel functional component
const TypingTextCarousel = () => {
  // Define state variables to manage typing animation
  const [texts] = useState([
    "I code cool  websites.",
    "I love  React.",
    "I love  WordPress."
  ]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const TYPING_SPEED = 100; // Adjust typing speed as needed
  const PAUSE_DURATION = 2000; // 2 seconds pause
  const LAST_WORD_COLOR = '#7CFC00'; // Light green color

  // useEffect hook to control typing animation
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        if (currentLetterIndex < texts[currentTextIndex].length) {
          setCurrentText(prevText => prevText + texts[currentTextIndex][currentLetterIndex]);
          setCurrentLetterIndex(prevIndex => prevIndex + 1);
        } else {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setCurrentText('');
            setCurrentLetterIndex(0);
            setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
          }, PAUSE_DURATION);
        }
      }
    }, TYPING_SPEED);

    return () => clearInterval(interval);
  }, [currentLetterIndex, currentTextIndex, isPaused, texts]);

  // Function to render text with last word in green color
  const renderTextWithLastWordColor = (text) => {
    const words = text.split(' ');
    const lastWord = words.pop();
    const firstPart = words.join(' ');
    return (
      <>
        {firstPart}
        <span style={{ color: LAST_WORD_COLOR }}>{lastWord}</span>
      </>
    );
  };

  // Render the TypingTextCarousel component
  return (
    <div className="typing-text-carousel">
      <h1>{renderTextWithLastWordColor(currentText)}</h1>
    </div>
  );
};

// Export the TypingTextCarousel component as the default export
export default TypingTextCarousel;
