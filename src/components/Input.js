import React from "react";
import attach_file from "../images/attach-file.svg";
import camera from "../images/add-camera.svg";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={attach_file} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={camera} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
