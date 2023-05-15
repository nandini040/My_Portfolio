import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="expirence">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
      <div className="experience">
        <h3>Frontend Development</h3>
        <div className="experience_content">
          <article className="experience_detail">
            <BsPatchCheckFill  className="experience_detail-icon"/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className="experience_detail">
            <BsPatchCheckFill className="experience_detail-icon" />
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className="experience_detail">
            <BsPatchCheckFill className="experience_detail-icon" />
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className="experience_detail">
            <BsPatchCheckFill className="experience_detail-icon" />
            <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
      </div>

     {/* End of Frontent */}

      <div className="experience">
      <h3>PLM Developer</h3>
        <div className="experience_content">
          <article className="experience_detail">
            <BsPatchCheckFill  className="experience_detail-icon"/>
           <div>
            <h4>3DEXPERIENCE</h4>
            <small className='text-light'>Intermediate</small>
           </div>
          </article>
          <article className="experience_detail">
            <BsPatchCheckFill  className="experience_detail-icon"/>
           <div>
           <h4>SQL</h4>
            <small className='text-light'>Intermediate</small>
           </div>
          </article>
          <article className="experience_detail">
            <BsPatchCheckFill  className="experience_detail-icon"/>
            <div>
            <h4>MQL</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className="experience_detail">
            <BsPatchCheckFill  className="experience_detail-icon"/>
           <div>
            <h4>Java</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>
          <article className="experience_detail">
            <BsPatchCheckFill  className="experience_detail-icon"/>
            <div>
            <h4>C++</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className="experience_detail">
            <BsPatchCheckFill  className="experience_detail-icon"/>
            <div>
            <h4>ETL</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
      </div>

      </div>
    </section>
  )
}

export default Experience