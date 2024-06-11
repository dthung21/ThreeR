import React from 'react'
import './Creative.css'
import Creator from '../../Components/Creator/Creator'


const Creative = () => {
  return (
    <div className='Creative'>
       <div className="creative__image">
        <img src="" alt="" />
       </div>
       <h1 className="creative__header">Nhà sáng tạo</h1>
       <div className="creative__slider">
          <Creator isName={false}/>
       </div>
       <div className="creative__sologan">
          <p>Reuse - renew - recover</p>
       </div>
       <h1 className="creative__header">Nổi bật</h1>
       <div className="creative__famous">

       </div>
       
       <div className="creative__text">
        <p>Bạn là bạn, không là bản sao của ai.</p>
        <p>Đừng chạy theo xu hướng, hãy biến bạn là xu hướng!</p>
       </div>
      
    </div>
  )
}

export default Creative