import React from 'react';
import './Testimonials.css';
import WorkersData from '../../../data/WorkersData.json';

function Testimonials() {
  return (
    <div className="testimony">
      <div className="test">
        {WorkersData.map((data) => {
          return (
            <div className="test1">
              <div className="testimony-img">
                <img src={data.src} alt="images" />
              </div>
              <h2>{data.name}</h2>
              <p>{data.about}</p>
            </div>
          );
        })}
      </div>
      <div className="projectColors">
        <div className="color1"> </div>
        <div className="color2"> </div>
        <div className="color3"> </div>
      </div>
    </div>
  );
}

export default Testimonials;
