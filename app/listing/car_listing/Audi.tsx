// 'use client';

import { Heart } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from 'next/link'

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
    isFeatured: true
  },
  {
    id: '2',
    image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/51502/honda-city-4th-generation-left-front-three-quarter3.jpeg',
    price: 250000,
    year: 2010,
    mileage: 80000,
    model: 'Honda City',
    location: 'Airoli',
    date: 'Aug 30',
    features: ['WARRANTY'],
    isFeatured: true
  },
  {
    id: '3',
    image: 'https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/169159/gla-facelift-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80',
    price: 345000,
    year: 2012,
    mileage: 70000,
    model: 'Honda City',
    location: 'Chembur',
    date: 'Aug 26',
    features: ['VERIFIED SELLER'],
    isFeatured: true
  },
  {
    id: '4',
    image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/150603/i20-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80',
    price: 169000,
    year: 2010,
    mileage: 93000,
    model: 'Honda City',
    location: 'Taloja',
    date: 'Today',
    features: [],
    isFeatured: false
  },
  {
    id: '5',
    image: 'https://mediapool.bmwgroup.com/cache/P9/202309/P90522951/P90522951-the-bmw-i5-edrive40-driving-10-2023-2247px.jpg',
    price: 120000,
    year: 2004,
    mileage: 196000,
    model: 'Honda City',
    location: 'Airoli',
    date: 'Today',
    features: [],
    isFeatured: false
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
    isFeatured: true
  }
]

function CarsListinggs({ listings = sampleListings, searchTerm = "car", totalAds = 3645 }: CarListingsProps) {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Showing results for {searchTerm}</h1>
        <Badge variant="secondary" className="text-lg">{totalAds} Ads</Badge>
      </div>
      <div className="flex justify-end mb-4">
        <Select defaultValue="date">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Date Published</SelectItem>
            <SelectItem value="price">Price</SelectItem>
            <SelectItem value="year">Year</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listings.length > 0 ? (
          listings.map((car) => (
            <Link key={car.id} href={'/coming_soon'}>
              <Card key={car.id} className="overflow-hidden">
                <CardHeader className="p-0 relative">
                  <img src={car.image} alt={car.model} className="w-full h-48 object-cover" />
                  <button className="absolute top-2 right-2 p-1 bg-white rounded-full">
                    <Heart className="h-6 w-6 text-gray-500" />
                  </button>
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
                  <p className="text-sm text-gray-500">{car.location}</p>
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
  )
}


export default CarsListinggs