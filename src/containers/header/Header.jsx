import React from 'react';
import ai from '../../assets/react-2.svg';
import './header.css';

const Header = () => (
  <div className="reactp__header section__padding" id="home">
    <div className="reactp__header-content">
      <h1 className="gradient__text">Καλώς ήρθατε στην React</h1>
      <p>Σε αυτήν την παρουσίαση θα μάθουμε τις ιδιαιτερότητες της γλώσσας React.js πως να προγραμματίζουμε με αυτήν!</p>
    </div>

    <div className="reactp__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
