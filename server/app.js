// import { Server } from "socket.io";
// import { createServer } from "http";
// import cors from "cors";

// import jwt from "jsonwebtoken";
// import cookieParser from "cookie-parser";

// const secretKeyJWT = "asdasdsadasdasdasdsa";

const express = require("express");
const { Server } = require("socket.io"); // Import Server from socket.io
const http = require("http");
const cors = require("cors");

const port = 3000;

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(
  cors({
    // origin: "http://localhost:5173",
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// middlware for cookies
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, This is Socket app!");
});

// craetes socket at backend

// after connect , 1st emit (send msg )
io.on("connection", (socket) => {
  // console.log("Socket User connected ", socket.id);

  // ********* event 1 : send msg to all user *********
  socket.emit("welcome", `server socket msg at ID , ${socket.id}`);

  // ********* event 2 : send msg to all user excpt current user *********
  socket.broadcast.emit(
    "welcome1",
    `server socket broadcast at ID , ${socket.id}`
  );

  // ********* event 3 : receive msg to any  user *********
  // socket.on("send", (e) => {
  //   socket.broadcast.emit("chat", e);
  // });

  // ********* event 5 : send p1 to p2 msg  *********

  socket.on("send2", ({ room, msg }) => {
    // console.log("send2 data : ", room);
    // io.to(room).emit("msgRec", msg); // both same
    socket.to(room).emit("msgRec", msg);
  });
  

  // ********* event 4 : by default event for disconnect connectio *********
  socket.on("disconnect", () => {
    // console.log("user disconnected ", socket.id);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// not app.listen : due to craete another http instance

// app.get("/login", (req, res) => {
//   const token = jwt.sign({ _id: "asdasjdhkasdasdas" }, secretKeyJWT);

//   res
//     .cookie("token", token, { httpOnly: true, secure: true, sameSite: "none" })
//     .json({
//       message: "Login Success",
//     });
// });

// io.use((socket, next) => {
//   cookieParser()(socket.request, socket.request.res, (err) => {
//     if (err) return next(err);

//     const token = socket.request.cookies.token;
//     if (!token) return next(new Error("Authentication Error"));

//     const decoded = jwt.verify(token, secretKeyJWT);
//     next();
//   });
// });
