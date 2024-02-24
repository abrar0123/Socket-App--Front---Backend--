import { useEffect, useState } from "react";
import "./App.css";
import { io } from "socket.io-client";

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

    // when this component should removed, that function call
    
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <p>App run </p>
    </div>
  );
}

export default App;
