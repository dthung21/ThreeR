import react from 'react'
import './Slider.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import slide1 from '../Assets/WEB/PICTURE/DIENDAN/slider1.webp'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Custom Arrow Component
const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow prev" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  };
  
  // Custom Arrow Component
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow next" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  };

export default function SimpleSlider() {
  var settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    //centerMode: true,
    
  };
  return (
    <div className="image-slider-container">
        <Slider {...settings}>
            <div className='slide'>
                <img src={slide1} alt="" />
            </div>
            <div className='slide'>
                <img src={slide1} alt="" />
            </div>
            <div className='slide'>
                <img src={slide1} alt="" />
            </div>
            <div className='slide'>
                <img src={slide1} alt="" />
            </div>
            <div className='slide'>
                <img src={slide1} alt="" />
            </div>
            <div className='slide'>
                <img src={slide1} alt="" />
            </div>
        </Slider>
    </div>
    );
}
