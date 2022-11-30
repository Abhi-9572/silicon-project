import React from 'react'
const LandingImage=require('../../assests/landingsdropdown.jpg');
function Landings() {
  return (
    <div  className='Landing-flex'>
    <div className='Landing_dropdown'>
        <div className='Landing_left'>
            <img src={LandingImage} alt="" />
        </div>
        <div className='Landing_right'>
              <div className='Landing_right_div'>
                <div className='landing_menus'>Template Intro Page</div>
                <div className='landing_menus'>Mobile APP Showcase</div>
                <div className='landing_menus'> Mobile App Showcase v.2</div>
                <div className='landing_menus'> Startup</div>
                <div className='landing_menus'>SaaS v.1</div>
                <div className='landing_menus'>SaaS v.2</div>
                <div className='landing_menus'>SaaS v.3</div>
                <div className='landing_menus'>Medical</div>
                <div className='landing_menus'>IT(software) Company</div>
                <div className='landing_menus'>Conference</div>
                <div className='landing_menus'>Digital Agency</div>
                <div className='landing_menus'>Blog Homepage</div>
              </div>
        </div>
    </div>
    </div>
  )
}

export default Landings