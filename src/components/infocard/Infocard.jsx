import React from 'react';
import './infocard.css';

const Infocard = ({ imgUrl, title, subtitle, text, left }) => {
  if (left) {
    return (
      <div className="react_project-container_infocard">
        <div className="react_project-container_infocard-image">
          <img src={imgUrl} alt="blog_image" />
        </div>
        <div className="react_project-container_infocard-content">
          <div>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="react_project-container_infocard">
      <div className="react_project-container_infocard-content">
        <div>
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
          <p>{text}</p>
        </div>
      </div>
      <div className="react_project-container_infocard-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
    </div>
  );
};

export default Infocard;
