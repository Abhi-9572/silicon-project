import React from 'react'
import image from '../assests/market.svg'

const Header = () => {
  return (
    <div id='header'>
        <img id='headerimg' src={image}/>
        <button id='headerbtn'>Buy now</button>
    </div>
  )
}

export default Header