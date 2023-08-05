import React from 'react';
import './PackageContainer.css';
import PackageHeader from '../../../Component/PackageHeader/PackageHeader';
import Header from '../../Home/Header/Header';
import Cards from '../../Home/Cards/Cards';
import Footer from '../../../Component/Footer/Footer';

const packageContainer = () => {
  return (
    <div className="packageContainer-bdy">
      <PackageHeader />
      <div>
        <Header />
      </div>
      <div>
        <Cards />
        <Cards />
      </div>
      <div className="package-foot-icon">
        <div className="package-foot-icon1">
          <i className="fa-solid fa-chevron-right" />
        </div>
        <div className="package-foot-icon2">
          <i className="fa-solid fa-chevron-left" />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default packageContainer;
