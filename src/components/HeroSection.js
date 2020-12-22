import React from 'react'
import './HeroSection.css'
import '../App.css'
import banner from '../images/img-home.jpg';
import {Button} from './Button'

function HeroSection() {
  return (
    <div className="hero-container">
      <img src={banner} alt='Banner'></img>
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button 
          className='btn' 
          buttonStyle='btn--outline' 
          buttonSize='btn--large'>
            GET STARTED
        </Button>
        <Button 
          className='btn' 
          buttonSize='btn--large'>
            WATCH TRAILER <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
