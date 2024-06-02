import React from 'react'
import './CreateCreator.css'
import data from './data'
import { Link } from 'react-router-dom';


const CreateCreator = ({ onExit }) => {
  const listItems = data.map((item) =>
    <Link to='/creator' state={item} key={item.id} className='link__creator' onClick={onExit}>
      <div className="item__id" >
        <img src={item.thumb} alt={item.name} />
      </div>
      <p>{item.name}</p>
    </Link>
  );
  return (
    <div className='createcreator'>{listItems}</div>
  )
}

export default CreateCreator