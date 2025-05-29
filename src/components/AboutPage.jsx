import React from 'react'
import './navbar.css'
import insta from '../images/insta.jpg';
const AboutPage = () => {
  return (
    <>
    <div className='about'>
      <div className='about-1'>
      <img src={insta} alt="img" />
      </div>
      <div className='about-2'>
         <h1>About <span>Me</span></h1>
         <h3>FullStack Developer </h3>
         <p>I am Sutharshanan M, a passionate Fullstack Developer with a Bachelor's in Electrical Engineering with expertise in building  web applications, problem-solving, and collaborative teamwork, I aim to leverage my technical skills and adaptability to create efficient digital solutions while continuously expanding my knowledge in web technologies.</p>      </div>
    </div>
    </>
  )
}

export default AboutPage
