import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        {/* NETWORK ENGINEERING */}
        <article className="service">
          <div className="service__head">
            <h3>Network Engineering</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Designing IP addressing plans and subnetting for scalable networks.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Configuring VLANs, trunking, and inter-VLAN routing (router-on-a-stick).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Implementing routing concepts (static routing and fundamentals of dynamic routing).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Setting up DHCP, DNS basics, and NAT for enterprise-style connectivity.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Troubleshooting connectivity issues using a structured OSI/TCP-IP approach.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Building and documenting labs using Cisco Packet Tracer / GNS3.</p>
            </li>
          </ul>
        </article>

        {/* CYBERSECURITY */}
        <article className="service">
          <div className="service__head">
            <h3>Cybersecurity & Assessments</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Performing network reconnaissance and service enumeration with Nmap.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Analyzing traffic and investigating suspicious activity using Wireshark.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Executing vulnerability assessments and prioritizing risks with clear remediation steps.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Using Metasploit in lab environments to understand exploitation and defensive controls.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Basic firewall/ACL rule design to reduce attack surface and limit lateral movement.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Writing concise security reports: findings, impact, and recommendations.</p>
            </li>
          </ul>
        </article>

        {/* SYSTEMS + AUTOMATION */}
        <article className="service">
          <div className="service__head">
            <h3>Linux, Hardening & Automation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Hardening Linux servers (SSH security, least privilege, updates, and service control).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Configuring host-based firewalls (UFW) and intrusion prevention basics (Fail2ban).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Automating common tasks with Python scripts (scanning, parsing logs, reporting).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Working with authentication/authorization concepts and secure configuration practices.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Documenting procedures and building repeatable runbooks for operations.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Maintaining lab environments to continuously practice and validate skills.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services