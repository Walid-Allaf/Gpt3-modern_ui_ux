import React from "react";
import './header.css';
import people from '../../assets/people.png';
import heroImg from '../../assets/hero-img.png';

const Header = () => {
  return (
    <div className="gpt3-header section-padding" id="home">
      <div className="content">
          <h1 className="gradient-text">
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          
          <div className="input">
            <input type="email" placeholder="Your Email Address" />
            <button type="button">Get Started</button>
          </div>

          <div className="people">
            <img src={ people } alt="people" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
      <div className="hero-img">
        <img src={ heroImg } alt="HeroImg" />
      </div>
    </div>
  )
};

export default Header;
