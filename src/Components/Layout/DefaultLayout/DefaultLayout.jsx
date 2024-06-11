
import Header from '../../Header/Header'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import React, {useState, useEffect, useRef} from 'react'
import {ChatWidget} from "@papercups-io/chat-widget";
import './DefaultLayout.css'
import { useNavigate } from 'react-router-dom';

const chatWidgetStyle = {
  chatContainer: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    color: '#000',
    position: "fixed",
    bottom: "0",
    right:"0",
    height: "25rem",
    width:"20rem",
    size:"0.5rem",
    fontSize:"0.5rem",
  },
  toggleContainer: {
    
    bottom: '20px',
    right: '20px',
  },
  toggleButton: {
    backgroundColor: '#ccc',
    color: '#fff',
    border: 'none',
    borderRadius: '1.5rem',
    width: '60px',
    height: '45px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    zIndex:"20",
  },
};

const ChatBox = () => {
  const [hideButton, setHideButton] = useState(false);
  

  return (
    <>
      <ChatWidget
        styles={chatWidgetStyle}
        // `accountId` is used instead of `token` in older versions
        // of the @papercups-io/chat-widget package (before v1.2.x).
        // You can delete this line if you are on the latest version.
        // accountId="03affe68-aec6-4fed-96f4-f0000345efb2"
        token="03affe68-aec6-4fed-96f4-f0000345efb2"
        inbox="f7f4f930-6950-4830-9a4a-3f98c6cfb999"
        title="Chào mừng bạn đến với Three R"
        subtitle=""
        primaryColor="#000"
        greeting=""
        newMessagePlaceholder="Start typing..."
        showAgentAvailability={false}
        agentAvailableText="We're online right now!"
        agentUnavailableText="We're away at the moment."
        requireEmailUpfront={false}
        iconVariant="outlined"
        baseUrl="https://app.papercups.io"
        //Optionally include data about your customer here to identify them
        // customer={{
        //   name: users.username,
        //   email: users.email,
        //   external_id: users._id, 
        //   metadata: {
        //     plan: "premium"
        //   }
        // }}
        hideToggleButton ={hideButton}
        onChatOpened={() => setHideButton(true)}
        onChatClosed={() => setHideButton(false)}
      />
    </>
  );
};
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
            <ChatBox />
            <Header showNavbar={showNavbar} setIsLogin={() => setIsLogin(true)} isLogin={isLogin} user={user}  handleLogout={handleLogout}/>
            <div className="container">
                {isNavbarVisible && <Navbar />}
                <div className="content">{children}</div>
                <Footer />
            </div>
        </div> 
      );
}

export default DefaultLayout;