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

  let [isColor, setisColor] = useState("#f5f5f5");

  return (
    <div class="w-screen h-screen row-auto">
      <div class="flex justify-center w-72 h-24 my-12 bg-zinc-200 drop-shadow-lg mr-3 ml-5 rounded-3xl">
        <button
          class="bg-red-600 p-6 my-auto border-none w-8 y-8 rounded-3xl flex hover:drop-shadow-lg "
          onClick={() => setisColor("#DC2626")}
        ></button>
        <button
          class="bg-blue-600 p-6 my-auto border-none w-8 y-8 ml-1.5 rounded-3xl flex hover:drop-shadow-lg "
          onClick={() => setisColor("#2563EB")}
        ></button>
        <button
          class="bg-green-500 p-6 my-auto border-none w-8 y-8 ml-1.5 rounded-3xl flex hover:drop-shadow-lg "
          onClick={() => setisColor("#22C55E")}
        >
          {" "}
        </button>
        <button
          class="bg-yellow-400 p-6 my-auto border-none w-8 y-8 ml-1.5 rounded-3xl flex hover:drop-shadow-lg "
          onClick={() => setisColor("#FACC15")}
        ></button>
      </div>
      <div class="ml-96 -mt-28">
        <button
          class="bg-white border-none rounded-full h-10 w-10 ml-3 hover:drop-shadow-lg "
          onClick={delCallback}
        >
          <img src={trash} class="-ml-px" alt="trash" />
        </button>
        <button
          class="bg-white border-none rounded-full h-10 w-10 ml-3 hover:drop-shadow-lg"
          onClick={addCallback}
        >
          <img src={AddCallback} class="-ml-px" alt="AddCallback" />
        </button>
      </div>
      <div class="flex justify-center mx-auto mt-24 font-sans text-lg ">
        {isConnected ? (
          <p>The Component was disconnected</p>
        ) : (
          <TodoHandler NewbackgroundColor={isColor} />
        )}
      </div>
    </div>
  );
}

export default App;
