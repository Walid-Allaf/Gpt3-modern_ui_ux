import React from "react";
import { CTA, Brand, Navbar } from "./components";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import "./App.css";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient-bg">
        <div className="container">
          <Navbar />
          <Header />
        </div>
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
