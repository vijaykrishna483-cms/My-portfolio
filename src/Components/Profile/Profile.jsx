import React from 'react';
import './Profile.css';
import { motion } from "framer-motion"

const Profile = () => {
  return (
    <div >
      <nav className='desktop-nav'>
        <div className='logo'>Vijay Krishna S</div>
        <div>
          <ul className='nav-links'>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div className='profile'>
        <div className="img">
          <img src="orignanl dp (1) (1).jpg" alt="Profile" className='wave-img' />
        </div>
        <div className="section-text">
          <motion.p initial={{ x:100 , opacity:0 }} animate={{x:0 , opacity:1}} transition={{ duration: 0.5 , delay:0.5 }} className="section-text-p1" style={{ animationDelay: '0s' }}>Hello, I'm</motion.p>
          <motion.h1 initial={{ x:100 , opacity:0 }} animate={{x:0 , opacity:1}} transition={{ duration: 0.5 , delay:0.5 }} className="title" style={{ animationDelay: '0.2s' }}>Vijay Krishna</motion.h1>
          <motion.p initial={{ x:100 , opacity:0 }} animate={{x:0 , opacity:1}} transition={{ duration: 0.5 , delay:0.5 }} className="section-text-p2" style={{ animationDelay: '0.4s' }}>Student</motion.p>
          <div className="btn-container">
            <button className="contactinfo" style={{ animationDelay: '0.6s' }} onClick={() => { window.location.href = './#contact'; }}>
              contact info
            </button>
            <button className="Download-CV" style={{ animationDelay: '0.8s' }} onClick={() => { window.open('./images/Data science AI and ML Marketing.jpg'); }}>
              Download CV
            </button>
          </div>
          <div id="social-container">
            <img style={{ animationDelay: '1s' }}
              src="icons8-linkedin-48.png"
              alt="my linkedin profile"
              className="icon"
              onClick={() => { window.location.href = 'https://www.linkedin.com/in/vijay-krishna-s-b68916283/?trk=opento_sprofile_goalscard'; }}
            />
            <img style={{ animationDelay: '1.2s' }}
              src="icons8-whatsapp-48.png"
              alt="my whatsapp profile"
              className="icon"
              onClick={() => { window.location.href = 'https://wa.me/8943687489'; }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
