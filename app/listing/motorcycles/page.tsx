'use client'

import { Heart } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from 'next/link'
interface MotorcycleListing {
  id: string
  image: string
  price: number
  year: number
  mileage: number
  model: string
  brand: string
  location: string
  date: string
  features: string[]
  isFeatured: boolean
}

interface MotorcycleListingsProps {
  listings?: MotorcycleListing[]
  searchTerm?: string
  totalAds?: number
}

const sampleListings: MotorcycleListing[] = [
  {
    id: '1',
    image: 'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/bajaj-select-model-sparkle-black-blue-single-disc-1671022733142.png?q=80',
    price: 85000,
    year: 2018,
    mileage: 15000,
    model: 'Pulsar NS200',
    brand: 'Bajaj',
    location: 'Pune',
    date: 'Aug 16',
    features: ['ABS', 'DIGITAL SPEEDOMETER'],
    isFeatured: true
  },
  {
    id: '2',
    image: 'https://imgd.aeplcdn.com/664x374/bw/ec/35849/Royal-Enfield-Classic--350-Signals-Side-134409.jpg?wm=0&q=80',
    price: 150000,
    year: 2020,
    mileage: 8000,
    model: 'Classic 350',
    brand: 'Royal Enfield',
    location: 'Mumbai',
    date: 'Aug 30',
    features: ['DUAL CHANNEL ABS'],
    isFeatured: true
  },
  {
    id: '3',
    image: 'https://www.yamaha-motor-india.com/theme/v4/images/webp_images/fz_series_all/fzs-fi-new/color/grey.webp',
    price: 65000,
    year: 2017,
    mileage: 25000,
    model: 'FZ-S',
    brand: 'Yamaha',
    location: 'Delhi',
    date: 'Aug 26',
    features: ['DISC BRAKE', 'ALLOY WHEELS'],
    isFeatured: true
  },
  {
    id: '4',
    image: 'https://bd.gaadicdn.com/processedimages/hero/splendor-plus-xtec/source/splendor-plus-xtec665968736dd79.jpg',
    price: 55000,
    year: 2016,
    mileage: 30000,
    model: 'Splendor Plus',
    brand: 'Hero',
    location: 'Bangalore',
    date: 'Today',
    features: ['ELECTRIC START'],
    isFeatured: false
  },
  {
    id: '5',
    image: 'https://bd.gaadicdn.com/processedimages/bajaj/dominar-400-ug/494X300/dominar-400-ug617684d9f1563.jpg',
    price: 200000,
    year: 2021,
    mileage: 5000,
    model: 'Dominar 400',
    brand: 'Bajaj',
    location: 'Hyderabad',
    date: 'Today',
    features: ['LED HEADLAMP', 'DUAL CHANNEL ABS'],
    isFeatured: false
  },
  {
    id: '6',
    image: 'https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160-4V/optimize-image/160-4V---Red---600-Resulation---750-x-536-Pix.png',
    price: 110000,
    year: 2019,
    mileage: 12000,
    model: 'Apache RTR 160 4V',
    brand: 'TVS',
    location: 'Chennai',
    date: 'Today',
    features: ['RACE TUNED FUEL INJECTION'],
    isFeatured: true
  }
]

function MotorcycleListings({ listings = sampleListings, searchTerm = "motorcycle", totalAds = 2845 }: MotorcycleListingsProps) {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Showing results for "{searchTerm}"</h1>
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
          listings.map((motorcycle) => (
            <Link href={'/coming_soon'}>
            <Card key={motorcycle.id} className="overflow-hidden">
              <CardHeader className="p-0 relative">
                <img src={motorcycle.image} alt={`${motorcycle.brand} ${motorcycle.model}`} className="w-full h-48 object-cover" />
                <button className="absolute top-2 right-2 p-1 bg-white rounded-full">
                  <Heart className="h-6 w-6 text-gray-500" />
                </button>
                {motorcycle.isFeatured && (
                  <Badge className="absolute top-2 left-2" variant="secondary">
                    FEATURED
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-bold">₹ {motorcycle.price.toLocaleString()}</h2>
                  <Badge variant="outline" className="text-xs">
                    {motorcycle.year} - {motorcycle.mileage.toLocaleString()} km
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">{motorcycle.brand} {motorcycle.model}</h3>
                <p className="text-sm text-gray-500">{motorcycle.location}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <p className="text-sm text-gray-500">{motorcycle.date}</p>
                <div className="flex items-center space-x-2">
                  {motorcycle.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {motorcycle.features.length > 1 && (
                    <Badge variant="secondary" className="text-xs cursor-pointer">
                      +{motorcycle.features.length - 1}
                    </Badge>
                  )}
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
export default MotorcycleListings;