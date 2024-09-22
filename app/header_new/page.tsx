"use client";
import { useState } from "react";
import {
  ChevronDown,
  Search,
  MessageCircle,
  Bell,
 
} from "lucide-react";
import { useAuth, UserButton, useUser, SignInButton } from "@clerk/nextjs";
import Link from "next/link"; // Import Link from next/link

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function OlxHeaderFinal() {
   // State to hold the selected category
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const [searchQuery, setSearchQuery] = useState("");

  
  const notifications = [
    {
      id: 1,
      title: "New message",
      description: "You have a new message from a buyer",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Price drop alert",
      description: "A product in your wishlist has dropped in price",
      time: "1 day ago",
    },
    {
      id: 3,
      title: "Offer accepted",
      description: "Your offer for 'iPhone 12' has been accepted",
      time: "3 days ago",
    },
  ]

  return (
    <div>
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-4">
              <Link href="/home_page" passHref>
                <svg className="w-10 h-10 cursor-pointer" viewBox="0 0 1024 1024" fill="none">
                  <path d="M0 0H1024V1024H0V0Z" fill="#002F34" />
                  <path
                    d="M660 330H363C345.33 330 331 344.33 331 362V659C331 676.67 345.33 691 363 691H660C677.67 691 692 676.67 692 659V362C692 344.33 677.67 330 660 330Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link href="/" passHref>
                <Button className="text-sm bg-[#002F34] text-white rounded-full">
                  Home
                </Button>
              </Link>
              <div className="relative">
                <ChevronDown
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={16}
                />
              </div>
            </div>

            <div className="flex-grow mx-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Find Cars, Mobile Phones and more..."
                  className="w-full border-2 border-gray-300 rounded-sm py-2 px-4 pr-12 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button className="absolute right-0 top-0 bottom-0 bg-[#002F34] text-white px-4 rounded-r-sm">
                  <Search size={20} />
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              

              <Dialog>
                <DialogTrigger>
                  <MessageCircle
                    size={24}
                    className="text-gray-500 cursor-pointer"
                  />
                </DialogTrigger>
                <DialogContent className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg">
                  
                  <DialogHeader>
                    {/* <DialogTitle className="text-white text-lg font-semibold">Title</DialogTitle> */}
                  </DialogHeader>
                  <div className="p-4 text-lg text-center text-green-400">
                    <p>No messages yet </p>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <Bell size={24} className="text-gray-600 cursor-pointer" />
                </DialogTrigger>
                <DialogContent className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-gray-900">Notifications</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="mb-4 p-3 bg-gray-100 rounded-lg">
                        <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                        <p className="text-sm text-gray-600">{notification.description}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>

              {isSignedIn && user ? (
                <div className="flex items-center space-x-4">
                  <div className="text-gray-700 font-semibold">
                    {user.fullName || "User"}
                  </div>
                  <UserButton />
                </div>
              ) : (
                <SignInButton mode="modal" />
              )}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="relative inline-block text-[#002F34] font-bold py-1 px-4 rounded-full bg-white">
                    <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-blue-500 to-lime-600 rounded-full p-[1px]"></span>
                    <span className="relative block bg-white rounded-full px-4 py-1 border-2 border-transparent">
                      + SELL
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Coming Soon</DialogTitle>
                  </DialogHeader>
                  <div className="p-4 text-center">
                    <p>The sell feature is coming soon. Stay tuned!</p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default OlxHeaderFinal;
