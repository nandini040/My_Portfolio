import React from 'react'
import CV from '../../assets/Nandini.pdf'
import './header.css'

const Action = () => {
  return (
    <div className="cta">
        <a href={CV} download className="btn"> Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Action