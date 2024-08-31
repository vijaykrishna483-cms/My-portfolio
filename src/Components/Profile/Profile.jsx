import React, { useEffect } from 'react';
import './Profile.css';
import { motion } from "framer-motion";
import cvvImage from '../Assets/cv.pdf';

const Profile = () => {

  useEffect(() => {
    const bgAnimation = document.getElementById('bgAnimation');

    if (bgAnimation) {
      const numberOfColorBoxes = 400;

      for (let i = 0; i < numberOfColorBoxes; i++) {
        const colorBox = document.createElement('div');
        colorBox.classList.add('colorBox');
        bgAnimation.append(colorBox);
      }
    }
  }, []); // The empty array ensures this effect runs only once after the component mounts.

  return (
    <>
    <div class="bgAnimation" id="bgAnimation">
        <div class="backgroundAnim">
            
        </div>
    </div>
      <div>
        <nav className='desktop-nav'>
          <div className='logo'><img src='logo.png' className='logos' alt=' /'/></div>
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
            <img src="crop.jpg" alt="Profile" className='wave-img' />
          </div>
          <div className="section-text">
            <p>Hello, I'm</p>
            <div className='name'><h1>Vijay </h1> <h1 className='krish'> Krishna</h1></div>
            
            <p>Student</p>
            <div className="btn-container">
              <button className="contactinfo"  onClick={() => { window.location.href = './#contact'; }}>
                contact info
              </button>
              <button className="Download-CV"  onClick={() => { window.open(cvvImage); }}>
                Download CV
              </button>
            </div>
            <div id="social-container">
              <img 
                src="icons8-linkedin-48.png"
                alt="my linkedin profile"
                className="icon"
                onClick={() => { window.location.href = 'https://www.linkedin.com/in/vijay-krishna-s-b68916283/?trk=opento_sprofile_goalscard'; }}
              />
              <img 
                src="icons8-whatsapp-48.png"
                alt="my whatsapp profile"
                className="icon"
                onClick={() => { window.location.href = 'https://wa.me/+918943687489'; }}
              />
            </div>
          </div>
        </div>

        <div><p className='abt-text'></p></div>
      </div>
    </>
  );
}

export default Profile;
