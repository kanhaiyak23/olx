"use client";
import { useState } from "react";
import {
  ChevronDown,
  Search,
  MessageCircle,
  Bell,
  CrossIcon,
} from "lucide-react";
import { useAuth, UserButton, useUser, SignInButton } from "@clerk/nextjs";


import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  sampleListings,
  sampleListing,
  CarListing,
  MotorcycleListing,
  scooter,
  commercial,
  mobile,
  MobilePhoneListing,
  scooterListing,
  CommercialVehicleListing,
  RealEstateListing,
} from "../data/alldata";
// Import your components for each category
import CarsListinggs from "../listing/car_listing/Audi";
import Motorcycles from "../listing/motorcycles/page";
import MobileListing from "../listing/mobile_listing/page";
import ScooterListing from "../listing/scooter/page";
import RealEstateListings from "../listing/house_listing/page";
import CommercialVehicles from "../listing/commerical_vehicle/page";
import RentHouses from "../listing/commerical_vehicle/page";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function OlxHeaderFinal() {
  // const [showNoMessages, setShowNoMessages] = useState(false);
  // const [showNoNotifications, setShowNoNotifications] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(""); // State to hold the selected category
  const { isSignedIn } = useAuth();
  // const [successMessage, setSuccessMessage] = useState("");
  const { user } = useUser();
 


  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    const translateDropdown = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement;

    if (translateDropdown) {
      translateDropdown.value = selectedLang;
      translateDropdown.dispatchEvent(new Event("change")); // Trigger language change
    } else {
      console.error("Google Translate dropdown not found.");
    }
  };


  const [searchQuery, setSearchQuery] = useState("");

  
  
  



    

   


  return (
    <div>
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-4">
              <svg className="w-10 h-10" viewBox="0 0 1024 1024" fill="none">
                <path d="M0 0H1024V1024H0V0Z" fill="#002F34" />
                <path
                  d="M660 330H363C345.33 330 331 344.33 331 362V659C331 676.67 345.33 691 363 691H660C677.67 691 692 676.67 692 659V362C692 344.33 677.67 330 660 330Z"
                  fill="white"
                />
              </svg>
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
              <select
                className="appearance-none bg-transparent text-gray-700 font-semibold focus:outline-none"
                onChange={handleLanguageChange}
              >
                <option value="en">ENGLISH</option>
                <option value="hi">Hindi</option>
              </select>

              <Dialog>
                <DialogTrigger>
                  <MessageCircle
                    size={24}
                    className="text-gray-500 cursor-pointer"
                  />
                </DialogTrigger>
                <DialogContent className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg">
                  <button className="absolute top-3 right-3 text-white hover:text-red-500">
                    {/* Assuming this is the close button */}
                  </button>
                  <DialogHeader>
                    {/* <DialogTitle className="text-white text-lg font-semibold">Title</DialogTitle> */}
                  </DialogHeader>
                  <div className="p-4 text-lg text-center text-green-400">
                    <p>No messages yet</p>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <Bell size={24} className="text-gray-600 cursor-pointer" />
                </DialogTrigger>
                <DialogContent className="bg-gradient-to-r from-blue-500  to-pink-500 p-6 rounded-lg shadow-lg">
                  <DialogHeader>
                    <DialogTitle>Notifications</DialogTitle>
                  </DialogHeader>
                  <div className="p-4 text-center">
                    <p>No notifications at the moment.</p>
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
