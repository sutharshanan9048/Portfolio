import React from 'react'
import './homepage.css'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import formal from '../images/formal.jpg';
import res from '../Resume/sutharsan.pdf';
const HomePage = () => {
  return (
    <>
    <div className='container'>
      <div className='home'>
        <h4>Hi, I'm</h4 >
        <h1>Sutharshanan M</h1>
        <h3><span>FullStack Developer</span></h3>
        <p>Fullstack Development with expertise in both frontend (React, HTML/CSS) and backend (Database, Django) technologies.</p>
        </div>
      
      <div className='image'>
        <img src={formal} alt="Formal" />
      </div>
      </div>
      <div className='logo'>
          <FaLinkedin/>
          <FaSquareInstagram/>
          <FaFacebook className='logo1'/>
          <IoLogoGithub className='logo1'/>
      </div>
        <button><a href={res} download >CV download</a></button>
   
    </>

  )
}

export default HomePage
