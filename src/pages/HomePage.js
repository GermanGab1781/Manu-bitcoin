import React from 'react'
import ReactPlayer from 'react-player'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'
import { BsBookHalf,BsFillBellFill,BsFillXDiamondFill,BsGem,BsCurrencyExchange,BsMinecart,BsCurrencyDollar,BsFillJournalBookmarkFill,BsMenuDown,BsFillBriefcaseFill,BsFillCartFill} from "react-icons/bs";

export default function HomePage() {
  const stringStyle = "footerHome";
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:4}}} exit={{opacity:0}} className='HomePageWrapper'>
      <div className="YoutubeVideo">
        <ReactPlayer className="YoutubeVideo" width={"70vw"} height={"40vw"} url='https://www.youtube.com/watch?v=di6DNjmrYwo&ab_channel=Invertirencripto' controls="true" />
      </div>
      <div className="Introduction">
        <span className='introTitle'>Acerca de nosotros</span><br/>
        <span className='introText'>Nosotros somos Juan Francisco Carballo y Manuel Agustín Londra, dos amigos y socios entusiastas de las inversiones y las criptomonedas. Juan es un jóven argentino de 27 años con un título de grado en Abogacia de la Universidad de Buenos Aires (UBA) e inversor en criptomonedas desde el año 2019 y en lo que respecta a Manuel, también argentino de 27 años con una Licenciatura en Administración de Empresas de la Universidad Argentina de la Empresa (UADE) como así también una maestría en TIC de la misma universidad, inversor del mercado de capitales tradicional desde el año 2013 y en cripto desde 2017. En el año 2019 creamos nuestra principal red social, la cuenta de Instagram la cual nombramos "Invertirencripto" y empezamos a crear contenido sobre lo que nos apasiona: las inversiones y las criptomonedas. Queremos seguir compartiendo información de cada vez de mayor calidad para ayudar a la mayor cantidad de personas posible a incursionar en el mundo de las inversiones y las criptomonedas.
        </span>
      </div>
      <span className='introTitle links'>Nuestros Servicios</span>
      <div className="Links">
      <a href='https://www.instagram.com/' rel="noreferrer" target="_blank" className='linksButton'>
        <BsFillBellFill className='linksButtonIcon left'/>
        <span className='linksButtonText'>Asesoría Personalizada</span>
        <BsFillBellFill className='linksButtonIcon right'/>
      </a>
      <a href='https://www.instagram.com/' rel="noreferrer" target="_blank" className='linksButton'>
        <BsFillXDiamondFill className='linksButtonIcon left'/>
        <span className='linksButtonText'>Grupo de Telegram GRATIS</span>
        <BsFillXDiamondFill className='linksButtonIcon right'/>
      </a>
      <a href='https://www.instagram.com/' rel="noreferrer" target="_blank" className='linksButton'>
        <BsGem className='linksButtonIcon left'/>
        <span className='linksButtonText'>Grupo de Telegram VIP</span>
        <BsGem className='linksButtonIcon right'/>
      </a>
      <a href='https://www.instagram.com/' rel="noreferrer" target="_blank" className='linksButton'>
        <BsCurrencyExchange className='linksButtonIcon left'/>
        <span className='linksButtonText'>Grupo Privado de Inversión en Pre-Ventas  </span>
        <BsCurrencyExchange className='linksButtonIcon right'/>
      </a>
      <a href='https://www.instagram.com/' rel="noreferrer" target="_blank" className='linksButton'>
        <BsMinecart className='linksButtonIcon left'/>
        <span className='linksButtonText'>Minería de Criptomonedas PoW</span>
        <BsMinecart className='linksButtonIcon right'/>
      </a>
      <a href='https://www.instagram.com/' rel="noreferrer" target="_blank" className='linksButton'>
        <BsCurrencyDollar className='linksButtonIcon left'/>
        <span className='linksButtonText'>Compra/Venta P2P de USD/USDT</span>
        <BsCurrencyDollar className='linksButtonIcon right'/>
      </a>
      <a href='https://www.instagram.com/' rel="noreferrer" target="_blank" className='linksButton'>
        <BsFillJournalBookmarkFill className='linksButtonIcon left'/>
        <span className='linksButtonText'>Asesoría Fiscal  y Contable Cripto Arg</span>
        <BsFillJournalBookmarkFill className='linksButtonIcon right'/>
      </a>
      <a href='https://www.instagram.com/' rel="noreferrer" target="_blank" className='linksButton'>
        <BsMenuDown className='linksButtonIcon left'/>
        <span className='linksButtonText'>Asesoría Legal Cripto en Argentina</span>
        <BsMenuDown className='linksButtonIcon right'/>
      </a>
      <a href='https://www.instagram.com/' rel="noreferrer" target="_blank" className='linksButton'>
        <BsFillBriefcaseFill className='linksButtonIcon left'/>
        <span className='linksButtonText'>Curso de Inversión en Criptomonedas</span>
        <BsFillBriefcaseFill className='linksButtonIcon right'/>
      </a>
      <a href='https://www.instagram.com/' rel="noreferrer" target="_blank" className='linksButton'>
        <BsFillCartFill className='linksButtonIcon left'/>
        <span className='linksButtonText'>¡Cripto Merch! (gorras,remeras,fundas y más)</span>
        <BsFillCartFill className='linksButtonIcon right'/>
      </a>
      </div>
      <div className="NavLinks">
        <a className='NavLink' href="https://drive.google.com/drive/folders/16FzUVbmezrNCO3xlJe8UfJT6b0RXeDnI" rel="noreferrer" target="_blank">
          <BsBookHalf className='NavLinkIcon'/>
          <span className="NavLinkTitle">Libros y Recursos gratuitos</span> 
        </a>
      </div>
      <Footer styleType={stringStyle}/>
    </motion.div>
  )
}
