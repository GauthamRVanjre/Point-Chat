import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lama chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <span>John</span>
        <button>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
