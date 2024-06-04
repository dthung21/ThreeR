import React, {useState} from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless'
import Notice from './Notice/Notice'
import logo from '../Assets/logo.png'
import { faCamera, faMagnifyingGlass, faUser,faBell, faCircleXmark, faHeart } from '@fortawesome/free-solid-svg-icons'
import PopperWrapper from '../Popper/Wrapper'
import Favorite from './Notice/Favorite/Favorite'
import User from './Users/User'
import { toast,ToastContainer } from 'react-toastify'

const Header = ({ showNavbar, isLogin, user,handleLogout,setIsLogin } ) => {
    
    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [isToast, setIsToast] = useState(false);
    const toastOptions ={
        position: "bottom-right",
        autoClose: 4000,
        pauseOnHover: true,
        draggable: true,
        closeOnClick: true,
    }
    
    const handleIconClick = () => {
        if(isLogin===true)
            setVisible(!visible);
        else
        {
            toast.error("Đăng nhập để sử dụng!",
            toastOptions)
        }
  };
    const handleIconClick1 = () => {
        if(isLogin===true)
            setVisible1(!visible1);
        else
        {
            toast.error("Đăng nhập để sử dụng!",
            toastOptions)
        }
  };
    const handleIconClick2 = () => {
        setVisible2(!visible2);
  };

    const handleExit = () => {
        setVisible1(false);
    }; 
    const handleExit1 = () => {
        setVisible2(false);
    }; 
    const handleVisible2 = ()  => {
        if(isToast !==true)
            setVisible2(false);

    }
    const handleLogOut = () => {
        setVisible2(false);
        handleLogout()
    }
    const closeTippy = () => {
        setVisible2(false);
        setIsLogin()
    
    }

    
    

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
                    {isLogin &&(
                        <div className="notice-icon__element  " tabIndex="-1" {...attrs} >
                            <Notice />
                        </div>
                    )}
                    
                </PopperWrapper>
                )}
                zIndex={1}
                placement="bottom-start"
                offset={[-70,10]}
                interactive={true}
                onClickOutside={() => setVisible(false)} // Hide when clicking outside
            >
                <div onClick={handleIconClick} className="function__icon">
                <FontAwesomeIcon icon={faBell}   />
                </div>
            </Tippy>
    
            </div>
            <div className="header-function__element favorite-icon">
                
            <Tippy
                visible={visible1}
                render={(attrs) => (
                <PopperWrapper>
                    {isLogin &&(
                        <div className="favorite__element  " tabIndex="-1" {...attrs}> 
                        <Favorite onExit={handleExit}/>
                        </div>
                    )}
                    
                </PopperWrapper>
                )}
                
                placement="bottom"
                offset={[-437,-12]}
                interactive={true}
                onClickOutside={() => setVisible1(false)} // Hide when clicking outside
            >
                <div onClick={handleIconClick1} className="function__icon">
                <FontAwesomeIcon icon={faHeart}  />
                </div>
            </Tippy>
            </div>
            <div className="header-function__element info-icon">
            {!isLogin&&visible2 && (
                <div className="overlay" onClick={() => setVisible2(false)}></div>
            )}

            <Tippy
                visible={visible2}
                render={(attrs) => (
                <PopperWrapper>
                    {!isLogin &&(
                        <div className="notice-icon__element " tabIndex="-1" {...attrs} >
                            <User closeTippy={closeTippy}/>
                        </div>
                    )}
                    {isLogin &&(
                        <div className="notice-icon__element " tabIndex="-1" {...attrs} >
                            <p className="logOut" onClick={handleLogOut}>Log out</p>
                        </div>
                    )}
                    
                </PopperWrapper>
                )}
                zIndex={12}
                placement="bottom"
                offset={isLogin ? [0,10] : [-472,10]}
                interactive={true}
                onClickOutside={isLogin ? () =>setVisible2(false) : () => handleVisible2 } // Hide when clicking outside
            >
                <div onClick={handleIconClick2} className="function__icon">
                    <FontAwesomeIcon  icon={faUser} />
                </div>
            </Tippy>
            </div>
            <ToastContainer onClick={setIsToast} />
        </div>
    
    </div>
  )
}

export default Header
