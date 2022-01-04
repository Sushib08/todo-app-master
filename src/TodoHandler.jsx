import React from "react";
import Add from "./Add.svg";
import "./TodoHandler.css";
import { useState } from "react";
// import {naoid} from 'naoid'

// const Item = [
//   {id : naoid(), value : ""}
// ];

function TodoHandler() {

  // const [addWords, setaddWords] = useState(addWords);

  // const append = (id, value) => {
  //   const words = [...addWords];
  //   words.find((item) => item.id === id).value = value;
  // }

  const isColor = useState("");
  

    return (
        <div className="bloc">
        <div className="inputButton">
          <input maxlength="12" style={{backgroundColor : isColor}}></input>
          <button className="add">
            <img
              src={Add}
              className="addSvg"
              alt="AddCallback"
            />
          </button>
        </div>
      </div>
    );
  }
  
  export default TodoHandler;
  