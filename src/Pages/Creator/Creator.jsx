import React, {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import "./Creator.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import CreatedProducts from '../Products/CreatedProducts';
import { creatorListRoute } from '../../utils/APIRoutes';
import axios from 'axios';



const stars = (star) => {
  const integerPart = Math.floor(star); // Get the integer part of the star value
  const decimalPart = star - integerPart; // Get the decimal part

  const starIcons = [];

  // Render full star icons
  for (let i = 0; i < integerPart; i++) {
    starIcons.push(<FontAwesomeIcon icon={faStar} key={i} className='star' /> );
  }

  // Render half star icon if the decimal part is greater than 0
  if (decimalPart > 0) {
    starIcons.push(<FontAwesomeIcon icon={faStarHalfStroke} key={starIcons.length} className='star'/>);
  }

  return starIcons;
};

const Creator = () => {
  const [isChange, setIsChange] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleChange = () => {
    setIsChange(!isChange);
  }

  let { state } = useLocation();
  const storedUser = localStorage.getItem('Three-R-user');

  useEffect(() => {
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.creatorlist.includes(state.id)) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    }
  }, [state.id, storedUser]);

  const CreatorList = async (username, id) => {
    const { data } = await axios.post(creatorListRoute, {
      username,
      id,
    });
    localStorage.setItem('Three-R-user', JSON.stringify(data.user));
    setIsFavorite(data.user.creatorlist.includes(state.id)); // update the state based on the updated user data
  };

  const handleCreatorList = () => {
    if (storedUser) {
      const users = JSON.parse(storedUser);
      CreatorList(users.username, state.id);
    }
  };
  return (
    <div className="creatorpage">
      <div className="creatorpage__info">
        <div className="info__creator">
          <p className="creator__link">{state.link}</p>
          <h1 className="creator__header">{state.name}</h1>
          <p className="creator__role">Nhà sáng tạo</p>
          <div className="creator__like">
            <p>{state.likednum} người yêu thích</p>
            <p>{state.postnum} bài đăng</p>
            <p>{state.comment} nhận xét</p>
          </div>
          <div className="creator__favorite">
            {stars(state.star)}
          </div>
          <p className="creator__invite">Giới thiệu</p>
          <div className="creator__frame">
            <p>giới thiệu bản thân ngắn gọn</p>
          </div>
        </div>
        <div className="info__avatar">
          <div className="avatar__image">
            <img src={state.thumb} alt={state.name} />
          </div>
          <div className="avatar__button">
            <button>Nhắn tin</button>
          
            <div className="avatar__iconheart" onClick={handleCreatorList}>
              <FontAwesomeIcon icon={faHeart} className={isFavorite ? 'favorite' : ''}/>
            </div>
          </div>
        </div>
      </div>
      <div className="creatorpage__remain">
        <div className="tilte">
          <p onClick={handleChange} className={isChange?'borderbox':''}>Bài đăng</p>
          <p onClick={handleChange}className={isChange?'':'borderbox'}>Nhận xét</p>
        </div>
        {isChange&&(
          <div className="remain__posts">
            <CreatedProducts />
          </div>
        )}
        {!isChange&&(
          <div className="remain__comments">
  
          </div>
        )}
      </div>
    </div>
  )
}

export default Creator