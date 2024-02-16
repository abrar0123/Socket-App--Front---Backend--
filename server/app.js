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
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello, This is Socket app!");
});

io.on("connection", (socket) => {
  console.log("Socket User Credentials ");
  console.log("Socket id", socket.id);
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

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
