
import Header from '../../Header/Header'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import Message from '../../Message/Message';
import React, {useState, useEffect, useRef} from 'react'
function DefaultLayout( { children } ) {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const initialized = useRef(false); // Ref to track if the listener has been initialized

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