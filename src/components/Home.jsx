import React from 'react'

import masum from '../assets/profile1.jpg'

const Home = () => {
  return (
    <>
     <section id='home'>
      <div className="text-content">
        <span>Hi,</span>
        <h1>I'm Front-End <br /> React Developer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. aut quaerat modi veniam laudantium tempora Magnam aspernatur nesciunt labore dolor tempore aut quaerat modi veniam laudantium tempora?</p>
        <a href="mailto: themasumhere@gmail.com" className='hire'>Hire Me</a>
        <a href="#projects">Projects</a>
      </div>

      <div className="img-content">
        <div className="img">
          <img src={masum} alt="Masum_Photo" />
        </div>
      </div>
    </section>   
    </>
  )
}

export default Home