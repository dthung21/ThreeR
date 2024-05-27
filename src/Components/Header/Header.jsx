import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../Assets/logo.png'
import { faCamera, faMagnifyingGlass, faUser,faBell, faCircleXmark, faHeart } from '@fortawesome/free-solid-svg-icons'

const Header = ({ showNavbar }) => {
  return (
    <div className="header" onMouseEnter={showNavbar}>
        <div className="header__element header-logo">
        <img src={logo} alt="" />
        </div>
        <div className="header__element header-search">
            <div className="header-search__element search-frame">
                <button className='search-icon'>
                    <FontAwesomeIcon icon={faMagnifyingGlass}  />
                </button>
                <input type="text" placeholder="Bạn cần tìm gì?" spellCheck={false} />
                <button className='Xmark-icon'>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <button className='camera-icon'>
                    <FontAwesomeIcon icon={faCamera} />
                </button>
            </div>
            <div className="header-search__element search-caption">
                <h1>Sự hài lòng của bạn - giá trị của chúng tôi</h1>
            </div>
        </div>
        <div className="header__element header-function">
            <div className="header-function__element function-language">
                <p>VN</p>
            </div>
            <div className="header-function__element notice-icon">
                <FontAwesomeIcon icon={faBell} />
            </div>
            <div className="header-function__element favorite-icon">
                <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="header-function__element info-icon">
                <FontAwesomeIcon  icon={faUser}/>
            </div>
        </div>
        
    </div>
  )
}

export default Header
