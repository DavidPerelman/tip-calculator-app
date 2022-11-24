import React from 'react';
import './Container.css';

const Container = ({ size, color, children }) => {
  return (
    <div data-testid='container-test' className={`Container ${size} ${color}`}>
      {children}
    </div>
  );
};

export default Container;
