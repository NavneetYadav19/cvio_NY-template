// Contact.js

import React, { useState, useEffect } from 'react';
import LoadingAnimation from '../components/LoadingAnimation';
import BackgroundBoxes from '../components/BackgroundBoxes';
import FollowMeSection from '../components/FollowMeSection';
import CenterComponent2 from '../components/CenterComponent2';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading effect for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    // Clean up timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          
          <BackgroundBoxes />
          <div className="flex justify-center items-center h-screen flex-col">
            
            <h1 className="text-[150px] md:pl-0 pl-[640px] text-white">Contact</h1>
            <div className="contact-info space-y-4 text-md text-gray-300"> 
                <p>E: alejandroa@gmail.com</p>
                <p>T: +1 (234) 567 80 98</p>
            </div>
            
            <CenterComponent2/>
            <FollowMeSection/>
          </div>
        </>
      )}
    </>
  );
};

export default Contact;
