import React from 'react'
import './Detail.css'
import Logo from '../../../Logo/Logo'
import pic from '../../../Assets/logo.png'

const Detail = () => {
  return (
    <div className="detail">
        <div className='detail__logo'>
            <Logo>
                <img src={pic} alt="" />
            </Logo>
        </div>
        <p>Three R</p>
    </div>
  )
}

export default Detail