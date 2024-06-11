import React, {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './DetailProduct.css'
import { faAngleDown, faHeart, faShareFromSquare, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { productListRoute } from '../../utils/APIRoutes';
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

const DetailProduct = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isImage1, setIsImage1] = useState(true);
  const [isImage2, setIsImage2] = useState(false);
  const [isImage3, setIsImage3] = useState(false);
  const [isImage4, setIsImage4] = useState(false);
  let { state }= useLocation();
  const isSPSC = () => {
    if (state.catalog ==='SPSC')
      return true
    else return false
  }
  const handleImage1 = () => {
    setIsImage1(true)
    setIsImage2(false)
    setIsImage3(false)
    setIsImage4(false)
  }

  const handleImage2 = () => {
    setIsImage2(true)
    setIsImage1(false)
    setIsImage3(false)
    setIsImage4(false)
  }
  const handleImage3 = () => {
    setIsImage3(true)
    setIsImage2(false)
    setIsImage1(false)
    setIsImage4(false)
  }
  const handleImage4 = () => {
    setIsImage4(true)
    setIsImage2(false)
    setIsImage3(false)
    setIsImage1(false)
  }
  
  const storedUser = localStorage.getItem('Three-R-user');
 useEffect(() => {
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.productlist.includes(state.id)) {
        setIsFavorite(true);
      }
      else {
        setIsFavorite(false);
      }
    }
  }, [state.id, storedUser]);           
  const ProductList = async (username,id) => {
  
    const {data} = await axios.post(productListRoute, {
      username,
      id,
    })
    
    localStorage.setItem('Three-R-user', JSON.stringify(data.user));
    setIsFavorite(data.user.productlist.includes(state.id));
  // Define a function to handle clicking on the heart icon
};
const handleProductList = () => {
  if (storedUser) {
    const users = JSON.parse(storedUser);
    ProductList(users.username,state.id);
    
  }
};
    return (
      <div className="detailproduct">
        <div className="detailproduct__info">
          <div className="info__image">
            {!isSPSC()&&
            (<img src={state.thumb} alt={state.name}/>)}
            {isSPSC()&&
            (<div className="image__minor">
              <img src={state.thumb} alt={state.name} onClick={handleImage1}/>
              <img src={state.subthumb[0]} alt={state.name} onClick={handleImage2}/>
              <img src={state.subthumb[1]} alt={state.name} onClick={handleImage3}/>
              <img src={state.subthumb[2]} alt={state.name} onClick={handleImage4}/>
            </div>)}
            {isSPSC()&&
            (<div className="image__main">
              {isImage1&&(<img src={state.thumb} alt={state.name} />)}
              {isImage2&&(<img src={state.subthumb[0]} alt={state.name} />)}
              {isImage3&&(<img src={state.subthumb[1]} alt={state.name} />)}
              {isImage4&&(<img src={state.subthumb[2]} alt={state.name} />)}
            </div>)}
          </div>
          <div className="info__detail">
            <div className="detail__code">
              <div className="code__text">
                <p>MÃ {state.catalog}{state.codID}</p>
              </div>
              <div className="code__icon">
                <FontAwesomeIcon icon={faShareFromSquare} />
              </div>
            </div>
            <div className="detail__name">
              <h1>{state.name}</h1>
            </div>
            <div className="detail__favorite">
              <div className="favorite__icon">
                {stars(state.star)}
              </div>
              <div className="favorite__text">
                <p>{state.comment} Nhận xét</p>
              </div>
            </div>
            <div className="detail__support">
              <div className="support__text">
                <p>Tư vấn sản phẩm</p>
              </div>
              <div  className="support__hearticon" onClick={handleProductList}>
                <FontAwesomeIcon icon={faHeart} className={isFavorite ? 'favorite1' : ''}/>
              </div>
            </div>
            <div className="detail__element">
              <div className="__text">
                <p>Thông tin sản phẩm</p>
              </div>
              <div className="__icon">
                <FontAwesomeIcon icon={faAngleDown} className='icon__' />
              </div>
            </div>
            <div className="detail__element">
            <div className="__text">
                <p>Thông tin nhà sáng tạo</p>
              </div>
              <div className="__icon">
                <FontAwesomeIcon icon={faAngleDown} className='icon__' />
              </div>
            </div>
            <div className="detail__element">
            <div className="__text">
                <p>Nhận và trả hàng</p>
              </div>
              <div className="__icon">
                <FontAwesomeIcon icon={faAngleDown} className='icon__' />
              </div>
            </div>
          </div>
        </div>
        <div className="detailproduct__like">
          <div className="like__text">
            <p>Có thể bạn thích</p>
          </div>
          <div className="like__image">
            <div className="image__famous">
              <img src={state.thumb} alt={state.name} />
            </div>
            <div className="image__famous">
              <img src={state.thumb} alt={state.name} />
            </div>
            <div className="image__famous">
              <img src={state.thumb} alt={state.name} />
            </div>
            <div className="image__famous">
              <img src={state.thumb} alt={state.name} />
            </div>
            <div className="image__famous">
              <img src={state.thumb} alt={state.name} />
            </div>
          </div>
        </div>
        <div className="detailproduct__comment">
          <p>Khách hàng nhận xét</p>
        </div>
      </div>

    );
  }

export default DetailProduct