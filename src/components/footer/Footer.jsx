import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#Home" className='footer__logo'>YORDANOS</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/share/1AJ28Sbe9p/"><FaFacebookF/></a>
        <a href="https://www.instagram.com/alemayehuyordanos?utm_source=qr&igsh=MWhrdTVjaDBiZTFuMw=="><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; YORDANOS ALEMAYEHU MEKONNEN 2026. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer