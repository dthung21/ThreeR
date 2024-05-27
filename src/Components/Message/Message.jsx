import React, { useState } from 'react'
import './Message.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faCommentDots, faPenToSquare, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import logo from '../Assets/WEB/PICTURE/NHASANGTAO/logo.png'
const Message = () => {
  const [isShown, setIsShown] = useState(true);

  const handleClick = event => {
    setIsShown(cur => !cur);
  };
  return (
    <div className='message'>
      <div className='message--button' onClick={handleClick}>
        <FontAwesomeIcon icon={faCommentDots} className='icon__' />
      </div>
        <div className='chat--frame' style={{display: isShown ? 'flex' : 'none'}}>
          <div className="frame__heading">
            <div className="frame--icon" onClick={handleClick} >
              <FontAwesomeIcon icon={faAngleDown} className='icon__' />
            </div>
            <h3>Hộp thư</h3>
            <div className="frame--icon">
              <FontAwesomeIcon icon={faPenToSquare} className='icon__' />
            </div>
          </div>
          <div className="frame__element">
            <div className="avatar__">
            <FontAwesomeIcon icon={faUserPlus} className='avatar__icon'/>
            </div>
            <div className="user">
              <h3>Mời bạn bè</h3>
              <p>Kết nối để bắt đầu trò chuyện</p>
            </div>
          </div>
          <div className="frame__element">
          <div className="avatar">
              <img src={logo} alt="" />
            </div>
            <div className="user">
              <h3>Three R</h3>
              <p>Sự  hài lòng của bạn - giá trị của chúng tôi</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Message