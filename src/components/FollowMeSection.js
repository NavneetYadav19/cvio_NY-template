// FollowMeSection.js

import React from 'react';
import { FaPinterest, FaInstagram } from 'react-icons/fa';
import { IoChatbubbleOutline } from "react-icons/io5";
import '../styles/FollowMeSection.css';

const FollowMeSection = () => {
  return (
    <div className="follow-me-section">
      <p className="follow-text">Follow Me</p>
      <span className='text-center p-2'>___________</span>
      
      <div className="icons text-center">
        <FaPinterest className="icon hover:text-red-600" />
        <FaInstagram className="icon hover:text-pink-500" />
        <IoChatbubbleOutline className="icon green w-12 h-12" />
      </div>
    </div>
  );
};

export default FollowMeSection;
