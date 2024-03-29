import React, { useState, useEffect } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { GrGallery } from "react-icons/gr";
import { FaLink } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { IoMusicalNotes } from "react-icons/io5";
import { FaImage } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import useWindowSize from '../hooks/useWindowSize';
import '../styles/CenterComponent.css';

const CenterComponent = () => {
  const { width } = useWindowSize();
  const [selectedPage, setSelectedPage] = useState(() => {
    const storedPage = localStorage.getItem('selectedPage');
    return storedPage ? storedPage : 'All';
  });

  useEffect(() => {
    localStorage.setItem('selectedPage', selectedPage);
  }, [selectedPage]);

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

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="center-component " style={{ width: calculateWidth() }}>
      <p className='text-white md:text-md text-xl md:font-bold absolute left-[50px] md:left-[-100px]'>Home / Works</p>
      <FaAngleDown className="down-arrow right-[10px]" onClick={scrollToBottom} />
      <div className='absolute border border-slate-800 w-[700px] p-32 top-[100px] left-[-100px]'>
        <div className="sub-pages space-x-10 border-y border-y-slate-800 bg-black py-10">
          <button className={selectedPage === 'All' ? 'active' : ''} onClick={() => handlePageChange('All')}>All</button>
          <button className={selectedPage === 'Video' ? 'active' : ''} onClick={() => handlePageChange('Video')}>Video</button>
          <button className={selectedPage === 'Music' ? 'active' : ''} onClick={() => handlePageChange('Music')}>Music</button>
          <button className={selectedPage === 'Links' ? 'active' : ''} onClick={() => handlePageChange('Links')}>Links</button>
          <button className={selectedPage === 'Image' ? 'active' : ''} onClick={() => handlePageChange('Image')}>Image</button>
          <button className={selectedPage === 'Gallery' ? 'active' : ''} onClick={() => handlePageChange('Gallery')}>Gallery</button>
          <button className={selectedPage === 'Content' ? 'active' : ''} onClick={() => handlePageChange('Content')}>Content</button>
        </div>
        {/* Render content based on selected sub-page */}
        <div className="sub-page-content ">
          {/* Content for each sub-page */}
          {selectedPage === 'All' && (
            <div>
              {/* Images for the "All" page */}
              <div className="left-image mt-28">
                <div className="image-overlay">
                    <GrGallery />
                    <h1 className='font-bold text-lg absolute bottom-28'>Shot in Iceland</h1>
                </div>
                <img src="/images/work1.jpg" alt="First Image" />
              </div>
              <div className="right-image mt-28">
                <div className="image-overlay">
                    <FaLink />
                    <h1 className='font-bold text-lg absolute bottom-8'>Nike Red</h1>
                </div>
                <img src="/images/work3.jpg" alt="Second Image" />
              </div>
              <div className="right-image mt-[100px]">
                <div className="image-overlay">
                    <FaVideo />
                    <h1 className='font-bold text-md absolute bottom-20'>Fertility of Some Plants</h1>
                </div>
                <img src="/images/work2.jpg" alt="Third Image" />
              </div>
              <div className="left-image mt-[60px]">
                <div className="image-overlay">
                    <FaImage />
                    <h1 className='font-bold text-sm absolute bottom-24'>Inspiration in Cap Haitian</h1>
                </div>
                <img src="/images/work4.jpg" alt="Third Image" />
              </div>
              <div className="right-image mt-[100px]">
                <div className="image-overlay">
                    <FaImage />
                    <h1 className='font-bold text-lg absolute bottom-28'>Water and Shore</h1>
                </div>
                <img src="/images/work7.jpg" alt="Third Image" />
              </div>
              <div className="left-image mt-[60px]">
                <div className="image-overlay">
                    <IoMusicalNotes />
                    <h1 className='font-bold text-xl absolute bottom-8'>Dark Bike</h1>
                </div>
                <img src="/images/work6.jpg" alt="Third Image" />
              </div>
              <div className="right-image mt-[120px] mb-32">
                <div className="image-overlay">
                    <FaPlus />
                    <h1 className='font-bold text-lg absolute bottom-28'>Curved Ceiling Ribs</h1>
                </div>
                <img src="/images/work8.jpg" alt="Third Image" />
              </div>
              <div className="right-image mt-[-380px] mb-32">
                <div className="image-overlay">
                    <GrGallery />
                    <h1 className='font-bold text-xl absolute bottom-28'>Undulating Space</h1>
                </div>
                <img src="/images/work5.jpg" alt="Third Image" />
              </div>
            </div>
          )}
          {selectedPage === 'Video' && (
            <div>
              {/* Single image for the "Video" page */}
              <div className="left-image mt-28 mb-32">
              <div className="image-overlay">
                    <FaVideo />
                    <h1 className='font-bold text-xl absolute bottom-32'>Fertility of Some Plants</h1>
                </div>
                <img src="/images/work2.jpg" alt="Third Image" />
              </div>
            </div>
          )}
          {selectedPage === 'Music' && (
            <div>
              {/* Single image for the "Music" page */}
              <div className="left-image mt-28 mb-32">
              <div className="image-overlay">
                    <IoMusicalNotes />
                    <h1 className='font-bold text-xl absolute bottom-14'>Dark Bike</h1>
                </div>
                <img src="/images/work6.jpg" alt="Third Image" />
              </div>
            </div>
          )}
          {selectedPage === 'Links' && (
            <div>
              {/* Single image for the "Music" page */}
              <div className="left-image mt-28 mb-32">
              <div className="image-overlay">
                    <FaLink />
                    <h1 className='font-bold text-xl absolute bottom-14'>Nike Red</h1>
                </div>
                <img src="/images/work3.jpg" alt="Second Image" />
              </div>
            </div>
          )}
          {selectedPage === 'Image' && (
            <div>
              {/* Single image for the "Music" page */}
              <div className="left-image mt-[60px]">
                <div className="image-overlay">
                    <FaImage />
                    <h1 className='font-bold text-xl absolute bottom-36'>Inspiration in Cap Haitian</h1>
                </div>
                <img src="/images/work4.jpg" alt="Third Image" />
              </div>
              <div className="right-image mt-[60px] mb-32">
                <div className="image-overlay">
                    <FaImage />
                    <h1 className='font-bold text-xl absolute bottom-40'>Water and Shore</h1>
                </div>
                <img src="/images/work7.jpg" alt="Third Image" />
              </div>
            </div>
          )}
          {selectedPage === 'Gallery' && (
            <div>
              {/* Single image for the "Music" page */}
              <div className="left-image mt-28">
                <div className="image-overlay">
                    <GrGallery />
                    <h1 className='font-bold text-xl absolute bottom-40'>Shot in Iceland</h1>
                </div>
                <img src="/images/work1.jpg" alt="First Image" />
              </div>
              <div className="right-image mt-[110px] mb-32">
                <div className="image-overlay">
                    <GrGallery />
                    <h1 className='font-bold text-xl absolute bottom-40'>Undulating Space</h1>
                </div>
                <img src="/images/work5.jpg" alt="Third Image" />
              </div>
            </div>
          )}
          {selectedPage === 'Content' && (
            <div>
              <div className="left-image mt-[100px] mb-32">
                <div className="image-overlay">
                    <FaPlus />
                    <h1 className='font-bold text-xl absolute bottom-40'>Curved Ceiling Ribs</h1>
                </div>
                <img src="/images/work8.jpg" alt="Third Image" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CenterComponent;
