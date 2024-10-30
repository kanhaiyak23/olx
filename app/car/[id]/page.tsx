"use client";

import carDetailsf from "../../car_full_description.json";
import { motion,AnimatePresence } from "framer-motion";
import Loader from "@/app/loading/page";
import { useEffect } from "react";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Footer from "../../footer/page";
import {
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  ArrowUp,X,MessageCircle,Bell,Menu

} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";


const relatedAds = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/originals/7f/25/92/7f25923d54da53ec4efbf69260c6cd2c.jpg",
    price: 525000,
    title: "Honda City V MT Exclusive Edition",
    year: 2017,
  },
];

const quickLinks = [
  "Used Honda Cars in Mumbai",
  "Used City Cars in Mumbai",
  "Used Petrol Cars in Mumbai",
  "Used Automatic Cars in Mumbai",
  "Used Cars in Charni Road in Mumbai",
  "Used Cars Priced Between 7 Lakhs and 8 Lakhs in Mumbai",
];

export default function CarDetails() {
  const params = useParams(); // Get the ID from the URL params
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const[isDialogOpen,setIsDialogOpen]= useState(false)
  const[isheader,setHeader] = useState(false);
  const [loading, setLoading] = useState(true);
  const id = params?.id;
  const [likedListings, setLikedListings] = useState<{
    [key: string]: boolean;
  }>({});
  const toggleLike = (listingId: string | number) => {
    setLikedListings((prev) => ({
      ...prev, // Preserve previous liked listings
      [listingId]: !prev[listingId], // Toggle the liked state for the clicked listing
    }));
  };
  const heartAnimation = {
    initial: { scale: 1 },
    animate: { scale: 1.5 },
    transition: { duration: 0.2, ease: "easeInOut" },
  };

  // Find the car details based on the ID from the JSON dataset
  const cardetail = carDetailsf.find((car) => car.id === id);
  useEffect(() => {
    // Simulate loading delay (remove if data is loaded immediately)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1-second delay for demonstration

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (loading) {
    return <Loader />; // Show loader while loading
  }
  if (!cardetail) {
    return <div>Car not found!</div>; // Handle the case where the car is not found
  }

  const handleImageChange = (direction: "prev" | "next") => {
    setCurrentImageIndex((prevIndex) =>
      direction === "next"
        ? prevIndex === cardetail.images.length - 1
          ? 0
          : prevIndex + 1
        : prevIndex === 0
        ? cardetail.images.length - 1
        : prevIndex - 1
    );
  };

  //share functionality
  const shareCarDetails = async () => {
    const shareData = {
      title: cardetail.title,
      text: cardetail.description,
      url: window.location.href, // Get the current URL
    };

    try {
      await navigator.share(shareData);
      console.log("Car details shared successfully!");
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };
  

  return (
    // <LoadScript googleMapsApiKey="AIzaSyDLiLsxcSQKTP8j-_UG18cciAHVGGHT4LA">
    <div className="min-h-screen bg-gray-100">
      {/* header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/listing/car_listing" className="text-2xl font-bold text-blue-600">Car</Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link href="/listing/car_listing" className="text-gray-600 hover:text-blue-600">Categories</Link>
            {/* <Link href="/deals" className="text-gray-600 hover:text-blue-600">Deals</Link> */}
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
          </nav>
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() =>setHeader(!setHeader)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        {isheader && (
          <div className="md:hidden bg-white border-t">
            <Link href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</Link>
            <Link href="/listing/car_listing" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Categories</Link>
            
            
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="text-sm breadcrumbs mb-4">
          <ul className="flex space-x-2 text-gray-500">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Cars</li>
          </ul>
        </div>

        {/* Car image Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="relative mb-8">
              <Image
                src={cardetail.images[currentImageIndex]}
                alt={cardetail.title}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => handleImageChange("prev")}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => handleImageChange("next")}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <button className="absolute top-4 right-6 bg-white rounded-full p-2 shadow-md">
                <Share2 className="h-6 w-6" onClick={shareCarDetails} />
              </button>
              <motion.button
                className="absolute top-4 right-24 p-2 bg-white rounded-full"
                onClick={() => toggleLike(cardetail.id)}
                whileTap={heartAnimation.animate} // Animation when tapped
                initial={heartAnimation.initial}
                transition={heartAnimation.transition}
              >
                <Heart
                  className={`h-6 w-6 ${
                    likedListings[cardetail.id]
                      ? "text-pink-500"
                      : "text-gray-500"
                  }`}
                />
              </motion.button>
            </div>

            {/* Car Description */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex space-x-2 mb-2">
                      {cardetail.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant={index === 0 ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <h1 className="text-2xl font-bold">{cardetail.title}</h1>
                    <p className="text-gray-500">{cardetail.subtitle}</p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">
                      ₹ {cardetail.price.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-gray-700 font-semibold">
                    Fuel Type:{" "}
                    <span className="font-normal">{cardetail.fuelType}</span>
                  </div>
                  <div className="text-gray-700 font-semibold">
                    Mileage:{" "}
                    <span className="font-normal">{cardetail.mileage} KM</span>
                  </div>
                  <div className="text-gray-700 font-semibold">
                    Transmission:{" "}
                    <span className="font-normal">
                      {cardetail.transmission}
                    </span>
                  </div>
                  <div className="text-gray-700 font-semibold">
                    Owner:{" "}
                    <span className="font-normal">{cardetail.owner}</span>
                  </div>
                </div>

                <p className="text-gray-700">{cardetail.description}</p>
                <div className="flex space-x-4">
              <motion.button
                      className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md font-semibold flex items-center justify-center"
                      onClick={() => setIsDialogOpen(true)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageCircle className="mr-2" /> Chat
                    </motion.button>
            </div>
              </CardContent>
            </Card>
          </div>

          {/* Related Ads */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Related Ads</h2>
            <div className="grid grid-cols-1 gap-4 mb-4">
              {relatedAds.map((ad) => (
                <Card key={ad.id}>
                  <Image
                    src={ad.image}
                    alt={ad.title}
                    width={300}
                    height={200}
                    className="w-full h-auto rounded-t-lg"
                  />
                  <CardContent className="p-4">
                    <p className="text-gray-700 font-semibold">{ad.title}</p>
                    <p className="text-sm text-gray-500">{ad.year}</p>
                    <p className="text-xl font-bold">
                      ₹ {ad.price.toLocaleString("en-IN")}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-2 text-gray-600">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link href="#" className="hover:underline">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <Link href="#" className="fixed bottom-8 right-8 bg-blue-500 text-white p-2 rounded-full">
        <ArrowUp className="h-6 w-6" />
      </Link>
      <AnimatePresence>
        {isDialogOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 w-full max-w-md"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Chat C
                  oming Soon!</h2>
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <p className="text-gray-600 mb-4">
                We are excited to announce that our chat feature is currently under development and will be available soon. Stay tuned for updates!
              </p>
              <div className="flex justify-center">
                <motion.button
                  className="bg-blue-500 text-white py-2 px-4 rounded-md font-semibold"
                  onClick={() => setIsDialogOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Got it!
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    // </LoadScript>
  );
}
