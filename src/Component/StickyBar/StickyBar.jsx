import React from 'react';
import './Stickybar.css';

function StickyBar() {
  return (
    <div className="stickyBar">
      <div className="icon1">
        <div className="icn">
          <i className="fa fa-phone"> </i>
          <p>+250 784 688 641</p>
        </div>
        <div className="icn">
          <i className="fa fa-envelope-square"> </i>
          <p>bbonteemma@gmail.com</p>
        </div>
      </div>
      <div className="icon2">
        <span>
          <i className="fa-brands fa-facebook" />
        </span>
        <span>
          <i className="fa-brands fa-twitter" />
        </span>
        <span>
          <i className="fa-brands fa-linkedin" />
        </span>
        <span>
          <i className="fa-brands fa-instagram" />
        </span>
      </div>
    </div>
  );
}

export default StickyBar;
