import React from "react";
import Add from "./Add.svg";
import "./TodoHandler.css";
import { useState } from "react";
import { nanoid } from "nanoid";

// const Item = [
//   {id : naoid(), value : ""}
// ];

function TodoHandler(props) {
  const inputRef = React.createRef(null);

  const [words, setWords] = useState([]);

  const append = (value) => {
    const item = { id: nanoid(), value, isDone: false, isHidden: false };
    setWords([...words, item]);
    inputRef.current.value = "";
  };

  // const supp = (id) => {
  //   const wordsCopy =  setWords([...words]);
  //   const _id = wordsCopy.findIndex(value => value.id === id);
  //   wordsCopy.splice(_id, 1);
  //   setWords([...wordsCopy]);
  // };

  const checkbox = (id) => {
    const wordsCopy = setWords([...words]);
    const item = wordsCopy.find((value) => value.id === id);
    item.isDone = !item?.isDone;
    setWords([...wordsCopy]);
    console.log(wordsCopy);
  };

  return (
    <div>
      <div
        className="bloc"
        style={{ backgroundColor: `${props.NewbackgroundColor}` }}
      >
        <div className="inputButton">
          <input maxlength="12" ref={inputRef} />
          <button
            className="add"
            onClick={() => append(inputRef.current.value)}
          >
            <img src={Add} className="addSvg" alt="AddCallback" />
          </button>
        </div>
      </div>
      <div className="bloc2">
        {words.map((word) => (
          <label class="element">
            <p
              class="text"
              style={{
                position: "relative",
                textDecoration: `${word.isDone ? "line-through" : "none"}`,
                // opacity:`${word.isDone ? 0.2 : 1}`
              }}
            >
              <input
                class="coche"
                type="checkbox"
                checked={word.isDone}
                onChange={() => checkbox(word.id)}
              />
              <span class="checkmark"></span>
              {word.value}
              {/* <button class="supp" onClick={() => supp(words.id)}>X</button> */}
            </p>
          </label>
        ))}
      </div>
    </div>
  );
}

export default TodoHandler;
