/* eslint-disable react/button-has-type */
import React from 'react';
import './Footer.css';
import Logo from '../../assets/images/logo2.jpg';
import Button from '../Button/Button';

function Footer() {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="foot">
          <div className="foot-heading">
            <h2>If you have any question, Let us help you!</h2>
            <p>
              If you have any questions or would like to book a tour with us,
              please dont hesitate to contact us..
            </p>
          </div>

          <p>Phone: +250 788 123 456 </p>
          <p>
            Email: <u>info@rwandatourism.com</u>
          </p>
          <p>Address: Kigap, Rwanda</p>

          <div className="foot-input">
            <h4>Subscribe to our newspaper</h4>
            <div className="field">
              <input type="text" placeholder="Input your email here" />

              <Button className="fa-solid fa-paper-plane-top" />
            </div>
          </div>
        </div>
        <div className="foot2">
          <div className="logo">
            <img src={Logo} alt="" />
            <div className="footer-icons">
              <div>
                <i className="fa-brands fa-facebook" />
              </div>
              <div>
                <i className="fa-brands fa-twitter" />
              </div>
              <div>
                <i className="fa-brands fa-linkedin" />
              </div>
              <div>
                <i className="fa-brands fa-instagram" />
              </div>
            </div>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="about-tourism">
            <div>
              <p>Home</p>
              <p>Testimonials</p>
              <p>Destination</p>
              <p>Signings</p>
            </div>
            <div>
              <p>About Us</p>
              <p>Packages</p>
              <p>Events</p>
              <p>Gallery</p>
            </div>
            <div>
              <p>Our team</p>
              <p>Blog</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
      </div>
      <div className="end">
        <p>Copyright Africa Wizzy Safari 2022</p>
      </div>
    </div>
  );
}

export default Footer;
