import React from 'react'

import about from '../assets/about.jpg'

const About = () => {
  return (
    <div id='about'>
      <h2>About Me</h2>
      <section className='about_section'>
        <div className="a_img">
          <img src={about} alt='About_Profile' />
        </div>
        <div className="a_text">
          <h3>A dedicated Front-end Developer based in Dhaka, Bangladesh 📍</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sed adipisci itaque! Vitae quisquam blanditiis animi quia velit tenetur in, est officiis amet veniam impedit laborum nihil eius voluptates similique dignissimos recusandae cum alias maxime dolorum. Eveniet distinctio itaque animi magnam, deleniti, officiis nesciunt esse incidunt voluptatum ex, labore soluta placeat? Aliquid atque accusantium, magni repellat, amet ipsa magnam repudiandae quam possimus voluptatibus inventore consequuntur eligendi corrupti natus totam expedita animi dignissimos nam mollitia voluptatem libero? Quae mollitia nihil incidunt aspernatur excepturi, sed quis repellendus quia libero a molestias aperiam reiciendis sequi modi rem! Vitae impedit voluptates libero quaerat sunt!</p>
        </div>
      </section>
    </div>
  )
}

export default About