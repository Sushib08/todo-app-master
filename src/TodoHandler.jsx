import React from "react";
import Add from "./Add.svg";
import "./TodoHandler.css";
// import { useState } from "react";
// import {naoid} from 'naoid'

// const Item = [
//   {id : naoid(), value : ""}
// ];

function TodoHandler(props) {

  // const [addWords, setaddWords] = useState(addWords);

  // const append = (id, value) => {
  //   const words = [...addWords];
  //   words.find((item) => item.id === id).value = value;
  // }

  

    return (
      <div>
        <div className="bloc" style={{backgroundColor: `${props.NewbackgroundColor}`}}>
        <div className="inputButton">
          <input maxlength="12"></input>
          <button className="add">
            <img
              src={Add}
              className="addSvg"
              alt="AddCallback"
            />
          </button>
        </div>
      </div>
      <div className="content-list">

      </div>
      </div>

    );
  }
  
  export default TodoHandler;
  