import React from 'react';
import './GroupIII.css';
import Header from '../../../Component/Header/Header';

function GroupIII() {
  return (
    <div className="group3">
      <Header />
      <div className="grp3">
        <div className="grp">
          <i className="fa-sharp fa-solid fa-car" />
          <h5>100+ tours around Rwanda</h5>
        </div>
        <div className="grp">
          <i className="fa-sharp fa-solid fa-check" id="icon" />
          <h5>100% Trusted travel agency</h5>
        </div>
        <div className="grp">
          <i className="fa-solid fa-calendar" />
          <h5>10 years of travel experience</h5>
        </div>
        <div className="grp">
          <i className="fa-light fa-thumbs-up" />
          <h5>90% of travelors are happy</h5>
        </div>
      </div>
    </div>
  );
}

export default GroupIII;
