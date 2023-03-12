import React from 'react';
import "./About.css";

function About() {
  return (
    <div className="about" id={'about'}>
        <h1>ABOUT</h1>
        <div className="flexContainer">
            <div className="flexItem">
                <img src="../../images/icon.jpg" alt="head icon" className='iconImg'/>
                <p>
                I'm a senior computer science major with experience primarily in the front-end with a 
                growing interest in full-stack development. My work with HTML, CSS and JavaScript
                has given me a strong foundation in front-end web development, and I have contributed 
                to various projects that utilize this technology. As a computer science major, I have 
                gained a comprehensive understanding of programming concepts and techniques, allowing me 
                to solve complex problems in a variety of domains. With my skills and experience, I am 
                excited to expand my knowledge and explore the possibilities of full-stack development. 
                I believe that a career in software development, with a focus on both front-end and 
                back-end technologies, will allow me to make meaningful contributions to the field 
                while continuously challenging and improving my skills.
                </p>
            </div>
            <div className="flexItem">
                <img src="../../images/experience.jpg" alt="experience" className='experienceImg'/>
            </div>
        </div>
    </div>
  )
}

export default About