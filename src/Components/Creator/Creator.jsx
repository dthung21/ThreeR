import React from 'react'
import './Creator.css'
import logo from '../Assets/WEB/PICTURE/NHASANGTAO/logo.png'
import ka from '../Assets/WEB/PICTURE/NHASANGTAO/kimanh.jpg'
import td from '../Assets/WEB/PICTURE/NHASANGTAO/tiendat.jpg'
import hn from '../Assets/WEB/PICTURE/NHASANGTAO/hongnhung.jpg'
import kt from '../Assets/WEB/PICTURE/NHASANGTAO/khanhtran.jpg'
import mt from '../Assets/WEB/PICTURE/NHASANGTAO/minhtuyet.jpg'
const Creator = () => {
  return (
    <div className="creator">
        <div className="creator__element">
            <h1>Nhà sáng tạo</h1>
        </div>
        <div className="creator__element info">
            <div className="creator--info start">
                <img src={logo} alt="" />
                <div className="overlay_tr">
                    <div className="blur"></div>
                    <h3>Three R</h3>
                </div>
                
            </div>
            <div className="creator--info">
                <img src={ka} alt="" />
                <div className="overlay_ka">
                    <div className="blur"></div>
                    <h3>Kim Anh</h3>
                </div>
                
            </div>
            <div className="creator--info">
                <img src={td} alt="" />
                <div className="overlay_td">
                    <div className="blur"></div>
                    <h3>Tiến Đạt</h3>
                </div>
            </div>
            <div className="creator--info">
                <img src={hn} alt="" />
                <div className="overlay_hn">
                    <div className="blur"></div>
                    <h3>Hồng Nhung</h3>
                </div>
            </div>
            <div className="creator--info">
                <img src={kt} alt="" />
                <div className="overlay_kt">
                    <div className="blur"></div>
                    <h3>Khánh Trân</h3>
                </div>
                
            </div>
            <div className="creator--info">
                <img src={mt} alt="" />
                <div className="overlay_mt">
                    <div className="blur"></div>
                    <h3>Minh Tuyết</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Creator