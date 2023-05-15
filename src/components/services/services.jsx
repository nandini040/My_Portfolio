import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </li>
          </ul>
        </article>

        {/* End Of web development */}

        <article className="service">
          <div className="service_head">
            <h3>Data Migration</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services