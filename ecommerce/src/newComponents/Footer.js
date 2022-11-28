import React from 'react'
import "./Footer.css"
import youtube from "../asset/youtube.png"
import spotify from "../asset/spotify.png"
import facebook from "../asset/facebook.png"


const Footer = () => {
  return (
    <footer className="footer">
    <span>The Generics</span>
    <div className="links">
      <a rel='noreferrer' href='https://www.youtube.com' target='_blank'>
        <img src={youtube} alt='YouTube'/>
      </a>
      <a rel='noreferrer' href='https://www.spotify.com' target='_blank'>
        <img src={spotify} alt='Spotify' />
      </a>
      <a rel='noreferrer' href='https://www.facebook.com' target='_blank'>
        <img src={facebook} alt='Facebook' />
      </a>
    </div>
  </footer>
  )
}

export default Footer