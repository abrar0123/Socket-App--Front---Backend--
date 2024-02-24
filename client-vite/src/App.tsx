import { useEffect, useState } from "react";
import "./App.css";
import { io } from "socket.io-client";

function App() {
  const socket = io("http://localhost:3000/");

  useEffect(() => {
    console.log("socket : connect");
    socket.on("connect", () => {
      console.log("socket : run 123 ");
    });
  }, []);

  return (
    <div>
      <p>App run </p>
    </div>
  );
}

export default App;
