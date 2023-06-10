import React from 'react'
import HEADER from './components/header/header'
import NAV from './components/nav/nav'
import ABOUT from './components/about/About'
import EXPIRENCE from './components/Expirence/Experience'
import SERVICES from './components/services/services'
import PORTFOLIO from './components/portfolio/portfolio'
import TESTIMONIAL from './components/testimonials/testimonials'
import CONTACT from './components/contact/contact'
import FOOTER from './components/footer/footer'


const App = () => {
  return (
   <>
     <HEADER />
     <NAV />
     <ABOUT />
     <EXPIRENCE />
     <PORTFOLIO />
     <CONTACT />
     <FOOTER />
   </>
  )
}

export default App