import React from 'react';
import './GroupII.css';
import CardTourPackage from '../../../data/SliderData.json';
import Header from '../Header/Header';

function GroupII() {
  return (
    <div className="classII">
      <Header />
      <div className="nxt">
        <div className="nxt1">
          <i className="fa-solid fa-chevron-left" />
        </div>
        <div className="nxt2">
          <i className="fa-solid fa-chevron-right" />
        </div>
      </div>
      <div className="mainContainer">
        {CardTourPackage.map((data) => {
          return (
            <div className="container">
              <img src={data.scr} alt="pictures" />
              <div className="container-desc">
                <h3>{data.title}</h3>
                <p>{data.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GroupII;
