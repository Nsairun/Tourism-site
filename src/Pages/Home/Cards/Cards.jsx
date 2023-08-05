/* eslint-disable no-undef */
import React from 'react';
import './Cards.css';
import CardData from '../../../data/CardData.json';
import Button from '../../../Component/Button/Button';

function Cards() {
  return (
    <div className="tourism-site__HomePage-cards-container">
      {CardData.map((data) => {
        return (
          <div className="tourism-site__HomePage-card">
            <img src={data.src} alt="pics" />
            <div className="card__text">
              <h3>{data.title}</h3>
              <p>{data.desc}</p>
              <div className="card__btn">
                <Button text="Learn More" color="#C7923E" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
