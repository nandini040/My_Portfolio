import React from 'react'
import './header.css'
import ACTION from './Action'
import ME from '../../assets/me.png'
import HEADERSOCIALS from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Nandini Chaudhary</h1>
        <h5 className="text-light">Developer</h5>
        <ACTION />
        <HEADERSOCIALS />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
      
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>

    </header>
  )
}

export default header