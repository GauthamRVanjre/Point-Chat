import React from "react";

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
          <input type="file" />
          <button>Sign Up</button>
        </form>
        <p>You have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
