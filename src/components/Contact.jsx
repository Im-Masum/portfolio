import React from 'react'

import contact from '../assets/contact.png'

const Contact = () => {
  return (
    <div id='contact'>
      <h2>Don't be shy! Hit me up! 👇</h2>
        <section className='contact'>
          <form className='form'>
            <div className="top_name">
              <div className="inputFields">
                <label htmlFor="name">Name : </label>
                <input type="text" name='name' id='name' placeholder='Enter your name' required />
              </div>
              <div className="inputFields">
                <label htmlFor="email">Email : </label>
                <input type="email" name='email' id='email' placeholder='Enter your email' required />
              </div>
            </div>
            <div className="textFields">
              <label htmlFor="message">Message : </label>
              <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter your message...'></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>

          <div className="form_img">
            <div className="img">
              <img src={contact} alt="Contact_Image" />
            </div>
          </div>
        </section>
    </div>
  )
}

export default Contact