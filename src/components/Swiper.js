import { Swiper, SwiperSlide } from "swiper/react";
import image from '../assests/image.svg'
import image2 from '../assests/image2.svg'
import image3 from '../assests/image3.svg'
import image4 from '../assests/image4.svg'


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Swiper.css";

// import required modules
import { Pagination } from "swiper";

export default function Swipe() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div id='SwiperImage'>
        <SwiperSlide> <div>
            <img src={image}/>
            <p>Light/Dark Mode</p>
        </div></SwiperSlide>
        <SwiperSlide><div>
            <img src={image2}/>
            <p>Figma Files Included</p>
        </div></SwiperSlide>
        <SwiperSlide><div>
            <img src={image3}/>
            <p>100+ UI Flexible Sections</p>
        </div></SwiperSlide>
        <SwiperSlide><div>
            <img src={image4}/>
            <p>Free Lifetime Updates</p>
        </div></SwiperSlide>
        </div>
       </Swiper>
    </>
  );
}
