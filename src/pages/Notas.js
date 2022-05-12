import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { BsFillCalendar2RangeFill, BsFillCameraVideoFill, BsFillCheckSquareFill } from "react-icons/bs";

export default function Notas() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:2}}} exit={{opacity:0}} className='NavPageWrapper'>
      <NavLink className="goBackHome" to="/"> Volver</NavLink>
      <a href='https://www.instagram.com/' target="_blank" className='linksButton'>
        <BsFillCameraVideoFill className='linksButtonIcon'/>
        <span className='linksButtonText'>Link Ejemplo</span>
      </a>
      <a href='https://www.instagram.com/' target="_blank" className='linksButton'>
        <BsFillCalendar2RangeFill className='linksButtonIcon'/>
        <span className='linksButtonText'>Link Ejemplo</span>
      </a>
      <a href='https://www.instagram.com/' target="_blank" className='linksButton'>
        <BsFillCheckSquareFill className='linksButtonIcon'/>
        <span className='linksButtonText'>Link Ejemplo</span>
      </a>
      <a href='https://www.instagram.com/' target="_blank" className='linksButton'>
        <BsFillCalendar2RangeFill className='linksButtonIcon'/>
        <span className='linksButtonText'>Link Ejemplo</span>
      </a>
      <a href='https://www.instagram.com/' target="_blank" className='linksButton'>
        <BsFillCameraVideoFill className='linksButtonIcon'/>
        <span className='linksButtonText'>Link Ejemplo</span>
      </a>
      <a href='https://www.instagram.com/' target="_blank" className='linksButton'>
        <BsFillCheckSquareFill className='linksButtonIcon'/>
        <span className='linksButtonText'>Link Ejemplo</span>
      </a>
      <Footer style="footerNotHome"/>
    </motion.div>
  )
}
