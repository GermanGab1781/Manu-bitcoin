import React from 'react'
import {BsInstagram,BsTelegram,BsTwitter,BsYoutube} from "react-icons/bs"

export default function Footer({styleType}) {
  return (
    <div className={styleType}>
      <div className='footerGrid'>
        <a href='https://www.instagram.com/' rel="noreferrer" target="_blank"><BsInstagram className="footerIcon"/></a>
        <a href='https://www.instagram.com/' rel="noreferrer" target="_blank"><BsTwitter className="footerIcon"/></a>
        <a href='https://www.instagram.com/' rel="noreferrer" target="_blank"><BsTelegram className="footerIcon"/></a>       
        <a href='https://www.instagram.com/' rel="noreferrer" target="_blank"><BsYoutube className="footerIcon"/></a>
      </div>
      <a href='https://www.instagram.com/' rel="noreferrer" target="_blank" className="footerTitle">Invertirencripto</a>
    </div>
  )
}
