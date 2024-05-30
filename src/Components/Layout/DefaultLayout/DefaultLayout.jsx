
import Header from '../../Header/Header'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import Message from '../../Message/Message';
import React, {useState, useEffect,CSSProperties} from 'react'
import {ChatWidget, ChatWindow, Papercups} from "@papercups-io/chat-widget";
import './DefaultLayout.css'


const chatWidgetStyle = {
  chatContainer: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    color: '#000',

    position: "fixed",
    bottom: "0",
    right:"0",
    z_index:"1"
  },
  toggleContainer: {
    
    bottom: '20px',
    right: '20px',
  },
  toggleButton: {
    backgroundColor: '#000000',
    color: '#fff',
    border: 'none',
    borderRadius: '1.5rem',
    width: '60px',
    height: '45px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)'
  },
};

const ExamplePage = () => {
  return (
    <>
      {/*
        Put <ChatWidget /> at the bottom of whatever pages you would
        like to render the widget on, or in your root/router component
        if you would like it to render on every page
      */}
      <ChatWidget
        styles={chatWidgetStyle}
        // `accountId` is used instead of `token` in older versions
        // of the @papercups-io/chat-widget package (before v1.2.x).
        // You can delete this line if you are on the latest version.
        // accountId="03affe68-aec6-4fed-96f4-f0000345efb2"
        token="03affe68-aec6-4fed-96f4-f0000345efb2"
        inbox="f7f4f930-6950-4830-9a4a-3f98c6cfb999"
        title="Welcome to Three R"
        subtitle=""
        primaryColor="#000"
        greeting="dsadas"
        newMessagePlaceholder="Start typing..."
        showAgentAvailability={false}
        agentAvailableText="We're online right now!"
        agentUnavailableText="We're away at the moment."
        requireEmailUpfront={false}
        iconVariant="outlined"
        baseUrl="https://app.papercups.io"
        // Optionally include data about your customer here to identify them
        // customer={{
        //   name: __CUSTOMER__.name,
        //   email: __CUSTOMER__.email,
        //   external_id: __CUSTOMER__.id,
        //   metadata: {
        //     plan: "premium"
        //   }
        // }}
      />
    </>
  );
};
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
            
            
            <ExamplePage />
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