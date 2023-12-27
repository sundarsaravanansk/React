import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css';

const ImageSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
      };

    return (
        <div className="slide">
        <div className="mx-w">
            <div className='DDF'>
          <Slider {...settings}>
            <div>
              <img src="./image/banner/banner-1.jpeg" />
            </div>
            <div>
              <img src="./image/banner/banner-2.jpeg" />
            </div>
            <div>
              <img src="./image/banner/banner-3.jpg" />
            </div>
            <div>
              <img src="./image/banner/banner-4.jpeg" />
            </div>
            <div>
              <img src="./image/banner/banner-5.jpeg" />
            </div>
            <div>
              <img src="./image/banner/banner-6.jpg" />
            </div>
            <div>
              <img src="./image/banner/banner-7.jpeg" />
            </div>
            <div>
              <img src="./image/banner/banner-8.jpg" />
            </div>
            <div>
              <img src="./image/banner/banner-9.jpg" />
            </div>
            <div>
              <img src="./image/banner/banner-10.jpg" />
            </div>
          </Slider>
          </div>
          <div className='Mdf'>
          <Slider {...settings}>
            <div>
              <img src="./image/banner2/img-1.webp" />
            </div>
            <div>
              <img src="./image/banner2/img-2.webp" />
            </div>
            <div>
              <img src="./image/banner2/img-3.webp" />
            </div>
            
          </Slider>
          </div>
        </div>
      </div>
    );
}

export default ImageSlider;
