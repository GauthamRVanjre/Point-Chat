import React from "react";
import attach_file from "../images/attach-file.svg";

const Register = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">POINT CHAT</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Enter name" />
          <input type="email" placeholder="enter email" />
          <input type="password" placeholder="enter password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={attach_file} alt="file attachment" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>You have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
