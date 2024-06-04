import React from 'react'
import './Creator.css'
import data from '../Create/data';
import { Link } from 'react-router-dom';


const Creator = () => {
    const listItems = data.map((item) =>
        <Link to='/creator' state={item} key={item.id} className='link__creator1' >
          <div className="item__id1" >
            <img src={item.thumb} alt={item.name} />
          </div>
          <p>{item.name}</p>
        </Link>
      );
  return (
    <div className="creator">
        <div className="creator__element">
            <h1>Nhà sáng tạo</h1>
        </div>
        <div className="creator__element info">
            {listItems}
        </div>
    </div>
  )
}

export default Creator