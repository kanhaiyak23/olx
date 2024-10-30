// // pages/api/chats/index.ts

// import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { participants } = req.body
//     try {
//       const chat = await prisma.chat.create({
//         data: {
//           participants: {
//             create: participants.map((userId: string) => ({ userId })),
//           },
//         },
//         include: {
//           participants: {
//             include: {
//               user: {
//                 select: { id: true, username: true },
//               },
//             },
//           },
//         },
//       })
//       res.status(201).json(chat)
//     } catch (error) {
//       res.status(500).json({ message: 'Error creating chat', error })
//     }
//   } else if (req.method === 'GET') {
//     const { userId } = req.query
//     try {
//       const chats = await prisma.chat.findMany({
//         where: {
//           participants: {
//             some: {
//               userId: String(userId),
//             },
//           },
//         },
//         include: {
//           participants: {
//             include: {
//               user: {
//                 select: { id: true, username: true },
//               },
//             },
//           },
//           messages: {
//             orderBy: {
//               createdAt: 'desc',
//             },
//             take: 1,
//           },
//         },
//       })
//       res.status(200).json(chats)
//     } catch (error) {
//       res.status(500).json({ message: 'Error retrieving chats', error })
//     }
//   } else {
//     res.setHeader('Allow', ['GET', 'POST'])
//     res.status(405).end(`Method ${req.method} Not Allowed`)
//   }
// }

import { NextApiRequest, NextApiResponse } from 'next'
// import prisma from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Handle GET request to retrieve all messages
  if (req.method === 'GET') {
    try {
      const messages = await prisma.chat.findMany({
        orderBy: { createdAt: 'asc' },
      });
      return res.status(200).json(messages);
    } catch (error) {
      return res.status(500).json({ message: 'Error retrieving all messages', error });
    }
  }

  // Handle POST request to create a new message
  else if (req.method === 'POST') {
    const { senderId, sellerId, chatId, text, image } = req.body;
    try {
      const newMessage = await prisma.chat.create({
        data: {
          senderId,
          sellerId,
          chatId,
          text,
          image,
        },
      });
      return res.status(201).json(newMessage);
    } catch (error) {
      return res.status(500).json({ message: 'Error creating message', error });
    }
  }

  // Handle PUT request to update a message
  else if (req.method === 'PUT') {
    const { id, senderId, sellerId, chatId, text, image } = req.body;
    try {
      const updatedMessage = await prisma.chat.update({
        where: { id },
        data: {
          senderId,
          sellerId,
          chatId,
          text,
          image,
        },
      });
      return res.status(200).json(updatedMessage);
    } catch (error) {
      return res.status(500).json({ message: 'Error updating message', error });
    }
  }

  // Handle DELETE request to delete a message
  else if (req.method === 'DELETE') {
    const { id } = req.body; // Assuming you send the id in the request body
    try {
      await prisma.chat.delete({
        where: { id },
      });
      return res.status(204).end(); // No content to return on successful delete
    } catch (error) {
      return res.status(500).json({ message: 'Error deleting message', error });
    }
  }

  // Handle unsupported request methods
  else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
