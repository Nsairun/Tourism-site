import React from 'react';
import './AboutHero.css';
import Button from '../../../Component/Button/Button';

function AboutHero() {
  return (
    <div className="abtHero-main">
      <div className="abtHero-left">
        <div className="abtHero-lefttext">
          <h1>We are dedicated to providing the best travel experience.</h1>
          <p>Discover the Land of a Thousand Hills</p>
        </div>
        <div className="abtHero-subContainer-one">
          <div className="abtHero-subContainer-booking">
            <div>
              <small>Guests</small>
              <p>
                2 Adults
                <i id="arrowDown" className="fa-solid fa-chevron-down" />
              </p>
            </div>
            <div>
              <small>Date</small>
              <p>
                12 - 13 April 2021
                <i id="arrowDown" className="fa-solid fa-chevron-down" />
              </p>
            </div>
            <div>
              <small>Package</small>
              <p>
                Akagera Tour
                <i id="arrowDown" className="fa-solid fa-chevron-down" />
              </p>
            </div>
          </div>
          <div className="abt__btn">
            <Button text="Book Now" color="#304F47" />
          </div>
        </div>
      </div>
      <div className="abtHero-right" />
    </div>
  );
}

export default AboutHero;
