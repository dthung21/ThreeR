import React from 'react'
import './Service.css'
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <div className="service">
        <div className="service__heading">
            <h1>Dịch vụ</h1>
        </div>
        <div className="service__content">
            <Link to="/createdproducts" className='text-decoration'>
                <div className="content--detail creative">
                    <h1>Sáng Tạo</h1>
                </div>
            </Link>
            <Link to="/repairedproducts" className='text-decoration'>
                <div className="content--detail fix">
                    <h1>Sữa Chữa</h1>
                </div>
            </Link>
            <Link to="/comingsoon" className='text-decoration'>
                <div className="content--detail pass">
                    <h1>Thanh Lý</h1>
                </div>
            </Link>
            <Link to="/comingsoon" className='text-decoration'>
                <div className="content--detail donate">
                    <h1>Quyên Góp</h1>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Service