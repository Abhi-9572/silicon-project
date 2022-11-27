import React from 'react'
import image from '../assests/siliconIcon.svg'

const Navbar = () => {
  return (
   <div id='navbar'>
      <div id='navbarimg'>
      <img  src={image}/>
      <h2>Silicon</h2>
      
      {/* <i class="fa-solid fa-bars"></i>
      <i class="fa-regular fa-bars"></i> */}
      </div>
      
      <div id='navbarmiddle'>
      
      <div class="dropdown">
            <button class="dropbtn">Loadings
            <i class="fa-sharp fa-solid fa-caret-down"></i></button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
      </div>
      <div class="dropdown">
            <button class="dropbtn">Pages
            <i class="fa-sharp fa-solid fa-caret-down"></i></button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
      </div>
      <div class="dropdown">
            <button class="dropbtn">Portfolio
            <i class="fa-sharp fa-solid fa-caret-down"></i></button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
      </div>
      <div class="dropdown">
            <button class="dropbtn">Support</button>
      </div>
      <div class="dropdown">
            <button class="dropbtn">Docs</button>
      </div>
  </div>
      <div id='navbarmode'>
        <p>Light</p>
          <div>
            <label class="switch">
            <input type="checkbox"/>     
            <span class="slider round"></span>
          </label>
          </div>
         <p>Dark</p>
      </div>
      
      
      <button id='buybtn'><i class="fa-solid fa-cart-shopping"></i>    Buy Now</button>
          <input type="checkbox" id="click"/>
      <label for="click" className="menubar">
     <i class="fa-sharp fa-solid fa-bars"></i>
     </label> 
         
   </div>
  )
}

export default Navbar