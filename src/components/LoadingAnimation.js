// LoadingAnimation.js
import React from 'react';
import '../styles/Loading.css';

const LoadingAnimation = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900">
      <div className="loader"></div>
    </div>
  );
};

export default LoadingAnimation;
