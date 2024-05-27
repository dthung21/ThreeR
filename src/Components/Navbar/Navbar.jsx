import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className="Navbar">
        <Link to="/" className="Navbar__element">Trang Chủ</Link>
        <Link to="/intro" className="Navbar__element">Giới Thiệu</Link>
        <Link to="/creative" className="Navbar__element">Nhà Sáng Tạo</Link>
        <Link to="/services" className="Navbar__element">Dịch Vụ</Link>
        <Link to="/products" className="Navbar__element">Sản Phẩm</Link>
        <Link to="/forum" className="Navbar__element">Diễn Đàn</Link>
    </div>
  )
}

export default Navbar