
import Header from '../../Header/Header'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import React, {useState, useEffect, useRef} from 'react'

import './DefaultLayout.css'
import { useNavigate } from 'react-router-dom';
import Message from '../../Message/Message';





function DefaultLayout( { children } ) {
  const navigate = useNavigate();
  const [isNavbarVisible, setIsNavbarVisible] = useState(null);
  const initialized = useRef(false); // Ref to track if the listener has been initialized
  const [isLogin, setIsLogin] =useState(false);
  const [user, setUser] = useState(null);
  const handleLogout = () => {
    localStorage.removeItem('Three-R-user');
    setIsLogin(false);
    navigate('/');
  };  
  
  useEffect(() => {
    const storedUser = localStorage.getItem('Three-R-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []); // This effect will only run once when the component mounts
  useEffect(() => {
    const handleScroll = () => {
      // Check if initialized before handling scroll logic
      if (!initialized.current) {
        initialized.current = true; // Set initialized to true on the first scroll event
        return; // Skip the first run logic
      }

      if (!isNavbarVisible && window.scrollY === 0) {
        setIsNavbarVisible(true);
      } else if (isNavbarVisible && window.scrollY > 0) {
        setIsNavbarVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Set initialized to false when adding the listener
    initialized.current = false;

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavbarVisible]); // Depend on isNavbarVisible to re-attach the listener when it changes

  const showNavbar = () => {
    setIsNavbarVisible(true);
  };
  // localStorage.removeItem('Three-R-user');
  // const storedUser = localStorage.getItem('Three-R-user');
  //           if (storedUser) {
  //           const users = JSON.parse(storedUser);
  //           console.log(users); // { id: 1, name: 'John Doe', email: 'john.doe@example.com' }
  //           }
  //           else{
  //             console.log("1");
  //           }
    return (
        <div>
            
            <Header showNavbar={showNavbar} setIsLogin={() => setIsLogin(true)} isLogin={isLogin} user={user}  handleLogout={handleLogout}/>
            {/* <Message isLogin={isLogin} user={user} /> */}
            <div className="container">
                {isNavbarVisible && <Navbar />}
                <div className="content">{children}</div>
                <Footer />
            </div>
        </div> 
      );
}

export default DefaultLayout;