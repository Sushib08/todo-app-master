import "./App.css";
import React, { useState } from "react";
import trash from "./trash.svg";
import AddCallback from "./AddCallback.svg";
import TodoHandler from "./TodoHandler";

function App() {
  const [isConnected, setisConnected] = useState(true);

  const [isColor, setisColor] = useState("");

  const addCallback = () => {
    setisConnected(() => true);
  };

  const delCallback = () => {
    setisConnected(() => false);
  };

  const red = () => {
    setisColor("#ff1b1b")
  }

  const blue = () => {
    setisColor("#1be8ff")
  }

  const green = () => {
    setisColor("#1bff49")
  }

  const yellow = () => {
    setisColor("#ffef1b")
  }


  return (
    <div className="container">
      <div className="colors">
        <button className="red" onClick={red}></button>
        <button className="blue" onClick={blue}></button>
        <button className="green" onClick={green}></button>
        <button className="yellow" onClick={yellow}></button>
      </div>
      <div className="btnCallback">
        <button className="callback" onClick={addCallback}>
          <img src={trash} className="callbackSvg" alt="trash" />
        </button>
        <button className="callback" onClick={delCallback}>
          <img src={AddCallback} className="callbackSvg" alt="AddCallback" />
        </button>
        </div>
      <div className="message">
        {isConnected ? (
          <p className="disconnected">The Component was disconnected</p>
        ) : <TodoHandler  />}
      </div>
    </div>
  );
}

export default App;
