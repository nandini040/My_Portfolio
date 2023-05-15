import React from 'react'
import './testimonial.css'
import AVTAR1 from '../../assets/avatar1.jpg' 
import AVTAR2 from '../../assets/avatar2.jpg' 
import AVTAR3 from '../../assets/avatar3.jpg' 
import AVTAR4 from '../../assets/avatar4.jpg' 
// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data =[
  {
    name:"Subhangini",
    image:AVTAR1,
    review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen "
  },
  {
    name:"Kirti",
    image:AVTAR2,
    review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen "
  },
  {
    name:"Mamta",
    image:AVTAR3,
    review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen "
  },
  {
    name:"Ishita",
    image:AVTAR4,
    review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen "
  }
]
const testimonials = () => {
  return (
    <section id="testimonials">
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

    <Swiper className="container testimonials_container"
     modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
    {
       data.map(({name, image, review}, index) => {
         return(
          <SwiperSlide key={index} className="testimonial">
         <div className="client_avtar">
           <img src={image} />
         </div>
         <h5 className="client_name">{name}</h5>
         <small className="client_review">{review}</small>
       </SwiperSlide>
         )
       })
     }
    </Swiper>
    </section>
  )
}

export default testimonials