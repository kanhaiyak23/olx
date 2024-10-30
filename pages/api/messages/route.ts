// import { getAuth } from '@clerk/nextjs/server'
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export const runtime = 'edge'

// // Handler for GET requests
// async function handleGET(req: NextRequest) {
//   try {
//     const { userId } = getAuth(req)

//     if (!userId) {
//       return NextResponse.json(
//         { error: 'Unauthorized' },
//         { status: 401 }
//       )
//     }

//     return NextResponse.json({
//       userId,
//       success: true,
//       timestamp: new Date().toISOString()
//     })
//   } catch (error) {
//     console.error('Error in user route:', error)
//     return NextResponse.json(
//       { error: 'Internal Server Error' },
//       { status: 500 }
//     )
//   }
// }

// // Handler for POST requests
// async function handlePOST(req: NextRequest) {
//   try {
//     const { userId } = getAuth(req)

//     if (!userId) {
//       return NextResponse.json(
//         { error: 'Unauthorized' },
//         { status: 401 }
//       )
//     }

//     // Parse the request body
//     const body = await req.json()

//     return NextResponse.json({
//       userId,
//       success: true,
//       data: body,
//       timestamp: new Date().toISOString()
//     })
//   } catch (error) {
//     console.error('Error in user route:', error)
//     return NextResponse.json(
//       { error: 'Internal Server Error' },
//       { status: 500 }
//     )
//   }
// }

// // Default export to handle requests based on method
// export default async function handler(req: NextRequest) {
//   if (req.method === 'GET') {
//     return handleGET(req)
//   } else if (req.method === 'POST') {
//     return handlePOST(req)
//   } else {
//     return NextResponse.json(
//       { error: 'Method Not Allowed' },
//       { status: 405 }
//     )
//   }
// }
