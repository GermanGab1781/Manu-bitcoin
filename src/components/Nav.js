import { motion } from 'framer-motion';
import React from 'react';
import '../index.css'
import { NavLink } from 'react-router-dom'; 
export default function Nav() {
  return (
    <motion.div initial={{opacity:0}}
                animate={{opacity:1,transition:{duration:1}}}
                exit={{opacity:0}}   
                className='navbar'>
        <NavLink className="navButton brand" to="/Manu-bitcoin/" >BITCOIN</NavLink>
        <a className="navButton" href='https://www.instagram.com/' rel="noreferrer" target="_blank" >Youtube </a>
        <a className="navButton" href='https://www.instagram.com/' rel="noreferrer" target="_blank" >Instagram </a>
        <a className="navButton" href='https://www.instagram.com/' rel="noreferrer" target="_blank" >Linkedin</a>    
        <a className="navButton" href='https://www.instagram.com/' rel="noreferrer" target="_blank" >Telegram</a>
        <a className="navButton" href='https://www.instagram.com/' rel="noreferrer" target="_blank" >Twitch</a>
        <a className="navButton" href='https://www.instagram.com/' rel="noreferrer" target="_blank" >Twitter</a>   
    </motion.div>
  )
}

