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

  let [words, setWords] = useState([]);

  const word = words.length;

  const append = (value) => {
    if(value.trim()){
    const item = { id: nanoid(), value, isDone: false, isHidden: false};
    setWords([...words, item]);
    inputRef.current.value = "";
    }
  };

  const supp = (id) => {
    const _id = words.findIndex((value) => value.id === id);
    words.splice(_id, 1);
    setWords([...words]);
  };

  const suppAllChecked =() =>{
    const wordsCopy = words.filter(item => item.isDone !==true);
    setWords([...wordsCopy])
  }

  const checkbox = (id) => {
    // const wordsCopy = setWords([...words]);
    const item = words.find((value) => value.id === id);
    item.isDone = !item?.isDone;
    setWords([...words]);
    console.log("check", item);
  };

  const All = () => {
    const wordsCopy = words.map(item => {
      item.isHidden = false;
      return item;
    });
    setWords([...wordsCopy]);
    console.log(wordsCopy)
  };

  const active = () => {
    const wordsCopy = words.map(item => {
      if (item.isDone) {
        item.isHidden = true;
        return item;
      }
      item.isHidden = false;
      return item;
    });
    setWords([...wordsCopy]);
    console.log(wordsCopy)
  };

  const completed = () => {
    const wordsCopy = words.map(item => {
      if (item.isDone) {
        item.isHidden = false;
        return item;
      }
      item.isHidden = true;
      return item;
    });
    setWords([...wordsCopy]);
    console.log(wordsCopy)
  };

  return (
    <div class="w-auto h-auto bg-zinc-200 drop-shadow-lg rounded-3xl">
      <div
        class="h-24 w-72 mx-auto mt-3 rounded-full bg-zinc-200 drop-shadow-lg"
        // w-72 h-16 flex mx-auto mt-72 bg-zinc-200 rounded-3xl drop-shadow-lg
        style={{ backgroundColor: `${props.NewbackgroundColor}` }}
      >
        <div class="w-60 h-20 flex justify-center border-none drop-shadow-lg rounded-3xl text-3xl">
          <input maxLength="12" ref={inputRef} />
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
          <label className="element">
            <p
              className="text"
              style={{
                position: "relative",
                textDecoration: word.isDone ? "line-through" : "none",
                opacity: word.isDone ? 0.2 : 1,
                display: word.isHidden ? 'none' : 'block'
              }}
            >
              <input
                className="coche"
                type="checkbox"
                checked={word.isDone}
                onChange={() => checkbox(word.id)}
              />
              <span className="checkmark"></span>
              {word.value}
              <button className="supp" onClick={() => supp(word.id)}>
                X
              </button>
            </p>
          </label>
        ))}
      </div>
      <div className="bloc3">
        <p className="nbItems">
          <strong>{word}</strong> items left
        </p>
        <div className="filtres">
          <button className="filtre" onClick={All}>
            All <strong>{word}</strong>
          </button>
          <button className="filtre" onClick={active}>
            Active
            <strong>
               {words.filter((item) => item.isDone === false).length}
            </strong>
          </button>
          <button className="filtre" onClick={completed}>
            Completed
            <strong>
               {words.filter((item) => item.isDone === true).length}
            </strong>
          </button>
        </div>
        <button className="clear" onClick={suppAllChecked}>Clear completed</button>
      </div>
      </div>
  );
}

export default TodoHandler;