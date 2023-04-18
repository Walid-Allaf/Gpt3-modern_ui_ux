import React, { useState } from "react";
import './navbar.css';
import logo from '../../assets/logo.svg';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">WhatGPT3</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [ toggleMenu, setToggleMenu ] = useState(true);

  return (
    <div className="gpt3-navbar">
      <div className="container">
        <div className="links">
          <div className="logo">
            <img src={ logo } alt="logo" />
          </div>
          <div className="links-container">
            <Menu />
          </div>
        </div>
        <div className="sign">
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>
        <div className="menu">
          { toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          }
          { toggleMenu && (
            <div className="menu-container scale-up-center">
              <div className="links">
                <Menu />
                <div className="sign">
                  <p>Sign in</p>
                  <button type='button'>Sign up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
};

export default Navbar;
