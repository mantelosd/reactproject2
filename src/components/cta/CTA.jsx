import React from 'react';
import './cta.css';

const CTA = () => (
  <div className="reactp__cta">
    <div className="reactp__cta-content">
      <h3>Μάθε React τώρα!</h3>
    </div>
    <div className="reactp__cta-btn">
      <button type="button" onClick={() => window.open('https://reactnative.dev/docs/environment-setup', '_blank')}>Get Started</button>
    </div>
  </div>
);

export default CTA;
