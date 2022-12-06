import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" placeholder="enter a name" />
      </div>
      <div className="user-chat">
        <img
          src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="user pic"
        />
        <div className="user-chat-info">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
