import React from 'react'
import './Home.css'
function Home() {
    function handleScroll(){
        const midImage=document.querySelector('.Home-mid-image');
        const secImage=document.querySelector('.Home_sec_image');
        const scrolled=window.scrollY;
        midImage.style.marginTop=`${90-scrolled*0.2}px`;
        secImage.style.marginTop=`${-179+scrolled*0.3}px`;
    }
     

    window.addEventListener('scroll',handleScroll);

  return (
    <div className='Home_section'>
    <div id='leftFrameMotion'>
            <span id='leftFrameMotion1'>Silicon</span>
            <div>
            <span className='leftFrameMotion2'>Multipurpose Business /</span>
            <br/>
            <span className='leftFrameMotion2'>Technology Template</span>
            </div>
            <img src='	https://silicon.madrasthemes.com/wp-content/uploads/2022/01/switcher.svg'/>
            <div className='leftFrameMotion3'>
            <span class="fa-sharp fa-solid fa-circle-chevron-down"></span>
            <p>View Landings</p>
            </div>
        </div>
        <div className="Home-mid-image">
            <img src={require('../assests/scrollImage1.png')} alt="" />
        </div>
        <div className='Home_sec_image'>
        <img src={require('../assests/scrollImage2.png')} alt="" />
        </div>
    </div>
  )
}

export default Home