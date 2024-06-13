import React from 'react'
import intro from '../../Components/Assets/WEB/intro.png'
import './Intro.css'
const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__col">
        <h1>Về chúng tôi</h1>
        <p className='lighter'>Câu chuyện về ThreeR</p>
        <p>Trong một hành trình khám phá thị trường, chúng tôi nhận ra vấn đề lãng phí và lượng rác thải 
          ngày càng tăng. Thay vì chỉ than phiền, chúng tôi quyết định hành động.
        </p>
        <p>Từ một ý tưởng nhỏ, ThreeR ra đời với triết lý "Reuse, Renew, Recover" (Tái sử dụng, làm mới, khôi phục).
           Mỗi sản phẩm thiết kế sang tạo đều được cá nhân hóa, phản ánh cá tính của từng khách hàng.</p>
        <p>Slogan "Sự hài lòng của bạn - Giá trị của chúng tôi" thể hiện cam kết của chúng tôi đến với khách hàng. Với sự lắng nghe và cải tiến liên tục,
          ThreeR không chỉ là nguồn cảm hứng cho việc bảo vệ môi trường, mà còn là biểu tượng của sự sáng tạo và tinh thần khởi nghiệp. 
        </p>
      </div>
      <div className="intro__col">
        <img src={intro} alt="intro" />
      </div>
    </div>
  )
}

export default Intro