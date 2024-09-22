'use client'

import { useState } from 'react'

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from 'next/link'
import { motion } from 'framer-motion'


interface CarListing {
  id: string
  image: string
  price: number
  year: number
  mileage: number
  model: string
  location: string
  date: string
  features: string[]
  isFeatured: boolean
  coordinates: {
    lat: number
    lng: number
  }
}

interface CarListingsProps {
  listings?: CarListing[]
  searchTerm?: string
  totalAds?: number
}

const sampleListings: CarListing[] = [
  {
    id: '1',
    image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/City/9710/1677914238296/front-left-side-47.jpg',
    price: 585000,
    year: 2014,
    mileage: 82000,
    model: 'Honda City',
    location: 'Wanowrie',
    date: 'Aug 16',
    features: ['WARRANTY', 'ROADSIDE ASSISTANCE'],
    isFeatured: true,
    coordinates: { lat: 18.4969, lng: 73.8961 }
  },
  {
    id: '2',
    image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/51502/honda-city-4th-generation-left-front-three-quarter3.jpeg',
    price: 250000,
    year: 2010,
    mileage: 80000,
    model: 'Maruti Swift',
    location: 'Airoli',
    date: 'Aug 30',
    features: ['WARRANTY'],
    isFeatured: true,
    coordinates: { lat: 19.1590, lng: 73.0146 }
  },
  {
    id: '3',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/41564/hyundai-creta-right-front-three-quarter9.jpeg?q=80',
    price: 345000,
    year: 2012,
    mileage: 70000,
    model: 'Hyundai Creta',
    location: 'Chembur',
    date: 'Aug 26',
    features: ['VERIFIED SELLER'],
    isFeatured: true,
    coordinates: { lat: 19.0522, lng: 72.8994 }
  },
  {
    id: '4',
    image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/150603/i20-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80',
    price: 169000,
    year: 2010,
    mileage: 93000,
    model: 'Toyota Fortuner',
    location: 'Taloja',
    date: 'Today',
    features: [],
    isFeatured: false,
    coordinates: { lat: 19.0856, lng: 73.1310 }
  },
  {
    id: '5',
    image: 'https://mediapool.bmwgroup.com/cache/P9/202309/P90522951/P90522951-the-bmw-i5-edrive40-driving-10-2023-2247px.jpg',
    price: 120000,
    year: 2004,
    mileage: 196000,
    model: 'BMW 3',
    location: 'Airoli',
    date: 'Today',
    features: [],
    isFeatured: false,
    coordinates: { lat: 19.1590, lng: 73.0146 }
  },
  {
    id: '6',
    image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Curvv/9578/1723033064164/front-left-side-47.jpg',
    price: 610000,
    year: 2016,
    mileage: 68000,
    model: 'Honda Jazz',
    location: 'Karmayogi Nagar',
    date: 'Today',
    features: [],
    isFeatured: true,
    coordinates: { lat: 19.0330, lng: 73.0297 }
  }
]



function CarListings({ listings = sampleListings, searchTerm = "Car", totalAds = 3645 }: CarListingsProps) {
  const [sortOrder, setSortOrder] = useState<string>('default')

  const sortListings = (listings: CarListing[]) => {
    if (sortOrder === 'low-to-high') {
      return [...listings].sort((a, b) => a.price - b.price)
    } else if (sortOrder === 'high-to-low') {
      return [...listings].sort((a, b) => b.price - a.price)
    }
    return listings
  }

  const sortedListings = sortListings(listings)

  return (
    
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="container mx-auto p-4"
      >
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold"> {searchTerm}</h1>
            <Badge variant="secondary" className="text-lg">{totalAds} Ads</Badge>
          </div>
          <div className="flex justify-end mb-4">
            <Select value={sortOrder} onValueChange={(value) => setSortOrder(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="low-to-high">Price: Low to High</SelectItem>
                <SelectItem value="high-to-low">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedListings.length > 0 ? (
              sortedListings.map((car) => (
                <Link key={car.id} href={`/car/${car.id}`}>
                  <Card key={car.id} className="overflow-hidden">
                    <CardHeader className="p-0 relative">
                      <img src={car.image} alt={car.model} className="w-full h-48 object-cover" />
                      
                      {car.isFeatured && (
                        <Badge className="absolute top-2 left-2" variant="secondary">
                          FEATURED
                        </Badge>
                      )}
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h2 className="text-2xl font-bold">₹ {car.price.toLocaleString()}</h2>
                        <Badge variant="outline" className="text-xs">
                          {car.year} - {car.mileage.toLocaleString()} km
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{car.model}</h3>
                      <p className="text-sm text-gray-500 mb-2">{car.location}</p>
                      
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between items-center">
                      <p className="text-sm text-gray-500">{car.date}</p>
                      <div className="flex items-center space-x-2">
                        {car.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))
            ) : (
              <p className="col-span-3 text-center text-gray-500">No listings found.</p>
            )}
          </div>
        </div>
      </motion.div>
    
  )
}

export default CarListings