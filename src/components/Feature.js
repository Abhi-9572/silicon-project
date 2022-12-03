import React from 'react'
import image4 from '../assests/feature4.svg'


const Feature = () => {
  return (
    <>
    <div>
    <span className='FeatureHeader'>More Silicon Features</span>
    </div>
<div className='cardsFeature'>
    <div class="cardFeature" >
    <img  src={image4} />
        <div class="card-body">
        <h5 class="card-title">Built with Bootstrap 5</h5>
        <p class="card-text">Silicon is the powerful front-end solution based on Bootstrap 5 — the world’s most popular responsive, mobile-first front-end component library.</p>
        </div>
    </div>
    <div class="cardFeature" style={{width: "18rem"}}>
    <img src={image4} />
        <div class="card-body">
        <h5 class="card-title">Detailed Documentation</h5>
        <p class="card-text">Download package includes the documentation that covers all crucial information about how to get started, customize template and components usage.</p>
        </div>
    </div>
    <div class="cardFeature" style={{width: "18rem"}}>
    <img src={image4} />
        <div class="card-body">
        <h5 class="card-title">Mobile Freindly Interface</h5>
        <p class="card-text">It's not a surprise that nowadays over 80% of users surf the inernet using their mobile devices. Silicon is 100% responsive and optimized for small touch screens</p>
        </div>
    </div>
    <div class="cardFeature" style={{width: "18rem"}}>
        <img src={image4} />
        <div class="card-body">
        <h5 class="card-title">Touch-Enabled Sliders</h5>
        <p class="card-text">In the era of touch screens it's important to ensure great user experience on mobile, especially when it comes to such frequently used interface component as slider.</p>
        </div>
    </div>
    <div class="cardFeature" style={{width: "18rem"}}>
    <img src={image4} />
        <div class="card-body">
        <h5 class="card-title">W3C Valid HTML Code</h5>
        <p class="card-text">All HTML files are checked via W3C validator to ensure 100% valid code. As you probably know invalid HTML limits innovation, but Silicon is innovative at its core.</p>
        </div>
    </div>
    <div class="cardFeature" style={{width: "18rem"}}>
    <img src={image4} />
        <div class="card-body">
        <h5 class="card-title">Kick-Start Your Development</h5>
        <p class="card-text">Start your development process fast and easy with Node.js and Gulp setup. Configuration files are included in download package. Full tasks automation.</p>
        </div>
    </div>
    <div class="cardFeature" style={{width: "18rem"}}>
    <img src={image4} />
        <div class="card-body">
        <h5 class="card-title">Future Proof Java-Script</h5>
        <p class="card-text">Silicon core scripts as well as all dependencies are written in vanilla JS. And now with Bootstrap 5 we finally drop jQuery and use ES6 modules.</p>
        </div>
    </div>
    <div class="cardFeature" style={{width: "18rem"}}>
    <img src={image4} />
        <div class="card-body">
        <h5 class="card-title">Easy to Customize with Sass</h5>
        <p class="card-text">Silicon is built using Sass. Easily change colors, typography and much more. It is the most mature, stable, and powerful CSS extension language in the world.</p>
        </div>
    </div>
</div>
    </>
  )
}

export default Feature