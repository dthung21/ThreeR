import React from 'react'
import './Service.css'


const Service = () => {
  return (
    <div className="service">
        <div className="service__heading">
            <h1>Dịch vụ</h1>
        </div>
        <div className="service__content">
            <div className="content--detail creative">
                <h1>Sáng Tạo</h1>
            </div>
            <div className="content--detail fix">
                <h1>Sữa Chữa</h1>
            </div>
            <div className="content--detail pass">
                <h1>Thanh Lý</h1>
            </div>
            <div className="content--detail donate">
                <h1>Quyên Góp</h1>
            </div>
        </div>
    </div>
  )
}

export default Service