import React from 'react';
import StickyBar from '../../Component/StickyBar/StickyBar';
import NavBar from '../../Component/subheader/SubHeader';
import './About.css';
import AboutHero from './AboutHero/AboutHero';
import AbtHeroCenter from './AboutHero/AbtHeroCenter';
import Footer from '../../Component/Footer/Footer';

export default function About() {
  return (
    <div>
      <StickyBar />
      <div className="abt">
        <NavBar />
      </div>
      <div className="abtHero-main">
        <AboutHero />
      </div>
      <div className="abthero-bdy-container">
        <AbtHeroCenter />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
