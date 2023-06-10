import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {TfiTwitter} from 'react-icons/tfi'

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">Nandini</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#expirence">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.instagram.com/nandini_n_a" target="_blank"><BsInstagram /></a>
        <a href="https://twitter.com.com" target="_blank"><TfiTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Nandini. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer