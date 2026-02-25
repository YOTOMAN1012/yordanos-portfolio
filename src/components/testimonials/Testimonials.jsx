import React from 'react'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import './testimonials.css'

// import Swiper core and required modules
import { Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'



const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'We hired through Upwork, and it was one of our best decisions. This developer delivered a seamless full stack solution that checked every box — fast, functional, and beautifully designed. Highly dependable and easy to work with.'
  },
  {
    avatar: AVTR2,
    name: 'Kwame Despite',
    review: 'Exceptional skills across the board. From UI polish to backend logic, everything was top-tier. We’ll definitely be returning for more projects. Found via Upwork, and worth every cent.'
  },
  {
    avatar: AVTR3,
    name: 'Nana Ama McBrown',
    review: 'Fiverr doesn’t always guarantee quality — but this developer proved otherwise. The mobile-friendly web app they built for us was sleek, secure, and delivered ahead of schedule. Great experience all around.'
  },
  {
    avatar: AVTR4,
    name: 'Mirela (FST - Field Service Techs)',
    review: 'We needed someone who could quickly understand our workflow and improve our internal field service tools. Found them on Upwork, and they delivered with precision. Their full stack know-how and IT experience made a huge impact.'
  }
  
  
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials