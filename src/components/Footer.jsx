import React from 'react'

const Footer = () => {
  return (
    <div className='Footer mb-3'>
      <div className="footer-main">
        <h1 className='text-white'>Contact Me!!</h1>
        <p className='text-secondary text-center'>@shoebahmedsiddiqui</p>
      </div>
      <div className="footer-form">
        <input type="text" placeholder='Your Name' name="name" id="" />
        <input type="text" placeholder='Your Email' name="email" id="" />
        <textarea name="msg" placeholder='Message here...' id="" ></textarea>
        <input type="button" name="" id="btn" value="Send Message"/>
      </div>
    </div>
  )
}

export default Footer
