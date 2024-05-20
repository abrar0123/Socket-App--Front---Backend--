const express = require('express');
const { Server } = require('socket.io'); // Import Server from socket.io
const http = require('http');
const cors = require('cors');
const socketIo = require('socket.io');
const { v4: uuidv4 } = require('uuid');

const app = express();
const server = http.createServer(app);
// const io = socketIo(server);

const users = {};
const rooms = {};

const port = 5566;

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

app.use(
  cors({
    // origin: "http://localhost:5173",
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
  }),
);

// middlware for cookies
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, This is Socket app!');
});

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('register', (username, callback) => {
    const userId = uuidv4();
    users[userId] = { username, socketId: socket.id };
    callback({ userId, username });
    io.emit('userList', Object.values(users));
  });

  socket.on('createRoom', (userId, callback) => {
    const roomId = uuidv4();
    rooms[roomId] = { users: [userId] };
    socket.join(roomId);
    callback(roomId);
  });

  socket.on('joinRoom', (roomId, userId, callback) => {
    if (rooms[roomId]) {
      socket.join(roomId);
      rooms[roomId].users.push(userId);
      callback({ success: true, roomId });
      io.to(roomId).emit('userJoined', userId);
    } else {
      callback({ success: false, message: 'Room not found' });
    }
  });

  socket.on('sendMessage', (roomId, message) => {
    io.to(roomId).emit('receiveMessage', message);
  });

  // WebRTC signaling
  socket.on('offer', (data) => {
    io.to(data.target).emit('offer', data);
  });

  socket.on('answer', (data) => {
    io.to(data.target).emit('answer', data);
  });

  socket.on('ice-candidate', (data) => {
    io.to(data.target).emit('ice-candidate', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
    const userId = Object.keys(users).find(
      (key) => users[key].socketId === socket.id,
    );
    if (userId) {
      delete users[userId];
      io.emit('userList', Object.values(users));
    }
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
