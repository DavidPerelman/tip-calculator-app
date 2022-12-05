import React from 'react';

const Input = ({
  id,
  type,
  name,
  label,
  placeholder,
  onChange,
  dataTestid,
  className,
  value,
}) => {
  return (
    <input
      id={id}
      aria-label={label}
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
