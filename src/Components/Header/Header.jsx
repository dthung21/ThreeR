import React, {useState} from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless'
import Notice from './Notice/Notice'
import logo from '../Assets/logo.png'
import { faCamera, faMagnifyingGlass, faUser,faBell, faCircleXmark, faHeart } from '@fortawesome/free-solid-svg-icons'
import PopperWrapper from '../Popper/Wrapper'
import Favorite from './Notice/Favorite/Favorite'


const Header = ({ showNavbar }) => {
    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const handleIconClick = () => {
        setVisible(!visible);
  };
    const handleIconClick1 = () => {
        setVisible1(!visible1);
  };
    const handleIconClick2 = () => {
        setVisible2(!visible2);
  };
    const [showFavorite, setShowFavorite] = useState(true);

    const handleExit = () => {
        setVisible1(false);
      }; 
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
                
            <Tippy
                visible={visible}
                render={(attrs) => (
                <PopperWrapper>
                    <div className="notice-icon__element" tabIndex="-1" {...attrs}>
                        <Notice />
                    </div>
                </PopperWrapper>
                )}
                placement="bottom-start"
                offset={[-70,10]}
                interactive={true}
                onClickOutside={() => setVisible(false)} // Hide when clicking outside
            >
                <div onClick={handleIconClick}>
                <FontAwesomeIcon icon={faBell} />
                </div>
            </Tippy>
    
            </div>
            <div className="header-function__element favorite-icon">
                
            <Tippy
                visible={visible1}
                render={(attrs) => (
                <PopperWrapper>
                    <div className="favorite__element" tabIndex="-1" {...attrs}>
                        
                    <Favorite onExit={handleExit}/>
                    </div>
                </PopperWrapper>
                )}
                
                placement="bottom"
                offset={[-437,-12]}
                interactive={true}
                onClickOutside={() => setVisible1(false)} // Hide when clicking outside
            >
                <div onClick={handleIconClick1}>
                <FontAwesomeIcon icon={faHeart} />
                </div>
            </Tippy>
            </div>
            <div className="header-function__element info-icon">
                <FontAwesomeIcon  icon={faUser}/>
            </div>
        </div>
        
    </div>
  )
}

export default Header
