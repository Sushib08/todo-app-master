import React, { useState } from "react";
import "./Callback.css";
import trash from "./trash.svg";
import AddCallback from "./AddCallback.svg";
import TodoHandler from "./TodoHandler";

function Callback() {
  const [isConnected, setisConnected] = useState(true);

  const addCallback = () => {
    setisConnected((isAdd) => true);
  };

  const delCallback = () => {
    setisConnected((isAdd) => false);
  };

  return (
    <>
      <div className="container">
        <button className="callback" onClick={addCallback}>
          <img src={trash} className="callbackSvg" alt="trash" />
        </button>
        <button className="callback" onClick={delCallback}>
          <img src={AddCallback} className="callbackSvg" alt="AddCallback" />
        </button>
      </div>
      <div>
        {isConnected ? (
          <p className="disconnected">The Component was disconnected</p>
        ) : <TodoHandler />}
      </div>
    </>
  );
}

export default Callback;
