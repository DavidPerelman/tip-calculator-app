import React from 'react';
import './Container.css';

const Container = ({ size, color, children }) => {
  console.log(size);
  return <div className={`Container ${size} ${color}`}>{children}</div>;
};

export default Container;
