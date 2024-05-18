import { useEffect, useMemo, useState } from 'react';
import { io } from 'socket.io-client';
import './index.css';
import { LandingPage } from './components';

function App() {
  const socket = useMemo(() => io('http://localhost:3000/'), []);
  const [msg, setmsg] = useState('');
  const [receivedmsg, setreceivedmsg] = useState([]);
  const [socketId, setsocketId] = useState(null);
  const [roomId, setRoomId] = useState('');

  console.log('chat : msgrec ', receivedmsg);
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connection : Build   ', socket.id);
      setsocketId(socket.id);
    });

    // events name must be same at backend
    socket.on('welcome', (s) => {
      console.log('On, welcome Listener : ', s);
    });
    socket.on('welcome1', (s) => {
      console.log('On, welcome1 Listener : ', s);
    });
    // socket.emit("message", "socket abrar");
    // when this component should removed, that function call

    // return () => {
    // socket.disconnect();
    // };
    socket.on('chat', (msg) => {
      setreceivedmsg((prev) => [...prev, msg]);
    });

    socket.on('msgRec', (msg) => {
      console.log('Backend msgRec Listener : ', msg);

      setreceivedmsg((prev) => [...prev, msg]);
    });
  }, []);

  const msgSendHandler = () => {
    const data = { room: roomId, msg: msg };
    socket.emit('send2', data);
    console.log('Emit, send2 Handler : ', msg);

    setmsg('');
  };

  return (
    <>
      <LandingPage />
      <div className="flex justify-center flex-wrap gap-10 items-center mt-10">
        <div className="w-96 bg-gray-200 p-4 shadow-md">
          <h1 className="text-pink-500 text-2xl font-bold">
            Welcome to Socket Chat
          </h1>
          {/* <Home /> */}
          <div>
            <label className="block text-pink-500 text-[16px] my-2 ">
              {socketId}
            </label>
            <input
              type="text"
              // className="w-72 bg-inputinside outline-0 border-istroke border px-3 py-1 rounded-sm "
              className=" bg-red-200 shadow-md appearance-none focus:border-blue-900 hover:border-primary border-2 w-full px-3 py-3 text-pink-600 text-xl leading-tight focus:outline-none focus:shadow-outline"
              placeholder="lets chat"
              value={msg}
              onChange={(e) => setmsg(e.target.value)}
            />
            <label className="block text-pink-500 text-[16px] my-2 ">
              Enter Room ID
            </label>
            <input
              type="text"
              // className="w-72 bg-inputinside outline-0 border-istroke border px-3 py-1 rounded-sm "
              className=" bg-red-200 shadow-md appearance-none focus:border-blue-900 hover:border-primary border-2 w-full px-3 py-3 text-pink-600 text-xl leading-tight focus:outline-none focus:shadow-outline"
              placeholder="add room id "
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
            />
            <div
              onClick={msgSendHandler}
              className=" bg-green-500 text-xl text-white py-3 pl-4 shadow-md rounded-sm cursor-pointer border-2  active:border-none font-semibold mt-4"
            >
              Msg Send
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="w-96 bg-gray-200 p-4 shadow-md">
          <h1 className="text-pink-500 text-2xl font-bold">
            Socket Chat Received
          </h1>
          <div>
            <h1 className="font-semibold text-xl text-purple-700">New Chat </h1>
            {/* <p>{receivedmsg}</p> */}
            {receivedmsg.map((item) => {
              return <p>{item}</p>;
            })}
            <div
              onClick={msgSendHandler}
              className=" bg-green-500 text-xl text-white py-3 pl-4 shadow-md rounded-sm cursor-pointer border-2  active:border-none font-semibold mt-4"
            >
              Msg Send
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
