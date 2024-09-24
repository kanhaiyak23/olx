"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ChevronDown,
  Search,
  MessageCircle,
  Bell,
  Menu,
  X,
} from "lucide-react";
import { useAuth, UserButton, useUser, SignInButton } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Import your components for each category
import CarsListinggs from "../listing/car_listing/Audi";
import Motorcycles from "../listing/motorcycles/page";
import MobileListing from "../listing/mobile_listing/page";
import ScooterListing from "../listing/scooter/page";
import RealEstateListings from "../listing/house_listing/page";
import CommercialVehicles from "../listing/commerical_vehicle/page";
import RentHouses from "../listing/commerical_vehicle/page";

// Import your sample data
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

function OlxHeaderImproved() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const [likedListings, setLikedListings] = useState<{
    [key: string]: boolean;
  }>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  const toggleLike = (listingId: string | number) => {
    setLikedListings((prev) => ({
      ...prev,
      [listingId]: !prev[listingId],
    }));
  };
  // const router = useRouter();
  // const handleClick=()=>{
  //   router.push('/sell');
  // }
  const categories = [
    { name: "ALL CATEGORIES", value: "" },
    { name: "Cars", value: "Cars" },
    { name: "Motorcycles", value: "Motorcycles" },
    { name: "Mobile Phones", value: "Mobile Phones" },
    { name: "For Sale: Houses & Apartments", value: "Houses" },
    { name: "Scooters", value: "Scooters" },
    { name: "Commercial & Other Vehicles", value: "Commercial Vehicles" },
  ];

  const renderContent = () => (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {(() => {
          switch (selectedCategory) {
            case "Cars":
              return <CarsListinggs />;
            case "Motorcycles":
              return <Motorcycles />;
            case "Mobile Phones":
              return <MobileListing />;
            case "Houses":
              return <RealEstateListings />;
            case "Scooters":
              return <ScooterListing />;
            case "Commercial Vehicles":
              return <CommercialVehicles />;
            case "Rent Houses":
              return <RentHouses />;
            case "":
              return (
                <div>
                  <CarsListinggs />
                  <Motorcycles />
                  <MobileListing />
                  <RealEstateListings />
                  <ScooterListing />
                  <CommercialVehicles />
                  <RentHouses />
                </div>
              );
            default:
              return <div>No item found</div>;
          }
        })()}
      </motion.div>
    </AnimatePresence>
  );

  const combinedListings: (
    | CarListing
    | MotorcycleListing
    | scooterListing
    | MobilePhoneListing
    | MotorcycleListing
    | RealEstateListing
    | CommercialVehicleListing
  )[] = [
    ...sampleListings,
    ...sampleListing,
    ...scooter,
    ...commercial,
    ...mobile,
    ...commercial,
  ];

  const filteredListings = combinedListings
    .map((listing) => {
      const queryLowerCase = searchQuery.toLowerCase();

      if (!listing.model) return null; // Skip if model doesn't exist

      const modelLowerCase = listing.model.toLowerCase();

      let score = 0;

      if (modelLowerCase === queryLowerCase) {
        score = 3; // Exact match
      } else if (modelLowerCase.startsWith(queryLowerCase)) {
        score = 2; // Starts with query
      } else if (modelLowerCase.includes(queryLowerCase)) {
        score = 1; // Contains query
      }

      return { ...listing, score };
    })
    .filter((listing) => listing !== null) // Remove listings with null values
    .sort((a, b) => b.score - a.score); // Sort by highest score first

  // Find the highest score
  const highestScore =
    filteredListings.length > 0 ? filteredListings[0].score : 0;

  // Filter only listings with the highest score
  const mostAccurateListings = filteredListings.filter(
    (listing) => listing.score === highestScore
  );

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
  ];

  return (
    <div>
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 ">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center mr-2 lg:space-x-4">
              <Image src="/logo.png" alt="logo" width={50} height={50} />
            </div>

            <div className="hidden md:flex flex-grow mx-4">
              <div className="relative w-full">
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

            <div className="flex items-center w-[85%] md:w-[35%] justify-between lg:space-x-6">
              <Dialog>
                <DialogTrigger>
                  <MessageCircle
                    size={24}
                    className="text-gray-500 cursor-pointer"
                  />
                </DialogTrigger>
                <DialogContent className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-gray-900">
                      Messages
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-4 text-center">
                    <div className="animate-pulse flex flex-col items-center">
                      <div className="rounded-full bg-slate-200 h-16 w-16 mb-4"></div>
                      <div className="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                    </div>
                    <p className="mt-4 text-gray-600">Work in progress...</p>
                    <p className="text-sm text-gray-500">
                      We are currently developing this feature. Check back soon!
                    </p>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <Bell size={24} className="text-gray-600 cursor-pointer" />
                </DialogTrigger>
                <DialogContent className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-gray-900">
                      Notifications
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="mb-4 p-3 bg-gray-100 rounded-lg"
                      >
                        <h3 className="font-semibold text-gray-900">
                          {notification.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {notification.description}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {notification.time}
                        </p>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>

              {isSignedIn && user ? (
                <div className="flex items-center text-sm lg:space-x-4">
                  <div className="text-gray-700 mx-2 font-semibold">
                    {user.fullName || "User"}
                  </div>
                  <UserButton />
                </div>
              ) : (
                <div className="flex justify-center">
                  <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <SignInButton mode="modal" />
                  </div>
                </div>
              )}

              <Link href="/sell">
                <span className="relative inline-block text-[#002F34] font-bold py-1 px-2 md:py-1 md:px-4 rounded-full bg-white">
  <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-blue-500 to-lime-600 rounded-full p-[1px]"></span>
  <span className="relative block bg-white rounded-full px-1 text-sm md:text-lg py-1 md:px-4 md:py-1 border-2 border-transparent">
    + SELL
  </span>
</span>

              </Link>
            </div>
          </div>
        </div>
{/* search bar */}
        <div className="md:hidden flex justify-between items-center py-2 px-4 bg-gray-100">
          <Input
            type="text"
            placeholder="Search..."
            className="w-full mr-2 border-2 border-gray-300 rounded-sm py-2 px-4 focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button className="bg-[#002F34] text-white px-4 rounded-sm">
            <Search size={20} />
          </Button>
        </div>

        <nav className="bg-gray-100 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="hidden md:flex items-center space-x-16 py-2 text-sm text-gray-700 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.value}
                  className={`whitespace-nowrap cursor-pointer transition-colors duration-300 ${
                    selectedCategory === category.value
                      ? "font-bold text-blue-600 border-b-2 border-blue-600"
                      : "hover:text-blue-600"
                  }`}
                  onClick={() => setSelectedCategory(category.value)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="md:hidden flex justify-between items-center py-2">
              <div className="relative">
                <Button
                  variant="outline"
                  onClick={() =>
                    setIsCategoryDropdownOpen(!isCategoryDropdownOpen)
                  }
                  className="flex items-center justify-between w-48"
                >
                  {selectedCategory || "All Categories"}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
                {isCategoryDropdownOpen && (
                  <div className="absolute z-10 w-48 py-2 mt-1 bg-white rounded-md shadow-xl">
                    {categories.map((category) => (
                      <button
                        key={category.value}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        onClick={() => {
                          setSelectedCategory(category.value);
                          setIsCategoryDropdownOpen(false);
                        }}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <Button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white w-64 h-full overflow-y-auto">
            <div className="p-4">
              <Button className="mb-4" onClick={() => setIsMenuOpen(false)}>
                <X size={24} />
              </Button>
              {categories.map((category) => (
                <button
                  key={category.value}
                  className="block w-full text-left py-2 px-4 hover:bg-gray-100"
                  onClick={() => {
                    setSelectedCategory(category.value);
                    setIsMenuOpen(false);
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="container mx-auto px-4 py-6">
        {searchQuery && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">
              Search Results for {searchQuery}:
            </h2>
            {mostAccurateListings.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-2 w-full">
                {mostAccurateListings.map((listing) => (
                  <Card key={listing.id} className="overflow-hidden">
                    <CardHeader className="p-0 relative">
                      <img
                        src={listing.image}
                        className="w-full h-48 object-cover"
                      />
                      <motion.button
                        className="absolute top-2 right-2 p-1 bg-white rounded-full"
                        onClick={() => toggleLike(listing.id)}
                        whileTap={{ scale: 1.3 }}
                      >
                        <Heart
                          className={`h-6 w-6 ${
                            likedListings[listing.id]
                              ? "text-pink-500"
                              : "text-gray-500"
                          }`}
                        />
                      </motion.button>
                      {listing.isFeatured && (
                        <Badge
                          className="absolute top-2 left-2"
                          variant="secondary"
                        >
                          FEATURED
                        </Badge>
                      )}
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h2 className="text-2xl font-bold">
                          ₹ {listing.price.toLocaleString()}
                        </h2>
                        <Badge variant="outline" className="text-xs">
                          {/* Add any additional badge content here */}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {listing.model}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {listing.location}
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between items-center">
                      <p className="text-sm text-gray-500">{listing.date}</p>
                      <div className="flex items-center space-x-2">
                        {listing.features.map((feature, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                        {listing.features.length > 1 && (
                          <Badge
                            variant="secondary"
                            className="text-xs cursor-pointer"
                          >
                            +{listing.features.length - 1}
                          </Badge>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <p>No listings found for {searchQuery}.</p>
            )}
          </div>
        )}

        {renderContent()}
      </main>
    </div>
  );
}

export default OlxHeaderImproved;
