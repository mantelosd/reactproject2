import React from 'react';
// import people from '../../assets/people.png';
import ai from '../../assets/react-2.svg';
import './header.css';

const Header = () => (
  <div className="reactp__header section__padding" id="home">
    <div className="reactp__header-content">
      <h1 className="gradient__text">Καλώς ήρθατε στην React.js</h1>
      <p>Σε αυτήν την παρουσίαση θα μάθουμε τις ιδιαιτερότητες της γλώσσας React.js πως να προγραμματίζουμε με αυτήν την γλώσσα κτλ...</p>

      {/* <div className="reactp__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div> */}

      {/* <div className="reactp__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    <div className="reactp__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
