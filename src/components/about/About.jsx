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
        <div className="about_cards">
           <article className='about_card'>
             <FaAward className="about_icon" />
             <h5>Experience</h5>
             <small>1 Years Working</small>
           </article>
           <article className='about_card'>
             <FiUsers className="about_icon" />
             <h5>Clients</h5>
             <small>100+ Worldwide</small>
           </article>
           <article className='about_card'>
             <IoLibrarySharp className="about_icon" />
             <h5>Projects</h5>
             <small>10 completed </small>
           </article>
        </div>
        <p>
     Product lifecycle management (PLM) is the process of managing a product’s lifecycle from inception, through design and manufacturing, to sales, service, and eventually retirement.
     </p>
      
    <a href="#contact" className="btn btn-primary">Let's Talk</a>
     </div>
    </div>
    </section>
  )
}

export default About