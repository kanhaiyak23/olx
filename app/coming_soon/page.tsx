'use client'

// import { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import {  Clock } from 'lucide-react'

 function ComingSoon() {
  // const [email, setEmail] = useState('')

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // Here you would typically send the email to your server
  //   console.log('Submitted email:', email)
  //   setEmail('')
  // }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 flex flex-col items-center justify-center text-white p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold">Coming Soon</h1>
        {/* <p className="text-xl">We're working hard to bring you something amazing. Stay tuned!</p> */}
        
        {/* <div className="flex justify-center space-x-4">
          <div className="text-center">
            <div className="text-3xl font-bold">07</div>
            <div className="text-sm">Days</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">15</div>
            <div className="text-sm">Hours</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">35</div>
            <div className="text-sm">Minutes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">22</div>
            <div className="text-sm">Seconds</div>
          </div>
        </div> */}

        {/* <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="flex items-center bg-white rounded-lg p-1">
            <Mail className="text-gray-500 ml-2" size={20} />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow border-none focus:ring-0"
            />
          </div>
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
            Notify Me
          </Button>
        </form> */}

        <div className="flex items-center justify-center space-x-2 text-sm mt-4">
          <Clock size={16} />
          <span>We are launching soon. Stay tuned!</span>
        </div>
      </div>
    </div>
  )
}
export default ComingSoon;