import React from 'react';

const Input = ({
  id,
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
      id={id}
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
