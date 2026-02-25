import React from 'react'
import ME from '../../assets/yo2.png'
import CTA from './CTA'
import './header.css'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Yordanos Mekonnen</h1>
        <h5 className="text-light">Mechatronics Enginner</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
