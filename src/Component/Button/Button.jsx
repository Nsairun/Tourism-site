/* eslint-disable react/prop-types */
import React from 'react';
import './Button.css';

function Button({ text, color = '#C7923E' }) {
  return (
    <button className="Button" style={{ backgroundColor: color }} type="button">
      {text}
    </button>
  );
}

export default Button;
