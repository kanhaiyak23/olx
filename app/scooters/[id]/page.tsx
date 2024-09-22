'use client'

import scooterDetails from '../../scooter_full_description.json'
import { Bell, Menu } from "lucide-react";
import { motion,AnimatePresence } from "framer-motion";
import Loader from '@/app/loading/page';
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
// import Image from 'next/image'
import Link from 'next/link'

import Footer from '../../footer/page'
import { Heart, Share2, ChevronLeft, ChevronRight, ArrowUp,X,MessageCircle } from 'lucide-react'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const relatedAds = [
  { id: 1, image: 'https://newspaperads.ads2publish.com/wp-content/uploads/2021/01/ampere-electric-scooters-discover-the-new-magnus-pro-ad-bangalore-times-17-01-2021.jpg', price: 50000, title: 'Scooter A', year: 2023 },
  { id: 2, image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/1f9982170849383.6464e319c92d8.png', price: 45000, title: 'Scooter B', year: 2022 },
]

const quickLinks = [
  'Latest Scooters',
  'Scooters Under 50k',
  'Top Rated Scooters',
]

export default function ScooterDetails() {
  const[isMenuOpen,setIsMenuOpen]= useState(false)
  const[isDialogOpen,setIsDialogOpen] = useState(false)
  const params = useParams(); // Get the ID from the URL params
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const id = params?.id;
  const [likedListings, setLikedListings] = useState<{ [key: string]: boolean }>({});
  
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

  const scooterDetail = scooterDetails.find((scooter) => scooter.id === id);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  
  if (!scooterDetail) {
    return <div>Scooter not found!</div>;
  }

  const handleImageChange = (direction: 'prev' | 'next') => {
    setCurrentImageIndex((prevIndex) =>
      direction === 'next'
        ? prevIndex === scooterDetail.images.length - 1 ? 0 : prevIndex + 1
        : prevIndex === 0 ? scooterDetail.images.length - 1 : prevIndex - 1
    );
  };

  const shareScooterDetails = async () => {
    const shareData = {
      title: scooterDetail.title,
      text: scooterDetail.description,
      url: window.location.href,
    };
  
    try {
      await navigator.share(shareData);
      console.log('Scooter details shared successfully!');
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/listing/scooter" className="text-2xl font-bold text-blue-600">Scooter</Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link href="/listing/scooter" className="text-gray-600 hover:text-blue-600">Categories</Link>
            {/* <Link href="/deals" className="text-gray-600 hover:text-blue-600">Deals</Link> */}
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
          </nav>
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <Link href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</Link>
            <Link href="/listing/scooter" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Categories</Link>
            
            
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-sm breadcrumbs mb-4">
          <ul className="flex space-x-2 text-gray-500">
            <li><Link href="/">Home</Link></li>
            <li>Scooters</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="relative mb-8">
              <img src={scooterDetail.images[currentImageIndex]} alt={scooterDetail.title} width={400} height={400} className="w-full h-auto rounded-lg" />
              <button onClick={() => handleImageChange('prev')} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button onClick={() => handleImageChange('next')} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                <ChevronRight className="h-6 w-6" />
              </button>
              <button className="absolute top-4 right-6 bg-white rounded-full p-2 shadow-md">
                <Share2 className="h-6 w-6" onClick={shareScooterDetails} />
              </button>
              <motion.button
                className="absolute top-4 right-24 p-2 bg-white rounded-full"
                onClick={() => toggleLike(scooterDetail.id)}
                whileTap={heartAnimation.animate}
                initial={heartAnimation.initial}
                transition={heartAnimation.transition}
              >
                <Heart className={`h-6 w-6 ${likedListings[scooterDetail.id] ? 'text-pink-500' : 'text-gray-500'}`} />
              </motion.button>
            </div>
            <div className="flex space-x-2 mb-4 overflow-x-auto">
              {scooterDetail.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  className={`w-20 h-20 object-cover rounded-md cursor-pointer ${index === currentImageIndex ? 'border-2 border-blue-500' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>

            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex space-x-2 mb-2">
                      {scooterDetail.features.map((feature, index) => (
                        <Badge key={index} variant={index === 0 ? "default" : "secondary"} className="text-xs">{feature}</Badge>
                      ))}
                    </div>
                    <h1 className="text-xl font-bold">{scooterDetail.title}</h1>
                    <p className="text-gray-500">{scooterDetail.subtitle}</p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">₹ {scooterDetail.price.toLocaleString('en-IN')}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-gray-700 font-semibold">Engine: <span className="font-normal">{scooterDetail.engine} cc</span></div>
                  <div className="text-gray-700 font-semibold">Mileage: <span className="font-normal">{scooterDetail.mileage} km/l</span></div>
                  <div className="text-gray-700 font-semibold">Year: <span className="font-normal">{scooterDetail.year}</span></div>
                </div>

                <p className="text-gray-700">{scooterDetail.description}</p>
                <div className="flex space-x-4">
                  {/* <Button className="flex-1 bg-green-500 text-white">Buy Now</Button> */}
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
                  <img src={ad.image} alt={ad.title} width={300} height={200} className="w-full h-auto rounded-t-lg" />
                  <CardContent className="p-4">
                    <p className="text-gray-700 font-semibold">{ad.title}</p>
                    <p className="text-sm text-gray-500">{ad.year}</p>
                    <p className="text-xl font-bold">₹ {ad.price.toLocaleString('en-IN')}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-2 text-gray-600">
                {quickLinks.map((link, index) => (
                  <li key={index}><Link href="#" className="hover:underline">{link}</Link></li>
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
                <h2 className="text-2xl font-bold">Chat Coming Soon!</h2>
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
  );
}
