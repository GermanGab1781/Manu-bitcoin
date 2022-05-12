import React from 'react'
import ReactPlayer from 'react-player'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

export default function HomePage() {
  return (
    <motion.div className='HomePageWrapper'>
      <div className="YoutubeVideo">
        <ReactPlayer className="YoutubeVideo" width={"70vw"} height={"40vw"} url='https://www.youtube.com/watch?v=jeuVYgo7TU8' controls="true" />
      </div>
      <div className="Introduction">
        <span className='introTitle'>Acerca de nosotros</span><br/>
        <span className='introText'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </span>
      </div>
      <div className="Links">
        <a href='https://www.instagram.com/' target="_blank" className='linksButton'>
          <span className='linksButtonIcon'>A</span>
          <span className='linksButtonText'>BRUh</span>
        </a>
        <a href='https://www.instagram.com/' target="_blank" className='linksButton'>
          <span className='linksButtonIcon'>A</span>
          <span className='linksButtonText'>BRUh</span>
        </a>
        <a href='https://www.instagram.com/' target="_blank" className='linksButton'>
          <span className='linksButtonIcon'>A</span>
          <span className='linksButtonText'>BRUh</span>
        </a>
        <a href='https://www.instagram.com/' target="_blank" className='linksButton'>
          <span className='linksButtonIcon'>A</span>
          <span className='linksButtonText'>BRUh</span>
        </a>
        <a href='https://www.instagram.com/' target="_blank" className='linksButton'>
          <span className='linksButtonIcon'>A</span>
          <span className='linksButtonText'>BRUh</span>
        </a>
        <a href='https://www.instagram.com/' target="_blank" className='linksButton'>
          <span className='linksButtonIcon'>A</span>
          <span className='linksButtonText'>BRUh</span>
        </a>
      </div>
      <div className="NavLinks">
        <NavLink className='NavLink' to='/'>
          <span className='NavLinkIcon'></span>
          <span className='NavLinkTitle'>Material Educativo</span> 
        </NavLink>
        <NavLink className='NavLink' to='/'>
          <span className='NavLinkIcon'></span>
          <span className='NavLinkTitle'>Notas</span> 
        </NavLink>
      </div>
    </motion.div>
  )
}
