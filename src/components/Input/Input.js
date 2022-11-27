import React from 'react';

const Input = ({
  type,
  name,
  placeholder,
  onChange,
  dataTestid,
  className,
  value,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      data-testid={dataTestid}
      className={className}
      value={value}
    />
  );
};

export default Input;
