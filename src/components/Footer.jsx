import React from 'react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='footer'>
        <h3>Copyright &copy; 2023. All right are reserved</h3>
        <div className="social-link">
            <a href="https://www.linkedin.com/in/im-masum/" target='_blank' className='hire' rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Im-Masum" target='_blank' rel="noreferrer"><FaGithub /></a>
          </div>
    </section>
  )
}

export default Footer