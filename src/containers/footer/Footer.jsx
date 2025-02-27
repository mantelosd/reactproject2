import React from 'react';
import reactpLogo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="reactp__footer section__padding">
    <div className="reactp__footer-heading">
      <h1 className="gradient__text">Καλωσήρθατε στην <br /> React.js</h1>
    </div>

    <div className="reactp__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="reactp__footer-links">
      <div className="reactp__footer-links_logo">
        <img src={reactpLogo} alt="reactp_logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="reactp__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="reactp__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="reactp__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="reactp__footer-copyright">
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
