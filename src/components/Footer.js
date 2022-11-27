import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div>
        <h1>Subscribe to Our Newsletter</h1>
        </div>
        <div>
        <form class="inline">
          <div class="input-icons">
          <i class="fa fa-envelope icon"></i>
          <input class="input-field" type="text" placeholder='Your email'/>
          <button className='footerbtn'>Subscribe</button>
          </div>
        </form>
        </div>
        <div id='footerCopyRight'>
        <i class="fa-solid fa-copyright"></i>
          <span> All rights reserved. Made with  </span>
          <span class="fa-solid fa-heart"></span>
          <span>  by Abhishek</span>
        </div>
    </div> 
  )
}

export default Footer