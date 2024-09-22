"use client";

import houseDetails from "../../houses_description.json";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "@/app/loading/page";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Bell, Menu } from "lucide-react";

import Link from "next/link";

import Footer from "../../footer/page";
import {
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  MessageCircle,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const relatedAds = [
  {
    id: 1,
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dream-house-ads-design-template-914cf2a8bc013ed1e37e8cc3e0f09265_screen.jpg?ts=1650964341",
    price: 8000000,
    title: "Luxury Villa in Mumbai",
    year: 2021,
  },
  {
    id: 1,
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/modern-house-ads-design-template-a59529f7b250d3e4818373992dc088a9_screen.jpg?ts=1646298320",
    price: 1000000,
    title: "Luxury FLat in Jaipur",
    year: 2022,
  },
];

const quickLinks = [
  "Luxury Houses in Mumbai",
  "Houses for Sale in Andheri",
  "Modern Houses in Bandra",
  "Houses Priced Between 7 Crores and 8 Crores in Mumbai",
];

export default function HouseDetails() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const params = useParams(); // Get the ID from the URL params
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const id = params?.id;
  const [likedListings, setLikedListings] = useState<{
    [key: string]: boolean;
  }>({});
  const toggleLike = (listingId: string | number) => {
    setLikedListings((prev) => ({
      ...prev,
      [listingId]: !prev[listingId],
    }));
  };
  const heartAnimation = {
    initial: { scale: 1 },
    animate: { scale: 1.5 },
    transition: { duration: 0.2, ease: "easeInOut" },
  };

  const housedetail = houseDetails.find((house) => house.id === id);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (!housedetail) {
    return <div>House not found!</div>;
  }

  const handleImageChange = (direction: "prev" | "next") => {
    setCurrentImageIndex((prevIndex) =>
      direction === "next"
        ? prevIndex === housedetail.images.length - 1
          ? 0
          : prevIndex + 1
        : prevIndex === 0
        ? housedetail.images.length - 1
        : prevIndex - 1
    );
  };

  const shareHouseDetails = async () => {
    const shareData = {
      title: housedetail.title,
      text: housedetail.description,
      url: window.location.href,
    };

    try {
      await navigator.share(shareData);
      console.log("House details shared successfully!");
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto p-4"
    >
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link
              href="/listing/house_listing"
              className="text-2xl font-bold text-blue-600"
            >
              House{" "}
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
              <Link
                href="/listing/house_listing"
                className="text-gray-600 hover:text-blue-600"
              >
                Categories
              </Link>
              {/* <Link href="/deals" className="text-gray-600 hover:text-blue-600">Deals</Link> */}
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
            </nav>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Home
              </Link>
              <Link
                href="/listing/house_listing"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Categories
              </Link>
            </div>
          )}
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="text-sm breadcrumbs mb-4">
            <ul className="flex space-x-2 text-gray-500">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/listing/house_listing">House</Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="relative mb-8">
                <img
                  src={housedetail.images[currentImageIndex]}
                  alt={housedetail.title}
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
                  <Share2 className="h-6 w-6" onClick={shareHouseDetails} />
                </button>
                <motion.button
                  className="absolute top-4 right-24 p-2 bg-white rounded-full"
                  onClick={() => toggleLike(housedetail.id)}
                  whileTap={heartAnimation.animate}
                  initial={heartAnimation.initial}
                  transition={heartAnimation.transition}
                >
                  <Heart
                    className={`h-6 w-6 ${
                      likedListings[housedetail.id]
                        ? "text-pink-500"
                        : "text-gray-500"
                    }`}
                  />
                </motion.button>
              </div>
              <div className="flex space-x-2 mb-4 overflow-x-auto">
                {housedetail.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    width={80}
                    height={80}
                    className={`w-20 h-20 object-cover rounded-md cursor-pointer ${
                      index === currentImageIndex
                        ? "border-2 border-blue-500"
                        : ""
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex space-x-2 mb-2">
                        {housedetail.features.map((feature, index) => (
                          <Badge
                            key={index}
                            variant={index === 0 ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <h1 className="text-2xl font-bold">
                        {housedetail.title}
                      </h1>
                      <p className="text-gray-500">{housedetail.subtitle}</p>
                    </div>
                    <div>
                      <p className="text-xl font-semibold">
                        ₹ {housedetail.price.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-gray-700 font-semibold">
                      Bedrooms:{" "}
                      <span className="font-normal">
                        {housedetail.bedrooms}
                      </span>
                    </div>
                    <div className="text-gray-700 font-semibold">
                      Bathrooms:{" "}
                      <span className="font-normal">
                        {housedetail.bathrooms}
                      </span>
                    </div>
                    <div className="text-gray-700 font-semibold">
                      Area:{" "}
                      <span className="font-normal">
                        {housedetail.area} sq.ft
                      </span>
                    </div>
                    <div className="text-gray-700 font-semibold">
                      Location:{" "}
                      <span className="font-normal">
                        {housedetail.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700">{housedetail.description}</p>
                  <div className="flex space-x-4">
                    <Button className="flex-1 bg-green-500 text-white">
                      Schedule Visit
                    </Button>
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

            <div>
              <h2 className="text-xl font-semibold mb-4">Related Ads</h2>
              <div className="grid grid-cols-1 gap-4 mb-4">
                {relatedAds.map((ad) => (
                  <Card key={ad.id}>
                    <img
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
              <h2 className="text-xl font-semibold mb-4">Location</h2>

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

        <Link
          href="#"
          className="fixed bottom-8 right-8 bg-blue-500 text-white p-2 rounded-full"
        >
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
                  <h2 className="text-2xl font-bold">Chat Coming Soon!</h2>
                  <button
                    onClick={() => setIsDialogOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <p className="text-gray-600 mb-4">
                  We are excited to announce that our chat feature is currently
                  under development and will be available soon. Stay tuned for
                  updates!
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
      
    </motion.div>
  );
}
