import React from 'react';

import './SplitButton.css';

const SplitButton = ({ left: [leftUrl, left], right: [rightUrl, right] }) => (
  <div className='split-button'>
    <button onClick={() => window.open(leftUrl)} className='left'>{left}</button>
    <div className='split'></div>
    <button onClick={() => window.open(rightUrl)} className='right'>{right}</button>
  </div>
);

export default SplitButton;
