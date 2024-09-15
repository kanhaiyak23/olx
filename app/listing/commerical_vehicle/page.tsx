'use client'

import { Heart, Truck, Calendar, MapPin } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import  Link  from 'next/link'
interface CommercialVehicleListing {
  id: string
  image: string
  price: number
  year: number
  mileage: number
  model: string
  brand: string
  location: string
  date: string
  vehicleType: string
  features: string[]
  isFeatured: boolean
}

interface CommercialVehicleListingsProps {
  listings?: CommercialVehicleListing[]
  searchTerm?: string
  totalAds?: number
}

const sampleListings: CommercialVehicleListing[] = [
  {
    id: '1',
    image: 'https://cvimg1.cardekho.com/p/630x420/in/eicher/pro-2049-cng/eicher-pro-2049-cng-36197.jpg',
    price: 1500000,
    year: 2020,
    mileage: 50000,
    model: 'Eicher Pro 2049',
    brand: 'Eicher',
    location: 'Mumbai, Maharashtra',
    date: 'Aug 16',
    vehicleType: 'Truck',
    features: ['AC', 'POWER STEERING'],
    isFeatured: true
  },
  {
    id: '2',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/337521642/VF/TG/ES/82064411/force-traveller.jpg',
    price: 800000,
    year: 2019,
    mileage: 75000,
    model: 'Traveller',
    brand: 'Force',
    location: 'Delhi, NCR',
    date: 'Aug 30',
    vehicleType: 'Mini Bus',
    features: ['26 SEATER', 'ABS'],
    isFeatured: true
  },
  {
    id: '3',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzsEhPqQ8I2ovl3qXQ2HwSfI02LTqR8E0usA&s',
    price: 2500000,
    year: 2021,
    mileage: 30000,
    model: 'Blazo X 28',
    brand: 'Mahindra',
    location: 'Bangalore, Karnataka',
    date: 'Aug 26',
    vehicleType: 'Tipper',
    features: ['FUEL SMART', 'TELEMATICS'],
    isFeatured: true
  },
  {
    id: '4',
    image: 'https://assets.tractorjunction.com/truck-junction/assets/images/truck/ashokleyland-dost-other1.webp?format=webp',
    price: 600000,
    year: 2018,
    mileage: 100000,
    model: 'Dost+',
    brand: 'Ashok Leyland',
    location: 'Chennai, Tamil Nadu',
    date: 'Today',
    vehicleType: 'Light Commercial Vehicle',
    features: ['HIGH PAYLOAD'],
    isFeatured: false
  },
  {
    id: '5',
    image: 'https://i.ytimg.com/vi/zu2NfrOfzvY/maxresdefault.jpg',
    price: 3500000,
    year: 2022,
    mileage: 20000,
    model: '3718',
    brand: 'BharatBenz',
    location: 'Hyderabad, Telangana',
    date: 'Today',
    vehicleType: 'Heavy Duty Truck',
    features: ['ADVANCED TELEMATICS', 'HILL START ASSIST'],
    isFeatured: false
  },
  {
    id: '6',
    image: 'https://rushlane.com/wp-content/uploads/2020/02/2020-force-trax-cruiser-launch-price-bs6-3.jpg',
    price: 1200000,
    year: 2020,
    mileage: 60000,
    model: 'Trax Cruiser',
    brand: 'Force',
    location: 'Pune, Maharashtra',
    date: 'Today',
    vehicleType: 'Utility Vehicle',
    features: ['13 SEATER', '4X4'],
    isFeatured: true
  }
]

function CommercialVehiclesListings({ listings = sampleListings, searchTerm = "Commercial & Other Vehicles", totalAds = 2789 }: CommercialVehicleListingsProps) {
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
          listings.map((vehicle) => (
            <Link href={'/coming_soon'}>
            <Card key={vehicle.id} className="overflow-hidden">
              <CardHeader className="p-0 relative">
                <img src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model}`} className="w-full h-48 object-cover" />
                <button className="absolute top-2 right-2 p-1 bg-white rounded-full" aria-label="Add to favorites">
                  <Heart className="h-6 w-6 text-gray-500" />
                </button>
                {vehicle.isFeatured && (
                  <Badge className="absolute top-2 left-2" variant="secondary">
                    FEATURED
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-bold">₹ {vehicle.price.toLocaleString()}</h2>
                  <Badge variant="outline" className="text-xs">
                    {vehicle.vehicleType}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">{vehicle.brand} {vehicle.model}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {vehicle.year}
                  </span>
                  <span className="flex items-center">
                    <Truck className="h-4 w-4 mr-1" />
                    {vehicle.mileage.toLocaleString()} km
                  </span>
                </div>
                <p className="text-sm text-gray-500 flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {vehicle.location}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <p className="text-sm text-gray-500">{vehicle.date}</p>
                <div className="flex items-center space-x-2">
                  {vehicle.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {vehicle.features.length > 1 && (
                    <Badge variant="secondary" className="text-xs cursor-pointer">
                      +{vehicle.features.length - 1}
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
export default CommercialVehiclesListings;