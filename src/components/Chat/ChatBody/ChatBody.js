import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../Hooks/AuthHooks';

import ChatBodyHeader from './ChatBodyHeader/ChatBodyHeader';
import ChatBodyFooter from './ChatBodyFooter/ChatBodyFooter';
import ChatBodyMessages from './ChatBodyMessages/ChatBodyMessages';

import ChatAction from '../../../action/ChatAction';
import UserAction from '../../../action/UserAction';

import styles from './ChatBody.module.scss';

const ChatBody = (props) => {
  const [userCompanion, setUserCompanion] = useState([]);
  const [chat, setChat] = useState(null);
  const params = useParams();
  const currentUser = useAuth();
  const anchorScroll = useRef(null);

  useEffect(() => {
    if (params.id) {
      UserAction.getUserByName(params.id, setUserCompanion);
    }
  }, [params]);

  useEffect(() => {
    if (currentUser && userCompanion.length !== 0) {
      ChatAction.getChat(
        currentUser.displayName,
        userCompanion[0].userDisplayName,
        setChat
      );
    }
  }, [currentUser, userCompanion]);

  return (
    <div className={styles['chat__container']} id="chat">
      {chat && (
        <>
          <ChatBodyHeader userCompanion={userCompanion[0]} />
          <ChatBodyMessages
            messages={chat.messages}
            currentUserUid={currentUser.uid}
            userCompanion={userCompanion[0]}
            anchorScroll={anchorScroll}
          />
          <ChatBodyFooter
            currentUser={currentUser}
            chatKey={chat.key}
            anchorScroll={anchorScroll}
          />
        </>
      )}
    </div>
  );
};

export default ChatBody;
