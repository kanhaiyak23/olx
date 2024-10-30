'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarIcon, CarIcon, FuelIcon, MapPinIcon, PhoneIcon, UserIcon, MessageCircle } from "lucide-react"
import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import ChatComponent from '../chat/page'
import { useUser } from "@clerk/nextjs"



// import SellerMessages from '../seller/page'
interface Listing {
  id: string
  adTitle: string
  category: string
  brand: string
  year: string
  fuel: string
  transmission: string
  kmDriven: string
  owners: string
  description: string
  price: string
  state: string
  name: string
  phone: string
  createdAt: string
  images: string[]
  sellerPhoto: string
  sellerId: string
  
}


export default function ShowListings() {
  const [listings, setListings] = useState<Listing[]>([])
  const{user}= useUser()
  // const userID = user ? user.id : "";
  
    
    
  useEffect(() => {
    const fetchListings = async () => {
      const querySnapshot = await getDocs(collection(db, "listings"))
      const fetchedListings: Listing[] = []
      querySnapshot.forEach((doc) => {
        fetchedListings.push({ id: doc.id, ...doc.data() } as Listing)
      })
      setListings(fetchedListings)
      
    }

    fetchListings()
  }, [])

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-8 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">Saved Listings</h1>

      {listings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="relative">
                <CardTitle className="text-2xl font-bold text-purple-600 truncate">{listing.adTitle}</CardTitle>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{new Date(listing.createdAt).toLocaleDateString()}</span>
                  <span>{listing.sellerId}</span>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Carousel className="w-full">
                  <CarouselContent>
                    {listing.images.map((imageUrl, idx) => (
                      <CarouselItem key={idx}>
                        <img src={imageUrl} alt={`Listing image ${idx + 1}`} className="w-full h-48 object-cover" />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <div className="p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">{listing.category}</Badge>
                    <span className="text-2xl font-bold text-green-600">₹{listing.price}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center space-x-1">
                      <CarIcon className="w-4 h-4 text-gray-500" />
                      <span>{listing.brand} ({listing.year})</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FuelIcon className="w-4 h-4 text-gray-500" />
                      <span>{listing.fuel}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <UserIcon className="w-4 h-4 text-gray-500" />
                      <span>{listing.owners} owner(s)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPinIcon className="w-4 h-4 text-gray-500" />
                      <span>{listing.state}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{listing.description}</p>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage src={listing.sellerPhoto} alt={listing.name} />
                    <AvatarFallback>{listing.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{listing.name}</p>
                    <p className="text-sm text-gray-500">{listing.phone}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <PhoneIcon className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                  {user && user.id !== listing.sellerId && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Chat
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Chat with Seller</DialogTitle>
                        </DialogHeader>
                        
                        <ChatComponent listingId={listing.id} sellerId={listing.sellerId} />
                      </DialogContent>
                    </Dialog>
                    
                  )}
                  {user && (
          <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat with Buyer 
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>View Your message</DialogTitle>
            </DialogHeader>
            <ChatComponent listingId={listing.id} sellerId={listing.sellerId} />
          </DialogContent>
        </Dialog>
        
        )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-8 text-center">
          <p className="text-xl text-gray-600">No listings saved yet.</p>
          
        </Card>
      )}
    </div>
  )
}