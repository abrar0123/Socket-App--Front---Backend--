// src/pages/ChatPage.jsx
import React, { useState, useEffect, useRef, useMemo } from 'react';

import { LandingPage } from '../../components';
import { io } from 'socket.io-client';

const users = [
  {
    id: 1,
    name: 'Abrar Test',
    avatar: 'https://via.placeholder.com/150',
    online: true,
    uid: '',
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: 'https://via.placeholder.com/150',
    online: false,
    uid: '',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    avatar: 'https://via.placeholder.com/150',
    online: true,
    uid: '',
  },
  {
    id: 4,
    name: 'Alice Williams',
    avatar: 'https://via.placeholder.com/150',
    online: true,
    uid: '',
  },
];

const messages = [
  { id: 1, userId: 1, text: 'Hello, how are you?', timestamp: '10:00 AM' },
  {
    id: 2,
    userId: 2,
    text: 'I am good, thank you! How about you?',
    timestamp: '10:01 AM',
  },
  {
    id: 2,
    userId: 2,
    text: 'I am good, thank you! How about you?',
    timestamp: '10:01 AM',
  },
  {
    id: 2,
    userId: 2,
    text: 'I am good, thank you! How about you?',
    timestamp: '10:01 AM',
  },
  {
    id: 2,
    userId: 2,
    text: 'I am good, thank you! How about you?',
    timestamp: '10:01 AM',
  },
  {
    id: 3,
    userId: 1,
    text: 'I am doing well. What are you up to?',
    timestamp: '10:02 AM',
  },
];

const ChatDetails = () => {
  const [currentUser, setCurrentUser] = useState(users[1]);
  const [selected, setSelected] = useState([]);
  const socket = useMemo(() => io('http://localhost:3000/'), []);
  const [msg, setmsg] = useState('');
  const [receivedmsg, setreceivedmsg] = useState([]);
  const [socketId, setsocketId] = useState(null);
  const [roomId, setRoomId] = useState('');

  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  // ************ Funtion 1 *************
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // ************ Funtion 2 *************
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connection : Build   ', socket.id);
      setsocketId(socket.id);
    });

    socket.on('chat', (msg) => {
      console.log('Backend msgRec Listener : ', msg);

      setChatMessages((prev) => [...prev, msg]);
    });
    socket.on('msgRec', (msg) => {
      console.log('Backend msgRec Listener 1 : ', msg);

      setChatMessages((prev) => [...prev, msg]);
    });
  }, []);

  const sendEvent = () => {
    const newChatMessage = {
      id: chatMessages.length + 1,
      userId: currentUser.id,
      text: newMessage,
      timestamp: new Date().toLocaleTimeString(),
      self: false,
    };
    const data = { room: roomId, msg: newChatMessage };
    socket.emit('send2', data);

    setmsg('');

    setChatMessages([...chatMessages, { ...newChatMessage, self: true }]);
    setNewMessage('');
  };
  console.log('chatMessages', chatMessages);

  return (
    <LandingPage>
      <div className="flex h-screen">
        <aside className="w-1/4 bg-gray-100 p-4 border-r border-gray-200">
          <h2 className="text-xl font-bold mb-4">Contacts</h2>
          <ul>
            {users.map((user) => (
              <li
                key={user.id}
                className="flex bg-teal-50 items-center space-x-3 mb-3 cursor-pointer"
                style={{
                  backgroundColor:
                    user.id === selected?.id ? '#e4aec6' : '#eeeeee',
                }}
                onClick={() => setSelected(user)}
                // P1
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-600">
                    {user.online ? 'Online' : 'Offline'}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
        <main className="flex-1 flex flex-col">
          <header className="p-4 bg-blue-600 text-white flex items-center">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <h2 className="text-xl mr-5">{selected.name}</h2>
            <h3 className="text-green-300 font-bold mr-5">{socketId}</h3>
            <input
              type="text"
              // className="w-72 bg-inputinside outline-0 border-istroke border px-3 py-1 rounded-sm "
              className=" bg-blue-200 shadow-md appearance-none focus:border-white hover:border-primary border-2 w-full px-3 py-3 text-black text-xl leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Room ID"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
            />{' '}
            {/* p1 */}
          </header>
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {chatMessages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${
                  message.self ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`p-3 rounded-lg max-w-xs ${
                    message.self
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-900'
                  }`}
                >
                  <p>{message?.text}</p>
                  <p className="text-xs mt-2 text-right">{message.timestamp}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <footer className="p-4 bg-white border-t border-gray-200 flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
              placeholder="Type a message"
            />
            <button
              onClick={sendEvent}
              className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-500"
            >
              Send
            </button>
          </footer>
        </main>
      </div>
    </LandingPage>
  );
};

export default ChatDetails;
