import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio2.jpg'
import IMG2 from '../../assets/portfolio6.jpg'
import IMG3 from '../../assets/portfolio5.png'

// we are going to generate portfolio dynamically using array method function
const data=[
  {
    id: 1,
    image:IMG1,
    title:"Home Loan Calculater", 
    github:"https://github.com/nandini040/HOME_LOAN_CALCULATOR",
    demo:"https://nandini040.github.io/HOME_LOAN_CALCULATOR/",
  },
  {
    id: 2,
    image:IMG2,
    title:"Expense Tracker",
    github:"https://github.com/nandini040/Expense_Tracker",
    demo:"https://nandini040.github.io/Expense_Tracker/",
  },
  {
    id: 3,
    image:IMG3,
    title:"Typing Accuracy",
    github:"https://github.com/nandini040/Typing_Accuracy",
    demo:"https://nandini040.github.io/Typing_Accuracy/",
  }

]
const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio_container">
     {
       data.map(({id, image, title, github, demo}) => {
         return(
           <article key={id}   className="portfolio_item">
             <div className="portfolio_item-image">
               <img src={image} alt=""/>
             </div>
             <h3>{title}</h3>
             <div className="portfolio_item-cta">
               <a href={github} className="btn" target="_blank">Github</a>
               <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
             </div>
           </article>
         )
       })
     }
    </div>
    </section>
  )
}

export default Portfolio