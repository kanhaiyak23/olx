// import { NextApiRequest, NextApiResponse } from 'next';
// import { PrismaClient } from '@prisma/client';

// // Initialize Prisma Client
// const prisma = new PrismaClient();

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     // Create a new user for testing purposes
//     const newUser = await prisma.user.create({
//       data: {
//         username: "testuser3",
//         profileImage: "https://example.com/profile.jpg",
//       },
//     });

//     res.status(200).json({ success: true, user: newUser });
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({ success: false, error: 'Database connection failed or query error.' });
//   }
// }
