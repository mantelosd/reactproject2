import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
import { featuresData } from './imports';

const Features = () => (
  <div className="reactp__features section__padding" id="features">
    <div className="reactp__features-heading">
      <h1 className="gradient__text">Πλεονεκτήματα <br />ReactJS</h1>
    </div>
    <div className="reactp__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
