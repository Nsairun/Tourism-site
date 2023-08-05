import React from 'react';
import './Hero.css';
import Button from '../../../Component/Button/Button';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-header">
        <h2>Expirience the beauty of Rwanda with us</h2>
        <p>Discover the Land of a Thousand Hills</p>
      </div>
      <div className="nextprev">
        <i className="fa-solid fa-chevron-left" />
        <i className="fa-solid fa-chevron-right" />
      </div>
      <div className="bookNow">
        <input type="text" placeholder="Search Activities or Destinations" />
        <div className="bookNow1">
          <h5> Guests </h5>
          <p>
            2 Adults
            <i id="arrowDown" className="fa-solid fa-chevron-down" />
          </p>
        </div>
        <div className="bookNow1">
          <h5> date </h5>
          <p>
            12 - 13 April 2021
            <i id="arrowDown" className="fa-solid fa-chevron-down" />
          </p>
        </div>
        <div className="bookNow1">
          <h5> Package </h5>
          <p>
            All
            <i id="arrowDown" className="fa-solid fa-chevron-down" />
          </p>
        </div>
        <Button text="Book Now" />
      </div>
    </div>
  );
}

export default Hero;
