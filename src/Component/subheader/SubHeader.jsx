import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo2.jpg';
import './subheader.css';
import Button from '../Button/Button';

function SubHeader() {
  return (
    <div className="subHeader">
      <div className="subhead__right">
        <div className="subHeader1">
          <img src={Logo} alt="logo" />
        </div>
        <div className="menu">
          <Link to="/">
            <p className="line">Home</p>
          </Link>
          <Link to="about">
            <p>About</p>
          </Link>
          <Link to="/package">
            <p>Tourpackage</p>
          </Link>
          <Link to="/gallery">
            <p>Gallery Blog</p>
          </Link>
          <Link to="/contact">
            <p>Contact Us</p>
          </Link>
        </div>
      </div>
      <div className="subheadBtn">
        <Button text="Sign In" color="#C7923E" />
      </div>
    </div>
  );
}

export default SubHeader;
