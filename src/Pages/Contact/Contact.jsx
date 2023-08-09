/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './Contact.css';
// import Header from '../Home/Header/Header';
// import PackageHeader from '../../Component/PackageHeader/PackageHeader';
import Footer from '../../Component/Footer/Footer';
import PackHeadText from '../../Component/PackageHeader/PackHeadText';
import StickyBar from '../../Component/StickyBar/StickyBar';
import NavBar from '../../Component/subheader/SubHeader';
import Button from '../../Component/Button/Button';

function Contact() {
  return (
    <div className="contact-container">
      <div>
        <StickyBar />
        <NavBar />
        <PackHeadText h1="Contact Us" h4="Home" h5="Contact" />
      </div>
      <div className="contact-body-container">
        <div className="contact-container-title">
          <h1>Get in Touch</h1>
          <p>
            We would love to hear from you! If you have any comments or
            suggestions about our website or our tours, please don't hesitate to
            get in touch. We are always looking for ways to improve and make
            your travel experience even better
          </p>
        </div>
        <div className="contact-main">
          <div className="contact-info">
            <div className="contact-header">
              <h2> Contact Us </h2>
            </div>
            <div className="contact-names">
              <div className="names">
                <div className="names1">
                  <h3>First Name</h3>
                  <input type="text" placeholder="Input Your First Name Here" />
                </div>
                <div className="names2">
                  <h3>Last Name</h3>
                  <input type="text" placeholder="Input your Last Name Here" />
                </div>
              </div>
              <div className=" contact-mail1">
                <h3> Email Address </h3>
                <input
                  type="text"
                  placeholder="Input Your Email Address Here"
                />
                <h3>Phone Number</h3>
                <input
                  type="number"
                  placeholder="Input Your Phone Number Here"
                />
              </div>
              <h3>Message</h3>
              <div className="contact-message">
                <input type="text" placeholder="Write a message" />
                <div className="contact-message-button">
                  <div>
                    <Button text="Submit" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-web">
        <div className="contact-social-media">
          <h3>Social Media</h3>
          <div className="media-icons">
            <span>
              <i className="fa-brands fa-facebook" />
            </span>
            <span>
              <i className="fa-brands fa-twitter" />
            </span>
            <span>
              <i className="fa-brands fa-linkedin" />
            </span>
            <span>
              <i className="fa-brands fa-instagram" />
            </span>
          </div>
        </div>
        <div className="contact-mail">
          <h3>Email & Phone</h3>
          <div className="contact-holder">
            <div className="phone">
              <i className="fa fa-phone" />
              <p>+250 784 688 641</p>
            </div>
            <div className="email">
              <i className="fa fa-envelope-square" />
              <p>bbonteemma@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact-address">
          <h3>Address</h3>
          <div>
            <p>kk 600 st</p>
            <p> Kigali, Rwanda</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
