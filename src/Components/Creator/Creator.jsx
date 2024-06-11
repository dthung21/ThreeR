import React from 'react'
import './Creator.css'
import data from '../Create/data';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Creator = ({isName= true}) => {
  // Custom Arrow Component
const CustomPrevArrow = (props) => {
  const { onClick, style} = props;
  return (
    <div className="custom-arrow1 prev" 
    onClick={onClick}
    style={{ ...style, display: "block", background: "#ccc",padding:"11px 6px",fontSize:"19px" }}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};

// Custom Arrow Component
const CustomNextArrow = (props) => {
  const { onClick,style } = props;
  return (
    <div className="custom-arrow1 next" 
    onClick={onClick} 
    style={{ ...style, display: "block", background: "#ccc",padding:"11px 6px",fontSize:"19px" }}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};
    const listItems = data.map((item) =>
          <Link to='/creator' state={item} key={item.id}  className='link__creator1' >
            <div className="item__id1" >
              <img src={item.thumb} alt={item.name} />
            </div>
            { isName &&(
              <p>{item.name}</p>
            )}
          </Link>
      );
  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className="creator">
        { isName &&(<div className="creator__element">
            <h1>Nhà sáng tạo</h1>
        </div>)}
        <div className="creator__element info" style={isName ? { } : { display: 'block' }}>
        { !isName &&(<Slider {...settings}>
              {listItems}
            </Slider>)}
        {isName && (
            listItems
        )}
        </div>
    </div>
  )
}

export default Creator