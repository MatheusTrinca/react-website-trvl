import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
      <h1>Checkout this epic destinations</h1>
      <div className="cars__container">
        <div className="cards__wrapper">
          <ul className="cads__items">
            <CardItem/>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
