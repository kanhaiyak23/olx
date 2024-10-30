import { NextApiRequest, NextApiResponse } from "next";
import type { Server as HTTPServer } from "http";
import type { Socket as NetSocket } from "net";
import { Server as IOServer } from "socket.io";
import { PrismaClient } from "@prisma/client"; 
const prisma = new PrismaClient();
const PORT = 3000;

interface SocketServer extends HTTPServer {
  io?: IOServer;
}

interface SocketWithIO extends NetSocket {
  server: SocketServer;
}

interface NextApiResponseWithSocket extends NextApiResponse {
  socket: SocketWithIO;
}

interface Message {
  senderId: string;
  listingId: string;
  message: string;
  timestamp: number;
}

// Store messages for each room
const newMessage: { [roomId: string]: Message[] } = {};

export default function handler(req: NextApiRequest, res: NextApiResponseWithSocket) {
  if (res.socket.server.io) {
    res.status(200).json({ success: true, message: "Socket is already running", socket: `:${PORT + 1}` });
    return;
  }

  console.log("Starting Socket.IO server on port:", PORT + 1);

  const io = new IOServer({
    path: "/api/socket",
    cors: {
      origin: "*",
    },
  }).listen(PORT + 1);

  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    socket.on("join room", (roomId) => {
      socket.join(roomId);
      console.log(`User with socket ID ${socket.id} joined room: ${roomId}`);
      socket.emit('room joined', roomId);

      // Send previous messages to the user
      if (newMessage[roomId]) {
        socket.emit('previous messages', newMessage[roomId]);
      }
    });

    socket.on("chat message", async ({ message, roomId }) => {
      console.log("Received message:", message, "for room:", roomId);
    
      // Store the message locally for reference (if required)
      if (!newMessage[roomId]) {
        newMessage[roomId] = [];
      }
      newMessage[roomId].push(message);
    
      try {
        // Store message in the Prisma database
        await prisma.chat.create({
          data: {
            senderId: message.senderId,  // Sender's ID
            chatId: roomId,              // Room ID (use as chatId)
            text: message.message,   
            sellerId: message.sellerid
                          
          },
        });

        console.log("Message stored in MySQL database.");
      } catch (error) {
        console.error("Error storing message in database:", error);
      }
    
      // Broadcast the message to all clients in the room
      io.to(roomId).emit("chat message", message);
    
      // Also emit a new message notification
      io.to(roomId).emit("new message notification", message);
    });
    
    socket.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id);
    });
  });

  res.socket.server.io = io;
  res.status(201).json({ success: true, message: "Socket is started", socket: `:${PORT + 1}` });
}

export const config = {
  api: {
    bodyParser: false,
  },
};