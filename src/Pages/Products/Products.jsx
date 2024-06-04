import React from 'react'
import products from './Products_data'
import './Products.css'
import {Link,useLocation} from "react-router-dom"


const Products = () => {
  let { state }= useLocation();
  const listItems = products.map((item) =>
    (state.type === item.type || state.type === "All")
    ?
    (<Link to='/detailproduct' state={item} key={item.id}>
      <div className="item" >
        <img src={item.thumb} alt={item.name} />
      </div>
    </Link>)
    :
    null
  );
  return (
    <div className="Products">
      {listItems}
    </div>
  )
}

export default Products