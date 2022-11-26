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
          <span>All right  Made with </span>
          <span class="fa-solid fa-heart"></span>
          <span>made by me</span>
        </div>
    </div> 
  )
}

export default Footer