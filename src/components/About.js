import React, { useEffect } from 'react';
import "./About.css";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FadeInGrid from './FadeIn';

function About() {
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();



  useEffect(() => {
    if (inView2) {
      controls2.start('visible');
    } else {
      controls2.start('hidden');
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start('visible');
    } else {
      controls3.start('hidden');
    }
  }, [controls3, inView3]);

  const animationVariants2 = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  const animationVariants3 = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="about" id={'about'}>
      <h1 className="aboutHead">ABOUT</h1>
      <div className="flexContainer">
        <div className="flexItem">
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={controls2}
            variants={animationVariants2}
          >
            <img src="../../images/icon.jpg" alt="head icon" className='iconImg' />
          </motion.div>
          <motion.div
            ref={ref3}
            initial="hidden"
            animate={controls3}
            variants={animationVariants3}
          >
            <div className="backgroundDiv">
              
                <p className='aboutPara'>
                I am a highly skilled and versatile computer science graduate with a passion for web development. 
                With a strong foundation in Java, JavaScript, React, Node.js, and other modern technologies, 
                I possess the technical expertise to create innovative and dynamic web applications. My proficiency 
                in HTML5, CSS, and various frameworks such as Bootstrap and Next.js allows me to design visually 
                appealing and responsive user interfaces. With experience in database management using MySQL and 
                proficiency in version control systems like Git, I ensure efficient and organized development 
                processes. I leverage my knowledge of Agile and Scrum methodologies to deliver high-quality 
                results within strict timelines. With a keen eye for detail and a commitment to excellence, 
                I consistently demonstrate my ability to transform ideas into functional and user-friendly web experiences.
                </p>
            </div>
          </motion.div>
        </div>
        <div className="flexItem">
          <FadeInGrid/>
        </div>
      </div>
    </div>
  )
}

export default About