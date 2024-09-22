'use client'

import motorcycleDetails from '../../motorcycle_full_description.json'

import { useState } from 'react'
import { motion,AnimatePresence } from "framer-motion";
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import Footer from '../../footer/page'
import { Heart, Share2, ChevronLeft, ChevronRight,Bell,Menu,MessageCircle,X,ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// Sample related ads and quick links
const relatedAds = [
  { id: 1, image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/45481/shine-right-side-view.jpeg?isig=0', price: 525000, title: 'Honda CB Shine', year: 2019 },
  // Add more related ads as needed
];

const quickLinks = [
  'Used Bajaj Bikes in Pune',
  'Used Royal Enfield Bikes in Mumbai',
  'Used Yamaha Bikes in Delhi',
  'Used TVS Bikes in Chennai',
  // Add more quick links as needed
];

export default function MotorcycleDetails() {
  const[isDialogOpen,setIsDialogOpen] = useState(false);
  const[isheader,setHeader]=useState(false);
  const params = useParams(); // Get the ID from the URL params
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const id = params?.id;

  // Find the motorcycle details based on the ID from the JSON dataset
  const motorcycleDetail = motorcycleDetails.find((bike) => bike.id === id);

  if (!motorcycleDetail) {
    return <div>Motorcycle not found!</div>;  // Handle the case where the motorcycle is not found
  }

  const handleImageChange = (direction: 'prev' | 'next') => {
    setCurrentImageIndex((prevIndex) =>
      direction === 'next'
        ? prevIndex === motorcycleDetail.images.length - 1 ? 0 : prevIndex + 1
        : prevIndex === 0 ? motorcycleDetail.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/listing/motorcycles" className="text-2xl font-bold text-blue-600">Motorcycles</Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link href="/listing/motorcycles" className="text-gray-600 hover:text-blue-600">Categories</Link>
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
            <Link href="/listing/motorcycles" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Categories</Link>
            
            
          </div>
        )}
      </header>


      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="text-sm breadcrumbs mb-4">
          <ul className="flex space-x-2 text-gray-500">
            <li><Link href="/">Home</Link></li>
            <li>Motorcycles</li>
          </ul>
        </div>

        {/* Motorcycle Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="relative mb-8">
              <Image src={motorcycleDetail.images[currentImageIndex]} alt={motorcycleDetail.title} width={600} height={400} className="w-full h-auto rounded-lg" />
              <button onClick={() => handleImageChange('prev')} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button onClick={() => handleImageChange('next')} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                <ChevronRight className="h-6 w-6" />
              </button>
              <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                <Share2 className="h-6 w-6" />
              </button>
              <button className="absolute top-4 right-16 bg-white rounded-full p-2 shadow-md">
                <Heart className="h-6 w-6" />
              </button>
            </div>
            <div className="flex space-x-2 mb-4 overflow-x-auto">
              {motorcycleDetail.images.map((image, index) => (
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

            {/* Motorcycle Description */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex space-x-2 mb-2">
                      {motorcycleDetail.features.map((feature, index) => (
                        <Badge key={index} variant={index === 0 ? "default" : "secondary"} className="text-xs">{feature}</Badge>
                      ))}
                    </div>
                    <h1 className="text-2xl font-bold">{motorcycleDetail.title}</h1>
                    <p className="text-gray-500">{motorcycleDetail.subtitle} - {motorcycleDetail.fuelType}</p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">₹ {motorcycleDetail.price.toLocaleString('en-IN')}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-gray-700 font-semibold">Mileage: <span className="font-normal">{motorcycleDetail.mileage} KM</span></div>
                  <div className="text-gray-700 font-semibold">Location: <span className="font-normal">{motorcycleDetail.location}</span></div>
                  <div className="text-gray-700 font-semibold">Owner: <span className="font-normal">{motorcycleDetail.owner}</span></div>
                </div>

                <p className="text-gray-700">{motorcycleDetail.description}</p>
                <div className="flex space-x-4 pt-3">
                  {/* <Button className="flex-1 bg-green-500 text-white">
                    Buy Now
                  </Button> */}
                  <motion.button
                      className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md font-semibold flex items-center justify-center"
                      onClick={() => setIsDialogOpen(true)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageCircle className="mr-2" /> Contact seller
                    </motion.button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Related Ads */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Related Ads</h2>
            <div className="grid grid-cols-1 gap-4">
              {relatedAds.map((ad) => (
                <Card key={ad.id}>
                  <Image src={ad.image} alt={ad.title} width={300} height={200} className="w-full h-auto rounded-t-lg" />
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

      <Footer/>
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
