import React, { useState, useEffect } from 'react';
import LoadingAnimation from '../components/LoadingAnimation';
import BackgroundBoxes from '../components/BackgroundBoxes';
import CenterComponent from '../components/CenterComponent'; 
import FollowMeSection from '../components/FollowMeSection';

const Work = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 2000);

    
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
            
            <h1 className="text-[150px] md:pl-0 pl-[300px] text-white">Work</h1>
            <div className="contact-info space-y-4 text-md text-gray-300"> 
                <p>E: alejandroa@gmail.com</p>
                <p>T: +1 (234) 567 80 98</p>
            </div>
            
            <CenterComponent />
            <div className="hidden md:block"> 
                <FollowMeSection/>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Work;
