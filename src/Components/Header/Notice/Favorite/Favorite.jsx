import React, {useState} from 'react'
import './Favorite.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLessThan } from '@fortawesome/free-solid-svg-icons'
import products from './data'
import {Link} from "react-router-dom"
import CreateCreator from '../../../Create/CreateCreator'





const Favorite = ({ onExit }) => {
  const [visible, setVisible] = useState(true);
  const [visible1, setVisible1] = useState(false);
  const listItems = products.map((item) =>
    <Link to='/detailproduct' state={item} key={item.id}  onClick={onExit}>
      <div className="item" >
        <img src={item.thumb} alt={item.name} />
      </div>
    </Link>
  );
  const handleIconClick = () => {
          setVisible(true);
          setVisible1(false);
    };
  const handleIconClick1 = () => {
          setVisible1(true);
          setVisible(false);
    };   
  return (
    <div className="favorites1">
      <div className="favorites1__exit"  onClick={onExit}>
        <div className="exit__icon">
        <FontAwesomeIcon icon={faLessThan} />
        </div>
        <p>ThreeR</p>
      </div>
      <h1 className="favorites1__header">Mục yêu thích</h1>
      <div className="favorites1__content">
        <div className='text__block'>
          <h2 onClick={handleIconClick} className={`products1 ${visible1 ?  '': 'active-tab'}`}>Sản phẩm</h2>
          <h2 onClick={handleIconClick1} className={`creators1 ${visible1 ? 'active-tab' : ''}`}>Nhà sáng tạo</h2>
        </div>
          
        
          {visible && (
          <div className="products">
            {listItems}
          </div>
          )}
          {visible1 && (
          <div className="creators">
            <CreateCreator onExit={onExit}/>
          </div>
          )}
         
      </div>
    </div>
  )
}

export default Favorite