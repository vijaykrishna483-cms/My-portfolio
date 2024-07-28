import React from 'react'
import './contact.css'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion"
const contact = () => {
  return (
    <section id='contact'>
    <div className='contact'>
      <div className='text-contact'>Contact Me</div>
      <div className='text' style={{marginBottom:'5px'}}><BiLogoGmail /> Vijay762005@gmail.com</div>
      <div className='text'><FaPhoneAlt /> 8943687489</div>
      <div id="social-container">
      <FaLinkedin     className="iconu"
              onClick={() => { window.location.href = 'https://www.linkedin.com/in/vijay-krishna-s-b68916283/?trk=opento_sprofile_goalscard'; }}
/>
           
      <IoLogoWhatsapp className="iconu"
              onClick={() => { window.location.href = 'https://wa.me/8943687489'; }} />
              

      <FaInstagram   className="iconu" onClick={() => { window.location.href = 'https://www.instagram.com/v._ija.y/'; }}/>
          </div>
    </div>
    </section>
  )
}

export default contact
