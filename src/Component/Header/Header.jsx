/* eslint-disable react/prop-types */
import React from 'react';
import './Header.css';

function Header({ title, subtitle }) {
  return (
    <div className="header">
      <h4>{title}</h4>
      <h1>{subtitle}</h1>
    </div>
  );
}

export default Header;
