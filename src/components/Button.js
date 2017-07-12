import React from 'react';

import './Button.css';

const Button = ({ children, url }) => {
  const click = () => window.open(url);
  return (
    <button type='button' onClick={click}>{children}</button>
  );
};

export default Button;
