import React from 'react'
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './DetailProduct.css'
import { faAngleDown, faHeart, faShareFromSquare, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

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

  let { state }= useLocation();

    return (
      <div className="detailproduct">
        <div className="detailproduct__info">
          <div className="info__image">
            <div className="image__minor">
              <img src={state.thumb} alt={state.name} />
              <img src={state.thumb} alt={state.name} />
              <img src={state.thumb} alt={state.name} />
              <img src={state.thumb} alt={state.name} />
            </div>
            <div className="image__main">
              <img src={state.thumb} alt={state.name} />
            </div>
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
              <div className="support__hearticon">
                <FontAwesomeIcon icon={faHeart} />
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