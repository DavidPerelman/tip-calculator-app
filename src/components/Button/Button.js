import React from 'react';
import './Button.css';

const Button = ({ children, size, color, backgroundColor, onClick }) => {
  return (
    <button
      className={`Button ${size} ${color} ${backgroundColor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
