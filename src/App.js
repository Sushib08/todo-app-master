import "./App.css";
import React, { useState } from "react";
import trash from "./trash.svg";
import AddCallback from "./AddCallback.svg";
import TodoHandler from "./TodoHandler";

function App(props) {

  const [isConnected, setisConnected] = useState(true);

  const addCallback = () => {
    setisConnected(() => false);
  };

  const delCallback = () => {
    setisConnected(() => true);
  };

  let [isColor, setisColor] = useState("#f5f5f5")

  return (
    <div className="container">
      <div className="colors">
        <button className="red"  onClick={() => setisColor('#ff1b1b')}></button>
        <button className="blue" onClick={() => setisColor('#1be8ff')}></button>
        <button className="green" onClick={() => setisColor('#1bff49')}> </button>
        <button className="yellow" onClick={() => setisColor('#ffef1b')}></button>
      </div>
      <div className="btnCallback">
        <button className="callback" onClick={delCallback}>
          <img src={trash} className="callbackSvg" alt="trash" />
        </button>
        <button className="callback" onClick={addCallback}>
          <img src={AddCallback} className="callbackSvg" alt="AddCallback" />
        </button>
      </div>
      <div className="message">
        {isConnected ? (
          <p className="disconnected">The Component was disconnected</p>
        ) : (
          <TodoHandler NewbackgroundColor={isColor}/>
        )}
      </div>
    </div>
  );
}

export default App;
