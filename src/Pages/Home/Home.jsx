import React from 'react';
import './Home.css';
import StickyBar from '../../Component/StickyBar/StickyBar';
import SubHeader from '../../Component/subheader/SubHeader';
import Header from '../../Component/Header/Header';
import Hero from './Hero/Hero';
import Cards from './Cards/Cards';
import GroupII from './GroupII/GroupII';
import GroupIII from './GroupIII/GroupIII';
import Testimonials from './Testimonials/Testimonials';
import Footer from '../../Component/Footer/Footer';

export default function Home() {
  return (
    <div className="App">
      <StickyBar />
      <div className="subhead">
        <SubHeader />
      </div>
      <div className="hero">
        <Hero />
      </div>
      <Header
        title=" Choose your Package"
        subtitle="Select your Best Package for your Travel"
      />
      <div className="cards">
        <Cards />
      </div>
      <div className="groupII">
        <Header
          title=" Popular Destinations"
          subtitle="Select Our Best Popular Destinations"
        />
        <GroupII />
      </div>
      <div>
        <Header
          title="Why us? "
          subtitle="Why Travel with Africa wizzy Safari"
        />
        <GroupIII />
      </div>
      <div className="testimony">
        <Header
          className="testimony-text"
          title="Our Traveller Say "
          subtitle="What our clients say about us"
        />
        <Testimonials />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
