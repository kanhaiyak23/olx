'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { Socket, io } from 'socket.io-client';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Send, RefreshCw } from 'lucide-react';

const SOCKET_SERVER_URL = 'http://localhost:3000/api/socket';

export default function ChatInterfaceComponent() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState<string>('');
  const [recipientId, setRecipientId] = useState<string>('');
  const [socketId, setSocketId] = useState<string>('');
  const [receivedMessages, setReceivedMessages] = useState<{ from: string; message: string }[]>([]);
  const [connectionStatus, setConnectionStatus] = useState<string>('Disconnected');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [users, setUsers] = useState<{ id: string; name: string }[]>([]);

  const connectSocket = useCallback(() => {
    const newSocket = io(SOCKET_SERVER_URL, {
      path: '/api/socket',
      addTrailingSlash: false,
      reconnection: true,
    });

    newSocket.on('connect', () => {
      setSocketId(newSocket.id);
      setConnectionStatus('Connected');
      setErrorMessage('');
      newSocket.emit('register', newSocket.id);
    });

    newSocket.on('private_message', (data: { message: string; from: string }) => {
      setReceivedMessages((prev) => [...prev, { from: data.from, message: data.message }]);
    });

    newSocket.on('user_connected', (userId) => {
      setUsers((prev) => [...prev, { id: userId, name: userId }]); // Show Socket ID as name for simplicity
    });

    newSocket.on('disconnect', () => {
      setConnectionStatus('Disconnected');
    });

    setSocket(newSocket);
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    connectSocket();
  }, [connectSocket]);

  const sendMessage = useCallback(() => {
    if (socket && recipientId && message) {
      socket.emit('private_message', { recipientId, message });
      setMessage('');
    }
  }, [socket, recipientId, message]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Side - User List */}
      <div className="w-1/3 bg-white border-r p-4">
        <h1 className="text-xl font-bold mb-4">User List</h1>
        <ScrollArea className="h-[calc(100vh-150px)]">
          <ul>
            {users.map((user) => (
              <li
                key={user.id}
                onClick={() => setRecipientId(user.id)}
                className={`p-2 rounded-lg cursor-pointer hover:bg-gray-200 ${recipientId === user.id ? 'bg-gray-300' : ''}`}
              >
                <Avatar className="inline-block mr-2">
                  <AvatarImage src="/placeholder.svg" alt={user.name} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                {user.name} (ID: {user.id})
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>

      {/* Right Side - Chat Interface */}
      <div className="flex-grow flex flex-col">
        <div className="bg-white p-4 flex items-center justify-between border-b">
          <h2 className="font-semibold">Chat with: {recipientId || 'Select a user'}</h2>
          <Badge variant={connectionStatus === 'Connected' ? 'success' : 'destructive'}>
            {connectionStatus}
          </Badge>
        </div>

        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline"> {errorMessage}</span>
          </div>
        )}

        <ScrollArea className="flex-grow bg-gray-50 p-4 overflow-y-auto">
          <div className="space-y-4">
            {receivedMessages.map((msg, index) => (
              <div key={index} className={`flex ${msg.from === socketId ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-2 rounded-lg max-w-[80%] ${msg.from === socketId ? 'bg-blue-100' : 'bg-white'}`}>
                  <p>{msg.message}</p>
                  <p className="text-xs text-gray-500">{msg.from}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="bg-white p-4 border-t flex items-center">
          <Input
            placeholder="Type a message"
            className="flex-grow mr-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <Button variant="ghost" size="icon" onClick={sendMessage}><Send className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" onClick={() => connectSocket()}><RefreshCw className="h-4 w-4" /></Button>
        </div>
      </div>
    </div>
  );
}
