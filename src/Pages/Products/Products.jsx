import React from 'react'
import products from './Products_data'
import './Products.css'
import {Link} from "react-router-dom"
const listItems = products.map((item) =>
  <Link to='/detailproduct' state={item} key={item.id}>
    <div className="item" >
      <img src={item.thumb} alt={item.name} />
    </div>
  </Link>
);

const Products = () => {
  return (
    <div className="Products">
      {listItems}
    </div>
  )
}

export default Products