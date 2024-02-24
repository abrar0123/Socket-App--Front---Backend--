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
    <div className="bg-red-300">
      <h1 className="text-pink-500">Welcome to Socket webflow </h1>
    </div>
  );
}

export default App;
