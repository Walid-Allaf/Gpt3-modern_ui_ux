import React from "react";
import './article.css';

const Article = ({ imageURL, date, title }) => {
  return (
    <div className="gpt3-article">
      <div className="image">
        <img src={ imageURL } alt="imageURL" />
      </div>
      <div className="content">
        <div>
          <p>{ date }</p>
          <h3>{ title }</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
};

export default Article;
