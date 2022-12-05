import React from "react";
const Login = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">POINT CHAT</span>
        <span className="title">Register</span>
        <form>
          <input type="email" placeholder="enter email" />
          <input type="password" placeholder="enter password" />

          <button>Sign In</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
