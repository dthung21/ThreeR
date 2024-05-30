import React from 'react'
import './Notice.css'
import Detail from './Detail/Detail'
const Notice = () => {
  return (
    <div className="notice">
        <div className="notice__content1">
          <h1>Thông báo</h1>

        </div>
        <div className="notice__content2">
            <p className="content__header">Mới</p>
            <Detail />
            
        </div>
        <div className="notice__content3">
            <p className="content__header">Trước đó</p>
            <Detail />
            
        </div>
    </div>
  )
}

export default Notice