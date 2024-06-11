import React,{useState} from 'react'
import products from './Products_data'
import './Products.css'
import {Link} from "react-router-dom"


const RepairedProducts = () => {

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const listItems = products.map((item) =>
    item.catalog === 'SPSC' ? (
      <Link to="/detailproduct" state={item} key={item.id}>
        <div className="item">
          <img
            src={hoveredItem === item.id ? item.subthumb[0] : item.thumb}
            alt={item.name}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </Link>
    ) : null
  );

  return (
    <div className="Products">
      {listItems}
    </div>
  )
}

export default RepairedProducts