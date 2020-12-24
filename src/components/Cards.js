import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import img9 from '../images/img-9.jpg';
import img3 from '../images/img-3.jpg';
import img4 from '../images/img-4.jpg';
import img8 from '../images/img-8.jpg';
import imgHome from '../images/img-home.jpg';

function Cards() {
  return (
    <div className="cards">
      <h1>Checkout this epic destinations</h1>
      <div className="cars__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              path='/services'
              label='Adventure'
              src={img9}
              text='Explore de the hidden waterfall deep inside the Amazon Jungle'
            />
            <CardItem 
              path='/services'
              label='Luxury'
              src={imgHome}
              text='Travel through the islands o Bali in a private cruise'
            />
          </ul>
          <ul className="cards__items">
            <CardItem 
              path='/services'
              label='Mystery'
              src={img3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
            />
            <CardItem 
              path='/services'
              label='Adventure'
              src={img4}
              text='Experience Soccer in the top oh Himilayan Montains'
            />
            <CardItem 
              path='/services'
              label='Adventure'
              src={img8}
              text='Ride through Saara Desert on a guided camel tour'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
