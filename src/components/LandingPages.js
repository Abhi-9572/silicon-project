import React from 'react'
import image1 from '../assests/app-showcase1.jpg'
import image2 from '../assests/app-showcase2.jpg'
import image3 from '../assests/app-showcase3.jpg'
import image4 from '../assests/app-showcase4.jpg'
import image5 from '../assests/app-showcase5.jpg'
import image6 from '../assests/app-showcase6.jpg'
import image7 from '../assests/app-showcase7.jpg'
import image8 from '../assests/app-showcase8.jpg'
import image9 from '../assests/app-showcase9.jpg'

const LandingPages = () => {
  return (
    <div>
        <div className='landinhHeader'>
        <h1> Landing Pages</h1>
        <p style={{fontSize:"20px"}}>Choose from pre-built layouts of our unique landing pages</p>
        </div>
        
        <div className='Landingcards'>
            <div className='Landingcard'>
                <img className='landingimg' src={image1}/>
               
                <p>Mobile App ShowCase</p>
                
            </div>
           
            <div className='Landingcard'>
                <img className='landingimg' src={image2}/>
                <p>SaaS v.1</p>
            </div>
            <div  className='Landingcard'>
                <img className='landingimg' src={image3}/>
                <p>SaaS v.2</p>
            </div>
            <div className='Landingcard'>
                <img className='landingimg' src={image4}/>
                <p>Financial Consulting</p>
            </div>
            <div className='Landingcard'>
                <img className='landingimg' src={image5}/>
                <p>Medical</p>
            </div>
            <div className='Landingcard'>
                <img className='landingimg' src={image6}/>
                <p>Digital Agency</p>
            </div>
            <div className='Landingcard'>
                <img className='landingimg' src={image7}/>
                <p>Conference</p>
            </div>
            <div className='Landingcard'>
                <img className='landingimg' src={image8}/>
                <p>IT(Software) Company</p>
            </div>
            <div className='Landingcard'>
                <img className='landingimg' src={image9}/>
                <p>Blog HomePage</p>
            </div>
        </div>
    </div>
  )
}

export default LandingPages