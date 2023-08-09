import React from 'react';
import vector from '../../../assets/images/first img.png';
import second from '../../../assets/images/second img.png';
import third from '../../../assets/images/third img.png';

import './AbtHeroCenter.css';

function AbtHeroCenter() {
  return (
    <div className="abthero-bdy-container">
      <div className="abthero-topic">
        <h2>Welcome to Africa Wizzy Safari</h2>
        <p> </p>
      </div>
      <div className="abtHero-Cards">
        <div className="abthero-bdy-one">
          <p>
            Welcome to Africa Wizzy Safari, a leading tourism company based in
            Rwanda. We have been in business for over 5 years and are committed
            to providing top-quality tours and services to our clients. Our
            mission is to showcase the beauty and culture of Rwanda to visitors
            from around the world, and to contribute to the sustainable
            development of the country through responsible tourism practices.
          </p>
          <img src={vector} alt="" />
        </div>
        <div className="abthero-bdy-two">
          <img src={second} alt="" />
          <p>
            At Africa Wizzy safari, we offer a wide range of tours and
            activities, including cultural and historical tours, wildlife
            safaris, mountain gorilla trekking, and more. Our experienced and
            knowledgeable guides will ensure that you have a safe and enjoyable
            experience while exploring the stunning landscapes and rich culture
            of Rwanda.
          </p>
        </div>
        <div className="abthero-bdy-one">
          <p>
            We are proud to have received numerous awards and accolades for our
            commitment to excellence, including the RDD award and the Excellence
            award. Thank you for choosing Africa Wizzy Safari for your travel
            needs in Rwanda. We look forward to welcoming you on one of our
            tours soon!
          </p>
          <img src={third} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AbtHeroCenter;
