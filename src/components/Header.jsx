import React from 'react'

const Header = () => {
  return (
    <nav>
      <a href="#home" className='logo'>im.Masum</a>
      <div className="navLists">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#Projects">Projects</a>
          <a href="#contact">Contact</a>
      </div>
      <a href="mailto: themasumhere@gmail.com">
          <button type='submit'>Email</button>
      </a>
    </nav>
  )
}

export default Header