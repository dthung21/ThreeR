import React, { useState, useEffect } from 'react';
import './Message.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { CometChatUsersWithMessages } from "@cometchat/chat-uikit-react";
import { UIKitSettingsBuilder } from "@cometchat/uikit-shared";
import { CometChatUIKit } from "@cometchat/chat-uikit-react";
import { CometChat } from "@cometchat-pro/chat"; // Import CometChat SDK

const COMETCHAT_CONSTANTS = {
  APP_ID: "259096253a0042b6",
  REGION: "us",
  AUTH_KEY: "ae1f842f05be8675aa3cbc29b61c25e5d5652cc0",
  API_KEY: "87bc29e204eb50800cf2815986feba0e03f4235c", // Add your API key for creating users
};

// Create the builder
const UIKitSettings = new UIKitSettingsBuilder()
  .setAppId(COMETCHAT_CONSTANTS.APP_ID)
  .setRegion(COMETCHAT_CONSTANTS.REGION)
  .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
  .subscribePresenceForAllUsers()
  .build();

const Message = ({ isLogin, user }) => {
  const [isShown, setIsShown] = useState(false);
  const [cometChatInitialized, setCometChatInitialized] = useState(false);
  const [cometChatUser, setCometChatUser] = useState(null);

  useEffect(() => {
    const initializeAndLogin = async () => {
      try {
        await CometChatUIKit.init(UIKitSettings);
        console.log("Initialization completed successfully");

        if (isLogin && user) {
          const UID = user.username; // Replace with your UID logic if needed

          let loggedInUser = await CometChatUIKit.getLoggedinUser();
          if (!loggedInUser) {
            loggedInUser = await CometChatUIKit.login(UID);
            console.log("Login Successful:", loggedInUser);
          } else {
            console.log("Already logged in:", loggedInUser);
          }

          setCometChatUser(loggedInUser);
        }
        setCometChatInitialized(true);
      } catch (error) {
        console.error("CometChat initialization or login failed", error);
      }
    };

    initializeAndLogin();
  }, [isLogin, user]);

  const handleClick = () => {
    setIsShown((cur) => !cur);
  };

  return (
    <div className='message'>
      <div className='message--button' onClick={handleClick}>
        <FontAwesomeIcon icon={faCommentDots} className='icon__' />
      </div>
    </div>
  );
};

export default Message;
