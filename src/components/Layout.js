// Layout.js
import React from 'react';
import Header from '../components/Header'; 
import BackgroundBoxes from './BackgroundBoxes'; 

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <BackgroundBoxes />
      {children}
    </>
  );
};

export default Layout;
