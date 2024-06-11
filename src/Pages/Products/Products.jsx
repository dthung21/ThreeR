import React,{useState} from 'react'
import products from './Products_data'
import './Products.css'
import {Link,useLocation} from "react-router-dom"


const Products = () => {
  
  let { state }= useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);

  const listItems = products.map((item) => {
    const handleMouseEnter = () => {
      if (item.catalog === 'SPSC') {
        setHoveredItem(item.id);
      }
    };

    const handleMouseLeave = () => {
      setHoveredItem(null);
    };

    if (state.type === item.type || state.type === "All") {
      if (item.catalog === 'SPSC') {
        return (
          <Link to='/detailproduct' state={item} key={item.id}>
            <div className="item">
              <img
                src={hoveredItem === item.id ? item.subthumb[0] : item.thumb}
                alt={item.name}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          </Link>
        );
      } else {
        return (
          <Link to='/detailproduct' state={item} key={item.id}>
            <div className="item">
              <img src={item.thumb} alt={item.name} />
            </div>
          </Link>
        );
      }
    }
    return null;
  });


  return (
    <div className="Products">
      {listItems}
    </div>
  )
}

export default Products