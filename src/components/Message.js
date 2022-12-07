import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="message-info">
        <img
          src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="user pic"
        />
        <span>Just now</span>
      </div>
      <div className="message-content">
        <p>Hello</p>
        <img
          src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="user pic"
        />
      </div>
    </div>
  );
};

export default Message;
