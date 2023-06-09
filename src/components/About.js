import React, { useEffect } from 'react';
import "./About.css";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FadeInGrid from './FadeIn';

function About() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();


  useEffect(() => {
    if (inView1) {
      controls1.start('visible');
    } else {
      controls1.start('hidden');
    }
  }, [controls1, inView1]);

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

  const animationVariants1 = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
      },
    },
  };

  const animationVariants2 = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
        ease: 'easeOut',
      },
    },
  };

  const animationVariants3 = {
    hidden: {
      opacity: 0,
      x: -300,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
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
              <motion.div
                ref={ref1}
                initial="hidden"
                animate={controls1}
                variants={animationVariants1}
              >
                <p className='aboutPara'>
                  I'm a graduate of Temple University with experience primarily in the front-end and a
                  growing interest in full-stack development. My work with HTML, CSS and JavaScript
                  has given me a strong foundation in front-end web development, and I have contributed
                  to various projects that utilize these technologies. As a computer science major, I have
                  gained a comprehensive understanding of programming concepts and techniques, allowing me
                  to solve complex problems in a variety of domains. With my skills and experience, I am
                  excited to expand my knowledge and explore the possibilities of full-stack development.
                  I believe that a career in software development, with a focus on both front-end and
                  back-end technologies, will allow me to make meaningful contributions to the field
                  while continuously challenging and improving my skills.
                </p>
              </motion.div>
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