"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ChatComponent from "../chat/page";
import io from "socket.io-client";
import { useRouter } from "next/navigation";

interface Message {
  senderId: string;
  listingId: string;
  message: string;
  timestamp: number;
}

interface SellerMessagesProps {
  listingId: string;
  sellerId: string;
}

export default function SellerMessages({
  listingId,
  sellerId,
}: SellerMessagesProps) {
  const { user, isLoaded } = useUser();
  const [messages, setMessages] = useState<Message[]>([]);
  const [socket, setSocket] = useState<ReturnType<typeof io> | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !user) {
      router.push("/"); // Redirect to home page if not logged in
    }
  }, [isLoaded, user, router]);

  useEffect(() => {
    const newSocket = io(`https://olx-backend-yclp.onrender.com`);
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket && user) {
      const roomId = `${listingId}-${sellerId}`;

      socket.on("connect", () => {
        console.log(`Seller connected to server with socket id: ${socket.id}`);
        socket.emit("join room", roomId);
      });

      socket.on("room joined", (joinedRoomId: string) => {
        console.log(`Joined room: ${joinedRoomId}`);
      });

      socket.on("previous messages", (previousMessages: Message[]) => {
        console.log("Received previous messages:", previousMessages);
        setMessages(previousMessages);
      });

      socket.on("new message notification", (data: Message) => {
        console.log("New message notification:", data);
        setMessages((prevMessages) => [...prevMessages, data]);
      });

      socket.on("chat message", (data: Message) => {
        console.log("Chat message received:", data);
        setMessages((prevMessages) => [...prevMessages, data]);
      });
    }

    return () => {
      if (socket) {
        socket.off("room joined");
        socket.off("previous messages");
        socket.off("new message notification");
        socket.off("chat message");
      }
    };
  }, [socket, user, listingId, sellerId]);

  if (!isLoaded || !user) {
    return null; // Or a loading spinner
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Messages</h1>
      {messages.length > 0 ? (
        messages.map((message, index) => (
          <Card key={index} className="mb-4">
            <CardHeader>
              <CardTitle>Message for listing: {message.listingId}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{message.message}</p>
              <p className="text-sm text-gray-500">
                {new Date(message.timestamp).toLocaleString()}
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="mt-2">Reply</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Chat with Buyer</DialogTitle>
                  </DialogHeader>
                  <ChatComponent
                    listingId={message.listingId}
                    sellerId={user.id}
                  />
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))
      ) : (
        <p>No messages yet.</p>
      )}
    </div>
  );
}
