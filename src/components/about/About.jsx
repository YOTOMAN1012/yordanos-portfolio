import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import ME from '../../assets/yo4.jpg'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Yordanos Mekonnen" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>8+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
          My name is Yordanos Mekonnen, a recent Master’s graduate in Mechatronics from the Warsaw University of Technology. I have a strong engineering foundation and hands-on experience across multidisciplinary projects, including full-stack development and ethical (white-hat) penetration testing.
I am CCNA certified, currently advancing my cybersecurity expertise with OSCP in progress, and continuously expanding my skills at the intersection of software, hardware, and network security. I bring a problem-solving mindset and a passion for building secure, efficient, and innovative systems.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About