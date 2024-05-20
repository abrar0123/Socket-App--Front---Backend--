import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import 'tailwindcss/tailwind.css';

const socket = io('http://localhost:5566'); // Adjust the URL as needed

const ChatApp = () => {
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);

  const localStreamRef = useRef();
  const remoteStreamRef = useRef();
  const peerConnectionRef = useRef();

  useEffect(() => {
    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on('userList', (users) => {
      setUsers(users);
    });

    socket.on('offer', async (data) => {
      await handleOffer(data);
    });

    socket.on('answer', async (data) => {
      await handleAnswer(data);
    });

    socket.on('ice-candidate', async (data) => {
      await handleIceCandidate(data);
    });

    return () => {
      socket.off('receiveMessage');
      socket.off('userList');
      socket.off('offer');
      socket.off('answer');
      socket.off('ice-candidate');
    };
  }, []);

  const registerUser = () => {
    socket.emit('register', username, (response) => {
      setUserId(response.userId);
    });
  };

  const createRoom = () => {
    socket.emit('createRoom', userId, (roomId) => {
      setRoomId(roomId);
    });
  };

  const joinRoom = () => {
    socket.emit('joinRoom', roomId, userId, (response) => {
      if (response.success) {
        console.log(`Joined room ${response.roomId}`);
      } else {
        console.error(response.message);
      }
    });
  };

  const sendMessage = () => {
    socket.emit('sendMessage', roomId, message);
    setMessage('');
  };

  const startVideoCall = async (targetUserId) => {
    const localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    setLocalStream(localStream);
    localStreamRef.current.srcObject = localStream;

    peerConnectionRef.current = createPeerConnection(targetUserId);
    localStream
      .getTracks()
      .forEach((track) =>
        peerConnectionRef.current.addTrack(track, localStream),
      );

    const offer = await peerConnectionRef.current.createOffer();
    await peerConnectionRef.current.setLocalDescription(offer);

    socket.emit('offer', {
      target: targetUserId,
      offer: peerConnectionRef.current.localDescription,
    });
  };

  const createPeerConnection = (targetUserId) => {
    const peerConnection = new RTCPeerConnection({
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' },
      ],
    });

    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit('ice-candidate', {
          target: targetUserId,
          candidate: event.candidate,
        });
      }
    };

    peerConnection.ontrack = (event) => {
      setRemoteStream(event.streams[0]);
      remoteStreamRef.current.srcObject = event.streams[0];
    };

    return peerConnection;
  };

  const handleOffer = async (data) => {
    peerConnectionRef.current = createPeerConnection(data.source);

    const localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    setLocalStream(localStream);
    localStreamRef.current.srcObject = localStream;

    localStream
      .getTracks()
      .forEach((track) =>
        peerConnectionRef.current.addTrack(track, localStream),
      );

    await peerConnectionRef.current.setRemoteDescription(data.offer);

    const answer = await peerConnectionRef.current.createAnswer();
    await peerConnectionRef.current.setLocalDescription(answer);

    socket.emit('answer', {
      target: data.source,
      answer: peerConnectionRef.current.localDescription,
    });
  };

  const handleAnswer = async (data) => {
    await peerConnectionRef.current.setRemoteDescription(data.answer);
  };

  const handleIceCandidate = async (data) => {
    try {
      await peerConnectionRef.current.addIceCandidate(data.candidate);
    } catch (e) {
      console.error('Error adding received ice candidate', e);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-8">Chat App</h1>
      {!userId ? (
        <div className="flex flex-col items-center space-y-4">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={registerUser}
          >
            Register
          </button>
        </div>
      ) : (
        <div className="w-full max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">Users</h2>
          <ul className="mb-4">
            {users.map((user) => (
              <li
                key={user.userId}
                className="flex justify-between items-center p-2 bg-white shadow rounded mb-2"
              >
                {user.username}
                <button
                  className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
                  onClick={() => startVideoCall(user.userId)}
                >
                  Call
                </button>
              </li>
            ))}
          </ul>
          {roomId ? (
            <div>
              <h2 className="text-xl font-semibold mb-2">Room ID: {roomId}</h2>
              <div className="p-4 bg-white shadow rounded mb-4">
                {messages.map((msg, index) => (
                  <p key={index} className="mb-2">
                    {msg}
                  </p>
                ))}
              </div>
              <div className="flex space-x-2 mb-4">
                <input
                  type="text"
                  className="p-2 flex-grow border border-gray-300 rounded"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={sendMessage}
                >
                  Send Message
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <video
                  ref={localStreamRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-64 bg-black rounded"
                ></video>
                <video
                  ref={remoteStreamRef}
                  autoPlay
                  playsInline
                  className="w-full h-64 bg-black rounded"
                ></video>
              </div>
            </div>
          ) : (
            <div className="flex flex-col space-y-2">
              <button
                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={createRoom}
              >
                Create Room
              </button>
              <div className="flex space-x-2">
                <input
                  type="text"
                  className="p-2 flex-grow border border-gray-300 rounded"
                  placeholder="Enter Room ID"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                />
                <button
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={joinRoom}
                >
                  Join Room
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatApp;
