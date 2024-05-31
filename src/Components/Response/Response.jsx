import React from 'react'
import './Response.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
const Response = () => {
  return (
    <div className="response">
        <div className="response__header">
            <div className="header__heading">
                <h2>Gửi Phản Hồi</h2>
            </div>
            <div className="header__element">
                <p>Three R luôn trân trọng khách hàng của mình. Chúng tôi luôn tìm cách cải thiện trải nghiệm của bạn. Xin hãy cho chúng tôi biết những gì bạn nghĩ.</p>
            </div>
        </div>
        <div className="response__input">
            <div className="input__element">
                <input type="text" placeholder='Bạn muốn góp ý gì để cải thiện trải nghiệm của bản?' />
            </div>
            <div className="input__icon">
                <FontAwesomeIcon icon={faPaperPlane}/>
            </div>
        </div>
    </div>
  )
}

export default Response