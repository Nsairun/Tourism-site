import React from 'react';
import './package.css';
import Header from '../../Component/Header/Header';
import Cards from '../Home/Cards/Cards';
import Footer from '../../Component/Footer/Footer';
import NavBar from '../../Component/subheader/SubHeader';
import StickyBar from '../../Component/StickyBar/StickyBar';

export default function Package() {
  return (
    <div className="packageContainer-bdy">
      <StickyBar />
      <NavBar />
      <div className="tourHeading">
        <h1>Tour Package</h1>
        <div className="tourSubHeading">
          <h4>Home</h4>
          <h5>Tour Package</h5>
        </div>
      </div>
      <div>
        <Header />
      </div>
      <div>
        <Cards />
        <Cards />
      </div>
      <div className="package-foot-icon">
        <div className="package-foot-icon1">
          <i className="fa-solid fa-chevron-left" />
        </div>
        <div className="package-foot-icon2">
          <i className="fa-solid fa-chevron-right" />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
