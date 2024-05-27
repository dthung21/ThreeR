
import Header from '../../Header/Header'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import Message from '../../Message/Message';
import React, {useState, useEffect} from 'react'
function DefaultLayout( { children } ) {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
          if (!isNavbarVisible && window.scrollY === 0) {
            setIsNavbarVisible(true);
          } else if (isNavbarVisible && window.scrollY > 0) {
            setIsNavbarVisible(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [isNavbarVisible]);

  const showNavbar = () => {
    setIsNavbarVisible(true);
  };

    return (
        <div>
            
            <Message />
            <Header showNavbar={showNavbar}/>
            <div className="container">
                {isNavbarVisible && <Navbar />}
                <div className="content">{children}</div>
                <Footer />
            </div>
        </div>
      );
}

export default DefaultLayout;