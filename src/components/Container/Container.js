import React from 'react';
import './Container.css';

const Container = ({ className, size, color, children }) => {
  return (
    <div
      data-testid='container-test'
      className={`Container ${className} ${size} ${color}`}
    >
      {children}
    </div>
  );
};

export default Container;
