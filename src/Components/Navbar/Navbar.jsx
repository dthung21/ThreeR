import React, {useState,useEffect} from 'react'
import './Navbar.css'
import {Link,useLocation} from "react-router-dom"
const Navbar = ( ) => {
  const [isShowSubServices, setIsShowSubServices] = useState(false)
  const [isSubServices, setIsSubServices] = useState(false)
  const [isLink,setIsLink] =useState(true)

  const [isShowSubServices1, setIsShowSubServices1] = useState(false)
  const [isSubServices1, setIsSubServices1] = useState(false)
  const [isLink1,setIsLink1] =useState(true)
  const location = useLocation();
  useEffect(() => {
    if (!isLink) {
      // Action to be performed after link is clicked and route has changed
      console.log('Link clicked and route changed');
      // You can perform any action here
      setIsShowSubServices(false)
      setIsSubServices(false)
      setTimeout(() => setIsLink(true), 1000);
      
    }
    if (!isLink1) {
      // Action to be performed after link is clicked and route has changed
      console.log('Link clicked and route changed');
      // You can perform any action here
      setIsShowSubServices1(false)
      setIsSubServices1(false)
      setTimeout(() => setIsLink1(true), 1000);
      
    }
  }, [location, isLink1,isLink]);
  
  const handleLinkClick = () => {
    setIsLink(false);
    
    
  };
  const handleLinkClick1 = () => {
    setIsLink1(false);
    
    
  };
 return (
    <div className="Navbar">
        <Link to="/" className="Navbar__element">Trang Chủ</Link>
        <Link to="/intro" className="Navbar__element">Giới Thiệu</Link>
        <Link to="/creative" className="Navbar__element">Nhà Sáng Tạo</Link>
        <div onMouseMove={()=> setIsShowSubServices(true)} onMouseLeave={() => setIsShowSubServices(false)} className="Navbar__element">
        <span>Dịch Vụ</span>
          {(isSubServices ||isShowSubServices)&& isLink && (
            <div onMouseMove={() => setIsSubServices(true)} onMouseLeave={() => setIsSubServices(false)}  className="subNavbar border__top">
              <Link onClick={handleLinkClick} to='/createdproducts' className="subNavbar__element">Sáng tạo</Link>
              <Link onClick={handleLinkClick} to='/repairedproducts' className="subNavbar__element">Sửa chữa</Link>
              <Link onClick={handleLinkClick} to='/comingsoon' className="subNavbar__element">Thanh lý</Link>
              <Link onClick={handleLinkClick} to='/comingsoon' className="subNavbar__element">Quyên góp</Link>
            </div>
          )}
          
          </div>
        <div className='Navbar__element'>
          <Link 
          state={{type:'All'}} 
          onMouseMove={()=> setIsShowSubServices1(true)} 
          onMouseLeave={() => setIsShowSubServices1(false)} 
          to="/products"
          >Sản Phẩm</Link>
          {(isSubServices1 ||isShowSubServices1)&& isLink1 && (
            <div onMouseMove={() => setIsSubServices1(true)} onMouseLeave={() => setIsSubServices1(false)}  className="subNavbar border__top1">
              <Link 
              state={{type:'Ao'}}
              onClick={handleLinkClick1} 
              to='/products' 
              className="subNavbar__element" 
              style={{padding: "5px 100px 10px 15px"}}
               >Áo</Link>
              <Link 
              state={{type:'Quan'}}
              onClick={handleLinkClick1} 
              to='/products' 
              className="subNavbar__element"
              >Quần</Link>
              <Link 
              state={{type:'Giay'}}
              onClick={handleLinkClick1} 
              to='/products' 
              className="subNavbar__element"
              >Giày</Link>
              <Link 
              state={{type:'Tui'}}
              onClick={handleLinkClick1} 
              to='/products' 
              className="subNavbar__element"
              >Túi</Link>
              <Link 
              state={{type:'Phu kien'}}
              onClick={handleLinkClick1} 
              to='/products' 
              className="subNavbar__element"
              >Phụ kiện</Link>
            </div>
          )}
        </div>
        <Link to="/forum" className="Navbar__element">Diễn Đàn</Link> 
    </div>
  )
}

export default Navbar