import React from 'react';
import './Gallery.css';
import Footer from '../../Component/Footer/Footer';
import vector from '../../assets/images/monkeys.jpg';
import giraffe from '../../assets/images/giraffe.jpg';
import umbrella from '../../assets/images/unbrella.jpg';
import selfie from '../../assets/images/selfie.png';
import landscape from '../../assets/images/landscape.jpg';
import paparazzi from '../../assets/images/paparazzi.jpg';
import hut from '../../assets/images/hut.jpg';
import kayak from '../../assets/images/kayak.jpg';
import mosque from '../../assets/images/mosque.jpg';
import view from '../../assets/images/view.jpg';
import church from '../../assets/images/church.jpg';
import child from '../../assets/images/child.jpg';
import sky from '../../assets/images/sky.jpg';
import bike from '../../assets/images/bike.jpg';
import hut2 from '../../assets/images/hut2.jpg';
import tourist from '../../assets/images/tourist.jpg';
import elephant from '../../assets/images/elephant.jpg';
import cow from '../../assets/images/cow.jpg';
import skater from '../../assets/images/skate.jpg';
import monument from '../../assets/images/monument.jpg';
import picnic from '../../assets/images/picnic.jpg';
import villagers from '../../assets/images/villagers.jpg';
import StickyBar from '../../Component/StickyBar/StickyBar';
import NavBar from '../../Component/subheader/SubHeader';
import PackHeadText from '../../Component/PackageHeader/PackHeadText';

function Gallery() {
  return (
    <div className="gallery-container">
      <div>
        <StickyBar />
        <NavBar />
        <PackHeadText
          className="head-text"
          h1="Gallery"
          h4="Home"
          h5="Gallery"
        />
      </div>
      <div className="main-gallery">
        <div className="gallery-pics">
          <div className="first-gallery-container">
            <img src={giraffe} alt="pic" className="first-pic" />
            <div className="first-subGallery-container">
              <img src={umbrella} alt="pic" />
              <img src={vector} alt="pic" />
            </div>
          </div>
          <div className="second-gallery-container">
            <img src={selfie} alt="pic" className="mid-pic" />
            <img src={landscape} alt="pic" className="second-pic" />
          </div>
          <div className="third-gallery-container">
            <img src={paparazzi} alt="pic" className="third-pic" />
            <div className="third-subGallery-container">
              <img src={hut} alt="pic" />
              <img src={kayak} alt="pic" />
            </div>
          </div>
        </div>
        <div className="gallery-pics-two">
          <div className="gallery-pics-second-container">
            <img src={vector} alt="pic" className="fourth-pic" />
            <div className="fourth-subGallery-container">
              <img src={mosque} alt="pic" />
              <img src={view} alt="pic" />
            </div>
          </div>
          <div className="gallery-pics-container-b">
            <img src={church} alt="pic" />
            <img src={child} alt="pic" className="second-pic" />
          </div>
          <div className="gallery-pics-two-container">
            <img src={sky} alt="pic" className="first-pic" />
            <div className="gallery-pics-two-subcontainer">
              <img src={bike} alt="pic" />
              <img src={hut2} alt="pic" />
            </div>
          </div>
        </div>
        <div className="gallery-pics">
          <div className="first-gallery-container">
            <img src={tourist} alt="pic" className="first-pic" />
            <div className="first-subGallery-container">
              <img src={elephant} alt="pic" />
              <img src={cow} alt="pic" />
            </div>
          </div>
          <div className="second-gallery-container">
            <img src={skater} alt="pic" />
            <img src={vector} alt="pic" className="second-pic" />
          </div>
          <div className="third-gallery-container">
            <img src={monument} alt="pic" className="third-pic" />
            <div className="third-subGallery-container">
              <img src={picnic} alt="pic" />
              <img src={villagers} alt="pic" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
