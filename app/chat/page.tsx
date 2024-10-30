'use client';
import { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Define the props interface


interface ChatMessage {
  senderId: string;
  listingId: string;
  text: string;
  timestamp: number;
  sellerid: string;
}
// interface  ChatComponentProps {
//   listingId: string; // Explicitly typing props
//   sellerId: string; // Explicitly typing props
// }

const ChatComponent: React.FC<{listingId:string,sellerId:string}> = ({ listingId, sellerId }) =>{
  const [socket, setSocket] = useState<ReturnType<typeof io> | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const { user } = useUser();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!user) return;

    const newSocket = io(`https://olx-backend-yclp.onrender.com`); // Adjust according to your environment
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [user]);

  useEffect(() => {
    if (!socket || !user) return;

    const roomId = `${listingId}-${sellerId}`;
    socket.on("connect", () => {
      console.log(`Connected to server with socket id: ${socket.id}`);
      socket.emit("join room", roomId);
    });

    socket.on("previous messages", (messages: ChatMessage[]) => {
      setChatMessages(messages);
    });

    socket.on("chat message", (msg: ChatMessage) => {
      setChatMessages(prevMessages => [...prevMessages, msg]);
    });

    return () => {
      socket.off("previous messages");
      socket.off("chat message");
    };
  }, [socket, user, listingId, sellerId]);

  const sendMessage = () => {
    if (currentMessage.trim() && socket && user) {
      const roomId = `${listingId}-${sellerId}`;
      const messageData: ChatMessage = {
        senderId: user.id,
        listingId,
        text: currentMessage.trim(),
        timestamp: Date.now(),
        sellerid: sellerId,
      };
      socket.emit("chat message", { message: messageData, roomId });
      setCurrentMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Chat for Listing: {listingId}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] overflow-y-scroll" ref={scrollAreaRef}>
          {chatMessages.map((msg, index) => (
            <div key={index} className={`flex mb-2 ${msg.senderId === user?.id ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-xs px-4 py-2 rounded-lg ${msg.senderId === user?.id ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
                <p>{msg.text}</p>
                <span className="text-xs opacity-50">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center space-x-2">
          <Input
            type="text"
            placeholder="Type a message..."
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Button onClick={sendMessage}>Send</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
export default ChatComponent