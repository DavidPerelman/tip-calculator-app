import React from 'react';
import './Button.css';

const Button = ({
  value,
  children,
  size,
  color,
  backgroundColor,
  onClick,
  testId,
}) => {
  return (
    <button
      data-testid={testId}
      value={value}
      className={`Button ${size} ${color} ${backgroundColor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
