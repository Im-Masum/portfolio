import React from 'react'

import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import masum from '../assets/profile1.jpg'
import {FaLinkedin, FaGithub, FaArrowDown} from 'react-icons/fa'

import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import sass from '../assets/sass.png'
import react from '../assets/react.png'
import hi from '../assets/hi.png'

const Home = () => {
  const motionAnimation = {
    h1 : {
      initial: {
        x: "100%",
        opacity: 0
      },
      whileInView: {
        x: 0,
        opacity: 1
      }
    },
    div : {
      initial: {
        x: "-100%",
        opacity: 0
      },
      whileInView: {
        x: 0,
        opacity: 1
      }
    },
    p : {
      initial: {
        y: "-100%",
        opacity: 0
      },
      whileInView: {
        y: 0,
        opacity: 1
      },
      transition: {
        delay: 0.6
      }
    }
  }
  
  return (
    <>
     <div id='home'>
      <section className='home_section'>
        <div className="text-content">
          <motion.h1 {...motionAnimation.h1}>
            Front-End
            <Typewriter options={{
              strings: ['React Developer', 'Web Developer', 'NextJs Developer'],
              loop: true,
              autoStart: true,
              cursor: '',
              wrapperClassName: 'typewriter'
            }} />
          </motion.h1>
          <motion.p {...motionAnimation.p}>
            <h3 className='hi'>Hi,<img src={hi} alt="Hi" /></h3>
            <p>I'm Masum Hossain. A passionate Front-End React Developer based in Dhaka, Bangladesh.</p>
          </motion.p>
          <div className="social-link">
            <a href="https://www.linkedin.com/in/im-masum/" target='_blank' className='hire' rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Im-Masum" target='_blank' rel="noreferrer"><FaGithub /></a>
          </div>
          <motion.div {...motionAnimation.div} className="tech">
            <h3>Tech Stack</h3>
            <ul className="tech-img">
              <li><img src={html} alt="HTML" /></li>
              <li><img src={css} alt="CSS" /></li>
              <li><img src={js} alt="Javascript" /></li>
              <li><img src={sass} alt="Sass" /></li>
              <li><img src={react} alt="React" /></li>
            </ul>
          </motion.div>
        </div>

        <div className="img-content">
          <div className="img">
            <img src={masum} title='Hi, My name is Masum' alt="Masum_Photo" />
          </div>
        </div>
        
        <a href="#about" className='arrow' title='Click Me'><FaArrowDown /></a>
      </section>
     </div>
    </>
  )
}

export default Home