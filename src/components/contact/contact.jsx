import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5y70yib', 'template_4ghzxpc', form.current, '3YLOa4AC31jbetUvl')
     
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Conatct Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
            <article className="contact_option">
              <MdOutlineEmail className="contact_options-icon" />
              <h4>Email</h4>
              <h5>nandinina040@gmail.com</h5>
              <a href="mailto:nandinina040@gmail.com" target="_blank">Send a Message</a>
            </article>
            <article className="contact_option">
              <RiMessengerLine className="contact_options-icon" />
              <h4>Messenger</h4>
              <h5>nandini_n_a</h5>
              <a href="https://www.instagram.com/nandini_n_a" target="_blank">Send a Message</a>
            </article>
            <article className="contact_option">
              <BsWhatsapp className="contact_options-icon" />
              <h4>WhatsApp</h4>
              <h5>+91 XXXXXXX</h5>
              <a href="https://api.whatsapp.com/send?phone+919878114812" target="_blank">Send a Message</a>
            </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
           <input type="text" name="name" placeholder="Your Full Name" required></input>
           <input type="email" name="email" placeholder="Your Email" required></input>
           <textarea name="message" id="" rows="7" placeholder="Your Message" required></textarea>
           <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact