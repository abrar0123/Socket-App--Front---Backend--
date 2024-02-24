import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./index.css";

function App() {
  const socket = io("http://localhost:3000/");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("socket01 : connected run  ", socket.id);
    });

    // events name must be same at backend
    socket.on("welcome", (s) => {
      console.log("socket02 : ", s);
    });
    socket.on("welcome1", (s) => {
      console.log("socket02 bradcast : ", s);
    });
    socket.emit("message", "socket abrar");
    // when this component should removed, that function call

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-96 bg-red-100 p-4 shadow-md">
        <h1 className="text-pink-500 text-2xl font-bold">
          Welcome to Socket Chat
        </h1>
        <div>
          <label className="block text-pink-500 text-[16px] my-2 ">
            Do Chat with your friends
          </label>
          <input
            type="text"
            // className="w-72 bg-inputinside outline-0 border-istroke border px-3 py-1 rounded-sm "
            className=" bg-red-200 shadow-md appearance-none focus:border-blue-900 hover:border-primary border-2 w-full px-3 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={"chat"}
          />
          <div className=" bg-green-500 text-xl text-white py-3 pl-4 shadow-md rounded-sm cursor-pointer border-2  active:border-none font-semibold mt-4">
            Msg Send
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
