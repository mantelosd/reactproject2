import React from 'react';
import reactpLogo from '../../assets/Logo_React.png';
import './footer.css';

const Footer = () => (
  <div className="reactp__footer section__padding">
    <div className="reactp__footer-heading">
      <h1 className="gradient__text">Καλωσήρθατε στην <br /> React</h1>
    </div>

    <div className="reactp__footer-btn">
      <p><a href="https://react.dev/learn">Get Started</a></p>
    </div>

    <div className="reactp__footer-links">
      <div className="reactp__footer-links_logo">
        <img src={reactpLogo} alt="reactp_logo" />
        <p>Copyright © Meta Platforms<br /> Incuwu?</p>
      </div>
      <div className="reactp__footer-links_div">
        <h4><a href="https://react.dev/learn">Learn React</a></h4>
        <p><a href="https://react.dev/learn">Quick Start</a></p>
        <p><a href="https://react.dev/learn/installation">Installation</a></p>
        <p><a href="https://react.dev/learn/describing-the-ui">Describing the UI</a></p>
        <p><a href="https://react.dev/learn/adding-interactivity">Adding Interactivity</a></p>
      </div>
      <div className="reactp__footer-links_div">
        <h4><a href="https://react.dev/community">Community</a></h4>
        <p><a href="https://github.com/facebook/react/blob/main/CODE_OF_CONDUCT.md">Code of Conduct</a></p>
        <p><a href="https://react.dev/community/team">Meet the Team</a></p>
        <p><a href="https://react.dev/community/docs-contributors">Docs Contributors</a></p>
        <p><a href="https://react.dev/community/acknowledgements">Acknowledgements</a></p>
      </div>
      <div className="reactp__footer-links_div">
        <h4>More</h4>
        <p><a href="https://react.dev/blog">Blog</a></p>
        <p><a href="https://reactnative.dev/">React Native</a></p>
        <p><a href="https://opensource.fb.com/legal/privacy/">Privacy</a></p>
        <p><a href="https://opensource.fb.com/legal/terms/">Terms</a></p>
      </div>
    </div>

    <div className="reactp__footer-copyright">
      <p>@2025 React. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
