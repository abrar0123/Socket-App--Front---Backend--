// src/pages/ChatPage.jsx
import React, { useState, useEffect, useRef } from 'react';

import { LandingPage } from '../../components';

const users = [
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/150',
    online: true,
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: 'https://via.placeholder.com/150',
    online: false,
  },
  {
    id: 3,
    name: 'Bob Johnson',
    avatar: 'https://via.placeholder.com/150',
    online: true,
  },
  {
    id: 4,
    name: 'Alice Williams',
    avatar: 'https://via.placeholder.com/150',
    online: true,
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
    id: 3,
    userId: 1,
    text: 'I am doing well. What are you up to?',
    timestamp: '10:02 AM',
  },
];

const ChatDetails = () => {
  const [currentUser, setCurrentUser] = useState(users[0]);
  const [chatMessages, setChatMessages] = useState(messages);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newChatMessage = {
        id: chatMessages.length + 1,
        userId: currentUser.id,
        text: newMessage,
        timestamp: new Date().toLocaleTimeString(),
      };
      setChatMessages([...chatMessages, newChatMessage]);
      setNewMessage('');
    }
  };

  return (
    <LandingPage>
      <div className="flex h-screen">
        <aside className="w-1/4 bg-gray-100 p-4 border-r border-gray-200">
          <h2 className="text-xl font-bold mb-4">Contacts</h2>
          <ul>
            {users.map((user) => (
              <li
                key={user.id}
                className="flex items-center space-x-3 mb-3 cursor-pointer"
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
            <h2 className="text-xl">{currentUser.name}</h2>
          </header>
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {chatMessages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${
                  message.userId === currentUser.id
                    ? 'justify-end'
                    : 'justify-start'
                }`}
              >
                <div
                  className={`p-3 rounded-lg max-w-xs ${
                    message.userId === currentUser.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-900'
                  }`}
                >
                  <p>{message.text}</p>
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
              onClick={handleSendMessage}
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
