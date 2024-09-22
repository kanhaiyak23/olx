'use client'
import mobileDetails from '../../mobile_full_description.json'


import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion,AnimatePresence } from "framer-motion"
import { Heart, Share2, ChevronLeft, ChevronRight, ArrowUp, Bell, Menu,X,MessageCircle } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Loader from '@/app/loading/page'



const relatedAds = [
  { id: 1, image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4963c483304265.5d38bc944b9e8.jpg', price: 70000, title: 'Mobile A', year: 2023 },
  { id: 2, image: 'https://mir-s3-cdn-cf.behance.net/projects/404/a1a381181962681.Y3JvcCwxODAwLDE0MDgsMCww.jpg', price: 60000, title: 'Mobile B', year: 2022 },
]

const quickLinks = [
  'Latest Mobile Phones',
  'Mobile Phones Under 50k',
  'Top Rated Mobile Phones',
]

export default function MobileDetails() {
  const params = useParams()
  const[isDialogOpen,setIsDialogOpen]= useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const id = params?.id;
  const [likedListings, setLikedListings] = useState<{ [key: string]: boolean }>({})
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleLike = (listingId: string | number) => {
    setLikedListings((prev) => ({
      ...prev,
      [listingId]: !prev[listingId],
    }))
  }

  const heartAnimation = {
    initial: { scale: 1 },
    animate: { scale: 1.5 },
    transition: { duration: 0.2, ease: "easeInOut" },
  }

  const mobileDetail = mobileDetails.find((mobile) => mobile.id === id)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  if (!mobileDetail) {
    return <div>Mobile not found!</div>
  }

  const handleImageChange = (direction: 'prev' | 'next') => {
    setCurrentImageIndex((prevIndex) =>
      direction === 'next'
        ? prevIndex === mobileDetail.images.length - 1 ? 0 : prevIndex + 1
        : prevIndex === 0 ? mobileDetail.images.length - 1 : prevIndex - 1
    )
  }

  const shareMobileDetails = async () => {
    const shareData = {
      title: mobileDetail.title,
      text: mobileDetail.description,
      url: window.location.href,
    }
  
    try {
      await navigator.share(shareData)
      console.log('Mobile details shared successfully!')
    } catch (error) {
      console.error('Error sharing:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/listing/mobile_listing" className="text-2xl font-bold text-blue-600">Mobile</Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link href="/listing/mobile_listing" className="text-gray-600 hover:text-blue-600">Categories</Link>
            
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
            <Link href="/listing/mobile_listing" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Categories</Link>
            
            
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-sm breadcrumbs mb-4">
          <ul className="flex space-x-2 text-gray-500">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/listing/mobile_listing">Mobiles</Link></li>
            <li>{mobileDetail.title}</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative mb-4 bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={mobileDetail.images[currentImageIndex]} 
                alt={mobileDetail.title} 
                width={600} 
                height={400} 
                className="w-full h-[800px] object-cover"
              />
              <button onClick={() => handleImageChange('prev')} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button onClick={() => handleImageChange('next')} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                <ChevronRight className="h-6 w-6" />
              </button>
              <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md" onClick={shareMobileDetails}>
                <Share2 className="h-6 w-6" />
              </button>
              <motion.button
                className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-md"
                onClick={() => toggleLike(mobileDetail.id)}
                whileTap={heartAnimation.animate}
                initial={heartAnimation.initial}
                transition={heartAnimation.transition}
              >
                <Heart className={`h-6 w-6 ${likedListings[mobileDetail.id] ? 'text-pink-500' : 'text-gray-500'}`} />
              </motion.button>
            </div>

            <div className="flex space-x-2 mb-4 overflow-x-auto">
              {mobileDetail.images.map((image, index) => (
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
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {mobileDetail.features.map((feature, index) => (
                        <Badge key={index} variant={index === 0 ? "default" : "secondary"} className="text-xs">{feature}</Badge>
                      ))}
                    </div>
                    <h1 className="text-2xl font-bold mb-1">{mobileDetail.title}</h1>
                    <p className="text-gray-500">{mobileDetail.subtitle}</p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <p className="text-2xl font-semibold">₹ {mobileDetail.price.toLocaleString('en-IN')}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="text-gray-700 font-semibold">RAM: <span className="font-normal">{mobileDetail.ram} GB</span></div>
                  <div className="text-gray-700 font-semibold">Storage: <span className="font-normal">{mobileDetail.storage} GB</span></div>
                  <div className="text-gray-700 font-semibold">Camera: <span className="font-normal">{mobileDetail.camera} MP</span></div>
                  <div className="text-gray-700 font-semibold">Battery: <span className="font-normal">{mobileDetail.battery} mAh</span></div>
                </div>

                <p className="text-gray-700 mb-6">{mobileDetail.description}</p>
                <div className="flex flex-col  sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 ">
                  {/* <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white">Buy Now</Button> */}
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

          <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold mb-4">Related Ads</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mb-8">
              {relatedAds.map((ad) => (
                <Card key={ad.id}>
                  <div className="relative h-40 w-full">
                    <Image
                      src={ad.image} 
                      alt={ad.title} 
                      layout="fill" 
                      objectFit="cover" 
                      className="rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-gray-700 font-semibold">{ad.title}</p>
                    <p className="text-sm text-gray-500">{ad.year}</p>
                    <p className="text-xl font-bold">₹ {ad.price.toLocaleString('en-IN')}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mb-8">
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

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm">MobileStore is your one-stop shop for all mobile needs. We offer a wide range of smartphones and accessories.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-white hover:text-blue-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-blue-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-blue-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-sm text-center">
            <p>&copy; 2023 MobileStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-5 right-5">
        <button className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full">
          <ArrowUp className="h-5 w-5 text-gray-600" />
        </button>
      </div>

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
  )
}