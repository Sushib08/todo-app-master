import "./App.css";
import React, { useState } from "react";
import trash from "./trash.svg";
import AddCallback from "./AddCallback.svg";
import TodoHandler from "./TodoHandler";
import styled from '@emotion/styled'
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

function App(props) {

  const [isConnected, setisConnected] = useState(true);

  const addCallback = () => {
    setisConnected(() => false);
  };

  const delCallback = () => {
    setisConnected(() => true);
  };

  let [isColor, setisColor] = useState("#f5f5f5");

  const ButtonRed = styled.button` 
  display: flex;
  background-color: #ff1b1b;
  padding: 25px;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 150px;
  border: none;
  width: 30px;
  height: 30px;;
`
const Basic = ({ className }) => (
  <button className={className} onClick={() => setisColor('#1be8ff')}></button>
)

const Blue = styled(Basic)`
  display: flex;
  background-color: #1be8ff;
  padding: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 5px;
  border-radius: 150px;
  border: none;
`

  return (
    <div className="container">
      <div className="colors">
        <ButtonRed  onClick={() => setisColor('#ff1b1b')}></ButtonRed>
        {/* Styling elements and components */}
        <Blue />
        {/* Style any component */}
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
