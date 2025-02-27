import React from 'react';
import './article.css';

const Article = ({ imgUrl, title, text }) => (
  <div className="reactp__blog-container_article">
    <div className="reactp__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="reactp__blog-container_article-content">
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  </div>
);

export default Article;
