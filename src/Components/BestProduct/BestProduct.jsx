import React from 'react'
import './BestProduct.css'
import SPST1 from "../Assets/WEB/PICTURE/DANHMUCDICHVU/SANGTAO/SPST/SPST1.png"
import SPST2 from "../Assets/WEB/PICTURE/DANHMUCDICHVU/SANGTAO/SPST/SPST2.png"
import SPSC1 from "../Assets/WEB/PICTURE/DANHMUCDICHVU/SUACHUA/SPSC/SPSC1.jpg"
import SPSC2 from "../Assets/WEB/PICTURE/DANHMUCDICHVU/SUACHUA/SPSC/SPSC2.jpg"

const BestProduct = () => {
  return (
    <div className="bestproduct">
        <div className="bestproduct__heading">
            <h1>Sản phẩm nổi bật</h1>
        </div>
        <div className="bestproduct__product">
            <div className="col">
                <img src={SPST1} alt="product" />
            </div>
            <div className="col__mid">
                <div className="rowincol">
                    <img src={SPSC1} alt="product" />
                </div>
                <div className="rowincol">
                    <img src={SPSC2} alt="product" />
                </div>
            </div>
            <div className="col end">
                <img src={SPST2} alt="product" />
            </div>
        </div>
    </div>
  )
}

export default BestProduct