import React from 'react'
import { useLocation } from 'react-router-dom';

const Creator = () => {
  let { state }= useLocation();
  return (
    <div className="creatorpage">
      <div className="creatorpage__element">
        
      </div>
      <div className="creatorpage__element"></div>
    </div>
  )
}

export default Creator