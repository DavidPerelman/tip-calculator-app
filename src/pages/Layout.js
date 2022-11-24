import React from 'react';
import './Layout.css';
import SPLITTER from '../asset/SPLITTER.png';

const Layout = () => {
  return (
    <div className='Layout'>
      <img src={SPLITTER} className='SPLITTER' />
      <div className='container'></div>
    </div>
  );
};

export default Layout;
