import React from 'react';
import './readmorefeature.css';

const ReadMoreFeature = ({ title, text, subtitle, openDialog }) => (
  <div className="reactp__features-container__feature">
    <div className="reactp__features-container__feature-title">
      <div />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
    <div className="reactp__features-container_feature-text">
      <p>{text}
        <button
          type="button"
          onClick={openDialog}
          style={{ cursor: 'pointer', color: 'white', background: 'none', border: 'none', padding: 0, textDecoration: 'underline' }}
        >
          Read Full Article
        </button>
      </p>
    </div>
  </div>
);

export default ReadMoreFeature;
