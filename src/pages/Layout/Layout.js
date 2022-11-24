import React from 'react';
import './Layout.css';
import SPLITTER from '../../asset/SPLITTER.png';
import Container from '../../components/Container/Container';

const Layout = () => {
  return (
    <div className='Layout'>
      <img src={SPLITTER} className='SPLITTER' alt='SPLITTER' />
      <div className='calculate-container'>
        <Container size='big' color='white'>
          <div className='calculation-container'>
            <Container size='medium' color='white'></Container>
            <Container size='medium' color='green'></Container>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Layout;
