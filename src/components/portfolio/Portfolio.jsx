import IMG4 from '../../assets/computer networking.png'
import IMG2 from '../../assets/enterprise network.png'
import IMG1 from '../../assets/hotel network.png'
import IMG3 from '../../assets/network design.png'
import IMG6 from '../../assets/securityonion.png'
import IMG5 from '../../assets/wazuh.png'
import './portfolio.css'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG5,
    title: 'wazuh',
    github: 'https://github.com/YOTOMAN1012/wazuh',
    
  },
  {
    id: 2,
    image: IMG3,
    title: 'Network_Design of a company',
    github: 'https://github.com/YOTOMAN1012/Network_Design_of_a_Company_in_Packet_Tracer-main',
    
  },
  {
    id: 3,
    image: IMG6,
    title: 'Security Onion',
    github: 'https://github.com/YOTOMAN1012/securityonion-2.4-main',
   
  },
  {
    id: 4,
    image: IMG1,
    title: 'Hotel Network',
    github: 'https://github.com/YOTOMAN1012/hotel-network',
    
  },
  {
    id: 5,
    image: IMG4,
    title: 'Computer Networking Project',
    github: 'https://github.com/YOTOMAN1012/Computer-Networking-Project-Packet-Tracer-main',
    
  },
  {
    id: 6,
    image: IMG2,
    title: 'Enterprise Network Infrastructure',
    github: 'https://github.com/YOTOMAN1012/network-infrastructure-lab',
   
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
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