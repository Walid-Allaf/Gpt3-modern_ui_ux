import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3-footer section-padding'>
      <div className="container">
        <div className="heading">
          <h1 className='gradient-text'>Do you want to step in to the future before others</h1>
        </div>
        <div className="btn">
          <p>Request Early Access</p>
        </div>
        <div className="links">
          <div className="logo">
            <img src={ logo } alt="logo" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className="links-div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="links-div">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="links-div">
            <h4>Get in touch</h4>
            <p>Crechterwood K12 182 Dk Alknjkcb</p>
            <p>085-123456</p>
            <p>info@payme.net</p>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2021 GPT-3. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
