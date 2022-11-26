import React from 'react'
import image from '../assests/image.svg'
import image2 from '../assests/image2.svg'
import image3 from '../assests/image3.svg'
import image4 from '../assests/image4.svg'


const Carousel = () => {
  return (
    <div id='carouselImg'>
        <div>
            <img src={image}/>
            <p>Light/Dark Mode</p>
        </div>
        <div>
            <img src={image2}/>
            <p>Figma Files Included</p>
        </div>
        <div>
            <img src={image3}/>
            <p>100+ UI Flexible Sections</p>
        </div>
        <div>
            <img src={image4}/>
            <p>Free Lifetime Updates</p>
        </div>
    </div>
    
  )
}

export default Carousel