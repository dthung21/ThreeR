import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faSquareInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__info">
            <div className="footer__info__help">
                <h1>Bạn cần giúp đỡ</h1>
                <p>Câu hỏi thường gặp</p>
                <p>Điều khoản dịch vụ</p>
                <p>Chính sách bảo mật</p>
                <p>Chính sách hoàn tiền</p>
                <p>Chính sách vận chuyển</p>
                <p>Khách hàng thân thiết</p>
            </div>
            <div className="footer__info__public">
                <h1>Thông tin chung</h1>
                <p>Về chúng tôi</p>
                <p>Thông điệp</p>
                <p className='last'>Liên hệ</p>
                <h1>Theo dõi ngay</h1>
                <div className="social">
                    <Link to="https://www.facebook.com/TinhHoaHoiTu.ThreeR" target="_blank" className="social__element">
                    <FontAwesomeIcon icon={faSquareFacebook} />
                    </Link>
                    <div className="social__element">
                    <FontAwesomeIcon icon={faSquareInstagram} />
                    </div>
                    <div className="social__element">
                    <FontAwesomeIcon icon={faTiktok} />
                    </div>
                    <div className="social__element">
                    <FontAwesomeIcon icon={faSquareEnvelope} />
                    </div>
                </div>
            </div>
            <div className="footer__info__register">
                <h1>Đăng ký ngay</h1>

                <div className='inputemail'>
                    <div className="inputemail__element">
                        <p className='last'>Đăng ký thành viên để được giảm 10% cho đơn hàng đầu tiên và nhận thông tin cập nhật về các chương trình khuyến mãi, hướng dẫn về lối sống và hơn thế nữa!</p>
                        <div className="inputblank">
                            <input type="text" placeholder='your@email.com' />
                        </div>
                    </div>
                    <div className="inputemail__element">
                        <button className='send'>
                            Gửi
                        </button>
                    </div>   
                </div>     
            </div>
            <div className="footer__info__invite">
                <p className='last'>Bạn yêu thích ThreeR? Giới thiệu người sáng tạo và kiếm 5% lợi nhuận chia sẻ mỗi tháng với ThreeR</p>
                <p className='link'>Nhận link giới thiệu ngay!</p>
            </div>
        </div>
        <div className="footer__Copyright">
            <p>Copyright@ 2024 ThreeR</p>
        </div>
    </div>
  )
}

export default Footer