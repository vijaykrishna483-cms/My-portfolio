import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaFigma } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import'./Exp.css'
const Exp = () => {
  return (
    <div className='Tech'>
      <div className='text-tech'>Technologies</div>
      <div className='icon-box'>
      <FaReact className='icons' style={{ color: 'blue' ,animationDelay: '0s' }}/>
      <FaHtml5 className='icons' style={{ color: 'orange',animationDelay: '0.2s' }}/>
      <IoLogoCss3 className='icons' style={{ color: 'yellow',animationDelay: '0.4s' }}/>
      <FaFigma className='icons' style={{ color: 'violet' ,animationDelay: '0.6s'}}/>
      <FaPython className='icons' style={{ color: 'yellow',animationDelay: '0.8s' }}/>
      <IoLogoJavascript className='icons'style={{ color: '#d5b931' ,animationDelay: '1s'}}/>
      </div>
    </div>
  )
}

export default Exp
