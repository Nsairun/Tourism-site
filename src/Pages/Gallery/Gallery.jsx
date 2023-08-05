import React from 'react';
import './Gallery.css';
import Footer from '../../Component/Footer/Footer';
import vector from '../../assets/images/first img.png';
import StickyBar from '../../Component/StickyBar/StickyBar';
import NavBar from '../../Component/subheader/SubHeader';
import PackHeadText from '../../Component/PackageHeader/PackHeadText';

function Gallery() {
  return (
    <div className="gallery-container">
      <div>
        <StickyBar />
        <NavBar />
        <PackHeadText h1="Gallery" h4="Home" h5="Gallery" />
      </div>
      <div className="main-gallery">
        <div className="gallery-pics">
          <div className="first-gallery-container">
            <img src={vector} alt="pic" className="first-pic" />
            <div className="first-subGallery-container">
              <img src={vector} alt="pic" />
              <img src={vector} alt="pic" />
            </div>
          </div>
          <div className="second-gallery-container">
            <img src={vector} alt="pic" />
            <img src={vector} alt="pic" className="second-pic" />
          </div>
          <div className="third-gallery-container">
            <img src={vector} alt="pic" className="third-pic" />
            <div className="third-subGallery-container">
              <img src={vector} alt="pic" />
              <img src={vector} alt="pic" />
            </div>
          </div>
        </div>
        <div className="gallery-pics-two">
          <div className="gallery-pics-second-container">
            <img src={vector} alt="pic" className="fourth-pic" />
            <div className="fourth-subGallery-container">
              <img src={vector} alt="pic" />
              <img src={vector} alt="pic" />
            </div>
          </div>
          <div className="gallery-pics-container-b">
            <img src={vector} alt="pic" />
            <img src={vector} alt="pic" className="second-pic" />
          </div>
          <div className="gallery-pics-two-container">
            <img src={vector} alt="pic" className="first-pic" />
            <div className="gallery-pics-two-subcontainer">
              <img src={vector} alt="pic" />
              <img src={vector} alt="pic" />
            </div>
          </div>
        </div>
        <div className="gallery-pics">
          <div className="first-gallery-container">
            <img src={vector} alt="pic" className="first-pic" />
            <div className="first-subGallery-container">
              <img src={vector} alt="pic" />
              <img src={vector} alt="pic" />
            </div>
          </div>
          <div className="second-gallery-container">
            <img src={vector} alt="pic" />
            <img src={vector} alt="pic" className="second-pic" />
          </div>
          <div className="third-gallery-container">
            <img src={vector} alt="pic" className="third-pic" />
            <div className="third-subGallery-container">
              <img src={vector} alt="pic" />
              <img src={vector} alt="pic" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
