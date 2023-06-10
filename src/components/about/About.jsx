import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {IoLibrarySharp} from 'react-icons/io5'
const About = () => {
  return (
    <section id="about">
    <h5>Get to Know</h5>
    <h2>About Me</h2>

    <div className="container about_container">
     <div className="about_me">
        <div className="about_me-image">
          <img src={ME} alt="About Image"/>
        </div>
     </div>
     <div className="about_content">
        <h2>
        Website for coaches who know that priortizing people leads to profit
        </h2>
        <p>
        Passionate web developer with a strong eye for detail and a love for creating functional and visually appealing websites that make a lasting impact.
        With a focus on user-centric design principles, I strive to create websites that not only captivate audiences visually but also enhance their interactions, fostering meaningful connections between brands and users.
       </p>
      
    <a href="#contact" className="btn btn-primary">Let's Talk</a>
     </div>
    </div>
    </section>
  )
}

export default About