import React from 'react';
import "../App.css";
import {Button} from "./Button";
import "./Landing.css";
import Particles from './Particles';
function Landing() {

  return (
    <div className="landing-container">
      <Particles id="tsparticles" />
      {/*<video src="/videos/video.mp4" autoPlay loop muted />*/}
      <h1>FULL STACK DEVELOPER</h1>
      <p>DENNIS LIANG SHU</p>
      <div className="landing-btns">
        <Button className="btns" buttonStyle="btn--landing" buttonSize="btn--large" link="#about">LEARN MORE</Button>
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large" link="resume.pdf">RESUME <i className="fa fa-book"/></Button>
      </div>
    </div>
  )
};

export default Landing;