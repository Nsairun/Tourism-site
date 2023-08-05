import React from 'react';
// import PackageHeader from '../../Component/PackageHeader/PackageHeader';
import Header from '../Home/Header/Header';
import Cards from '../Home/Cards/Cards';
import Footer from '../../Component/Footer/Footer';
import NavBar from '../../Component/subheader/SubHeader';
import StickyBar from '../../Component/StickyBar/StickyBar';
import PackHeadText from '../../Component/PackageHeader/PackHeadText';

export default function Package() {
  return (
    <div className="packageContainer-bdy">
      <StickyBar />
      <NavBar />
      <PackHeadText h1="Tour Package" h4="Home" h5="Tour Package" />
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
