'use client'


import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from 'next/link'
interface ScooterListing {
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

interface ScooterListingsProps {
  listings?: ScooterListing[]
  searchTerm?: string
  totalAds?: number
}

const sampleListings: ScooterListing[] = [
  {
    id: '1',
    image: 'https://bubhandari.net/wp-content/uploads/2020/06/Honda-Activa6G-Red.jpg',
    price: 75000,
    year: 2020,
    mileage: 5000,
    model: 'Activa 6G',
    brand: 'Honda',
    location: 'Mumbai',
    date: 'Aug 16',
    features: ['DISC BRAKE', 'USB CHARGING'],
    isFeatured: true
  },
  {
    id: '2',
    image: 'https://bd.gaadicdn.com/processedimages/suzuki/bs6-access-125/640X309/bs6-access-1256431264fe3a67.jpg',
    price: 85000,
    year: 2021,
    mileage: 3000,
    model: 'Access 125',
    brand: 'Suzuki',
    location: 'Delhi',
    date: 'Aug 30',
    features: ['LED HEADLAMP', 'ALLOY WHEELS'],
    isFeatured: true
  },
  {
    id: '3',
    image: 'https://bd.gaadicdn.com/processedimages/tvs/tvs-jupiter/494X300/tvs-jupiter66c714371574b.jpg',
    price: 70000,
    year: 2019,
    mileage: 8000,
    model: 'Jupiter',
    brand: 'TVS',
    location: 'Bangalore',
    date: 'Aug 26',
    features: ['MOBILE CONNECTIVITY', 'ECO MODE'],
    isFeatured: true
  },
  {
    id: '4',
    image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/127621/pleasure-plus-right-side-view-3.png?isig=0',
    price: 55000,
    year: 2018,
    mileage: 12000,
    model: 'Pleasure+',
    brand: 'Hero',
    location: 'Chennai',
    date: 'Today',
    features: ['INTEGRATED BRAKING'],
    isFeatured: false
  },
  {
    id: '5',
    image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/102709/ntorq-125-right-front-three-quarter.jpeg?isig=0',
    price: 95000,
    year: 2022,
    mileage: 2000,
    model: 'Ntorq 125',
    brand: 'TVS',
    location: 'Hyderabad',
    date: 'Today',
    features: ['RACE TUNED FI', 'BLUETOOTH CONNECTIVITY'],
    isFeatured: false
  },
  {
    id: '6',
    image:'https://bd.gaadicdn.com/processedimages/yamaha/fascino-125/source/fascino-1256613f62c7ef53.jpg',
    price: 80000,
    year: 2021,
    mileage: 4000,
    model: 'Fascino 125',
    brand: 'Yamaha',
    location: 'Pune',
    date: 'Today',
    features: ['SIDE STAND ENGINE CUT-OFF'],
    isFeatured: true
  }
]

function ScooterListings({ listings = sampleListings, searchTerm = "Scooter", totalAds = 3456 }: ScooterListingsProps) {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold"> {searchTerm}</h1>
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
          listings.map((scooter) => (
            <Link key={scooter.id}
            href={`/scooters/${scooter.id}`}>
            
            <Card key={scooter.id} className="overflow-hidden">
              <CardHeader className="p-0 relative">
                <img src={scooter.image} alt={`${scooter.brand} ${scooter.model}`} className="w-full h-48 object-cover" />
                
                {scooter.isFeatured && (
                  <Badge className="absolute top-2 left-2" variant="secondary">
                    FEATURED
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-bold">₹ {scooter.price.toLocaleString()}</h2>
                  <Badge variant="outline" className="text-xs">
                    {scooter.year} - {scooter.mileage.toLocaleString()} km
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">{scooter.brand} {scooter.model}</h3>
                <p className="text-sm text-gray-500">{scooter.location}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <p className="text-sm text-gray-500">{scooter.date}</p>
                <div className="flex items-center space-x-2">
                  {scooter.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {scooter.features.length > 1 && (
                    <Badge variant="secondary" className="text-xs cursor-pointer">
                      +{scooter.features.length - 1}
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
export default ScooterListings