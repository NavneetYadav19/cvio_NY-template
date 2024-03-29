import React, { useState, useEffect } from 'react';
import { FaAngleDown, FaPhone } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import LoadingAnimation from '../components/LoadingAnimation';
import useWindowSize from '../hooks/useWindowSize';
import '../styles/CenterComponent2.css'; // Import your CSS file for styling

const CenterComponent2 = () => {
  const { width } = useWindowSize();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading effect for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    // Clean up timer
    return () => clearTimeout(timer);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const calculateWidth = () => {
    const screenWidth = width || window.innerWidth;
    return screenWidth / 3;
  };

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div className="center-component" style={{ width: calculateWidth() }}>
          <p className='text-white font-bold absolute left-[-100px]'>Home / Contact</p>
          <FaAngleDown className="down-arrow right-[10px]" onClick={scrollToBottom} />
          <p className='text-white text-3xl font-medium absolute mt-24 top-12 left-[-125px]'>Contact Info</p>
          <div className='absolute w-[911px] p-32 top-[230px] '>
            <div className='flex'>
              <div className='w-[45%] absolute left-[-220px] p-10 border-y border-r border-r-slate-800 border-y-slate-800 bg-black'>
                <div className='flex justify-center items-center h-full'>
                  {/* Centered phone icon */}
                  <FaPhone className='text-[80px] text-center my-4 text-green-600' />
                </div>
                <div className='text-center space-y-4'>
                  <h1 className='text-md text-white'>Phone</h1>
                  <p className='text-sm text-slate-400 font-bold'>+ (231) 456 67 89</p>
                </div>
              </div>
              <div className='w-[45%] absolute right-[220px] p-10 border-y border-l border-l-slate-800 border-y-slate-800 bg-black'>
                <div className='flex justify-center items-center h-full'>
                  {/* Centered phone icon */}
                  <MdMail className='text-[80px] text-center my-4 text-green-600' />
                </div>
                <div className='text-center space-y-4'>
                  <h1 className='text-md text-white'>Email</h1>
                  <p className='text-sm text-slate-100 hover:text-green-500 font-bold'>yadavnavneet849@gmail.com</p>
                </div>
              </div>
            </div>
            <div className='flex'>
              <div className='w-[45%] absolute bottom-[-480px] left-[-220px] p-10 border-y border-r border-r-slate-800 border-y-slate-800 bg-black'>
                <div className='flex justify-center items-center h-full'>
                  <FaLocationDot className='text-[80px] text-center my-4 text-green-600' />
                </div>
                <div className='text-center space-y-4'>
                  <h1 className='text-md text-white'>Address</h1>
                  <p className='text-sm text-slate-400 font-bold'>2621 W Pico Blvd, Los Angeles</p>
                </div>
              </div>
              <div className='w-[45%] absolute bottom-[-480px] right-[220px] p-10 border-y border-l border-l-slate-800 border-y-slate-800 bg-black'>
                <div className='flex justify-center items-center h-full'>
                  <FaUserTie className='text-[80px] text-center my-4 text-green-600' />
                </div>
                <div className='text-center space-y-4'>
                  <h1 className='text-md text-white'>Freelance Available</h1>
                  <p className='text-sm text-slate-100 font-bold'>I am available for Freelance hire</p>
                </div>
              </div>
            </div>
          </div>
          <p className='text-white text-3xl font-medium absolute mt-24 bottom-[-1040px] left-[-125px]'>Contacts Form</p>
          <div className='border-y border-y-slate-800 mb-14 w-[910px] absolute bottom-[-1600px] right-[-199px]'>
          <div className='mx-24 bg-black'>
            <input type='text' placeholder='Name' className='bg-black text-slate-400 block w-full border-b border-slate-800 focus:border-b focus:border-slate-200 h-24 outline-none' />
            <input type='email' placeholder='Email' className='bg-black text-slate-400 block w-full border-b border-slate-800 focus:border-b focus:border-slate-200 h-24 outline-none mt-4' />
            <textarea rows='4' placeholder='Message' className='bg-black text-slate-400 block w-full border-b border-slate-800 focus:border-b focus:border-slate-200 h-24 outline-none mt-4'></textarea>
            <button class="up buttoncon text-md font-medium mt-4 mb-8">Send Message</button>
          </div>

          </div>
        </div>
      )}
    </>
  );
};

export default CenterComponent2;
