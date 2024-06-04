import React from 'react'
import './BestProduct.css'
import products from '../../Pages/Products/Products_data'
import { Link } from 'react-router-dom'
import SPST1 from "../Assets/WEB/PICTURE/DANHMUCDICHVU/SANGTAO/SPST/SPST1.png"
import SPST2 from "../Assets/WEB/PICTURE/DANHMUCDICHVU/SANGTAO/SPST/SPST2.png"
import SPSC1 from "../Assets/WEB/PICTURE/DANHMUCDICHVU/SUACHUA/SPSC/SPSC1.jpg"
import SPSC2 from "../Assets/WEB/PICTURE/DANHMUCDICHVU/SUACHUA/SPSC/SPSC2.jpg"
const item1= products[0]
const item2= products[1]
const item3= products[2]
const item4= products[3]
{/* <Link to="/detailproduct" state={item} key={item.id}>
          <div className="item">
            <img src={item.thumb} alt={item.name} />
          </div>
        </Link> */}
const BestProduct = () => {
  return (
    <div className="bestproduct">
        <div className="bestproduct__heading">
            <h1>Sản phẩm nổi bật</h1>
        </div>
        <div className="bestproduct__product">
            <Link to='/detailproduct' state={item1}>
                <div className="col">
                    <img src={item1.thumb} alt={item1.name} />
                </div>
            </Link>
            <div className="col__mid">
                <Link to='/detailproduct' state={item3}>
                    <div className="rowincol">
                        <img src={item3.thumb} alt={item3.name} />
                    </div>
                </Link>
                <Link to='/detailproduct' state={item4}>
                    <div className="rowincol">
                        <img src={item4.thumb} alt={item4.name} />
                    </div>
                </Link>
            </div> 
            <Link to='/detailproduct' state={item2}>
                <div className="col end">
                    <img src={item2.thumb} alt={item2.name} />
                </div>
            </Link>
        </div>
    </div>
  )
}

export default BestProduct