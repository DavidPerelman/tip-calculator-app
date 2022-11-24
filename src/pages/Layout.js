import React from 'react';
import './Layout.css';
import SPLITTER from '../asset/SPLITTER.png';
import Container from '../components/Container/Container';

const Layout = () => {
  return (
    <div className='Layout'>
      <img src={SPLITTER} className='SPLITTER' />
      <Container size='big' color='white' />
      {/* <div className='container'></div> */}
    </div>
  );
};

export default Layout;
