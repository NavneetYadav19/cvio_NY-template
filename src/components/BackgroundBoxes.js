import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/BackgroundBoxes.css';

const BackgroundBoxes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [animate, setAnimate] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2000 milliseconds (adjust as needed)
    }, 2000);

    return () => clearTimeout(timeout);
  }, []); 

  useEffect(() => {
    if (!isLoading) {
      setAnimate(true); // Start the animation
      const timeout = setTimeout(() => {
        setAnimate(false); // Reset animation after a short delay
      }, 1000); // Adjust delay as needed

      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
     
      setAnimate(false); 
      const timeout = setTimeout(() => {
        setAnimate(true); 
      }, 100); 

      return () => clearTimeout(timeout);
    }
  }, [location.pathname]); // Re-run whenever the route changes

  return (
    <div className={`background-boxes ${isLoading ? 'hidden' : ''} ${animate ? 'slide-animation' : ''}`}>
      <div className="box box1 border-r border-slate-800"></div>
      <div className="box box2 border-r border-slate-800"></div>
      <div className="box box3 border-r border-slate-800"></div>
      <div className="box box4 border-r border-slate-800"></div>
      <div className="box box5"></div>
    </div>
  );
};

export default BackgroundBoxes;
