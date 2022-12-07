import React from "react";
import Messages from "./Messages";
import Input from "../components/Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-info">
        <span>Jane</span>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
