import React, { useState, useEffect } from 'react';


import LoadingAnimation from '../components/LoadingAnimation'; 
import BackgroundBoxes from '../components/BackgroundBoxes';
import TypingTextCarousel from '../components/TypingTextCarousel'; 
import '../styles/Home.css'; 
import FollowMeSection from '../components/FollowMeSection';


const Home = () => {
  
 
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
   
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 2000);

    
    return () => clearTimeout(timer);
  }, []);


  if (isLoading) {
    return <LoadingAnimation />;
  }


  return (
    <div>
      <BackgroundBoxes /> 
      <TypingTextCarousel /> 
      <div className='flex'>
        <div className="contact-info space-y-4 text-md text-gray-300"> 
          <p>E: alejandroa@gmail.com</p>
          <p>T: +1 (234) 567 80 98</p>
        </div>
        <div className='absolute md:left-[420px] left-[60px] bottom-52 md:bottom-24 text-bold md:text-2xl text-gray-100 '>
          Hello, I’m <span className='text-green-300'>Navneet Yadav</span>,<br/>
          Front-end Developer Based in Bangalore.
        </div>
      </div>
      <div className="hidden md:block"> 
        <FollowMeSection/>
      </div>
    </div>
  );
};


export default Home;
