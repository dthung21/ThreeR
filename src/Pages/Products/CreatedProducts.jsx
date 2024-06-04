import React from 'react'
import products from './Products_data'
import './Products.css'
import {Link} from "react-router-dom"


const CreatedProducts = () => {
  const listItems = products.map((item) =>
    item.catalog === 'SPST' ? (
        <Link to="/detailproduct" state={item} key={item.id}>
          <div className="item">
            <img src={item.thumb} alt={item.name} />
          </div>
        </Link>
      ) : null
  );
  listItems.push(<div className="item empty" key={3}></div>);
  listItems.push(<div className="item empty" key={4}></div>);
  return (
    <div className="Products">
      {listItems}
    </div>
  )
}

export default CreatedProducts