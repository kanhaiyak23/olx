'use client'

import { useState } from 'react'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../../header/page'
import Footer from '../../footer/page'
import { Heart, Share2, ChevronLeft, ChevronRight, ArrowUp } from 'lucide-react'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type Params = {
  id: string;
};

const carDetailsf =[ {

  id: '1',
  title: 'Honda City (2019)',
  subtitle: '[2017-2020] 1.5 V CVT i-VTEC',
  price: 715000,
  features: ['FEATURED', 'VERIFIED SELLER'],
  fuelType: 'PETROL',
  mileage: 63000,
  transmission: 'AUTOMATIC',
  owner: '1st',
  location: 'Charni Road, Mumbai',
  postingDate: '08-SEP-24',
  description: 'Excellent condition single owner Honda city V petrol automatic top model car...',
  sellerName: 'Jay Patel',
  sellerImage: '/placeholder.svg?height=50&width=50',
  images: ['https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/City/9710/1677914238296/front-left-side-47.jpg', 'https://www.hondacarindia.com/_next/image?url=https%3A%2F%2Fwww.hondacarindia.com%2Fweb-data%2Fmodels-mobile%2F2023%2Fcity5thGen%2FDesign%2FExterior%2FNew-Front-Design.jpg&w=3840&q=75', 'https://www.v3cars.com/media/content/835677honda-city-facelift-front-exterior.webp'],
  overview: {
    location: 'Opera House, Charni road, Mumbai',
    additionalInfo: [
      { label: 'Accidental', value: 'No' },
      { label: 'Battery Condition', value: 'New' },
      { label: 'Vehicle Certified', value: 'Yes' },
      { label: 'Color', value: 'White' },
      { label: 'Engine Capacity', value: '1500cc' },
      { label: 'Insurance Type', value: 'Comprehensive' },
      { label: 'Make Month', value: 'October' },
      { label: 'Registration Place', value: 'MH' },
      { label: 'Exchange', value: 'Yes' },
      { label: 'Finance', value: 'Yes' },
      { label: 'Service History', value: 'Available' },
      { label: 'Tyre Condition', value: 'New' },
    ],
  }
}
]
// interface CarDetailsParams {
//   id: string; // or number, depending on your ID type
// }

const relatedAds = [
  { id: 1, image: 'https://i.pinimg.com/originals/7f/25/92/7f25923d54da53ec4efbf69260c6cd2c.jpg', price: 525000, title: 'Honda City V MT Exclusive Edition', year: 2017 },
  { id: 2, image: 'https://newspaperads.ads2publish.com/wp-content/uploads/2019/02/honda-make-the-big-move-with-sedan-of-the-year-ad-delhi-times-03-02-2019.png', price: 699000, title: 'Honda City 1.5 VX i-VTEC', year: 2016 },
  { id: 3, image: 'https://newspaperads.ads2publish.com/wp-content/uploads/2019/02/honda-city-car-forget-the-toys-benefits-upto-72000-ad-times-of-india-mumbai-07-02-2019.png', price: 825000, title: 'Honda City, 2018, Petrol', year: 2018 },
]

const quickLinks = [
  'Used Honda Cars in Mumbai',
  'Used City Cars in Mumbai',
  'Used Petrol Cars in Mumbai',
  'Used Automatic Cars in Mumbai',
  'Used Cars in Charni Road in Mumbai',
  'Used Cars Priced Between 7 Lakhs and 8 Lakhs in Mumbai',
]
export default function CarDetails() {
  
  const params = useParams<Params>(); // Specify the type for useParams

  // Check if params is null and handle it appropriately
  if (!params) {
    return <div>No parameters available!</div>; // Handle the case where params are not available
  }

  const { id } = params;
  // Find the car details based on the ID
  const cardetail = carDetailsf.find((car) => car.id === id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!cardetail) {
    return <div>Car not found!</div>;  // Handle the case where the car is not found
  }


 


  
const handleImageChange = (direction: 'prev' | 'next') => {//+
  setCurrentImageIndex((prevIndex) =>//+
    direction === 'next'//+
      ? prevIndex === cardetail.images.length - 1 ? 0 : prevIndex + 1//+
      : prevIndex === 0 ? cardetail.images.length - 1 : prevIndex - 1//+
  )//+
}//+


  return (
    <div className="min-h-screen bg-gray-100">
        
      <Header/>
      

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="text-sm breadcrumbs mb-4">
          <ul className="flex space-x-2 text-gray-500">
            <li><Link href="/">Home</Link></li>
            <li>Cars</li>
            {/* More breadcrumb items */}
          </ul>
        </div>

        {/* Car Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="relative mb-8">
              <Image src={cardetail.images[currentImageIndex]} alt={cardetail.title} width={600} height={400} className="w-full h-auto rounded-lg" />
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

            {/* Car Description */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex space-x-2 mb-2">
                      {cardetail.features.map((feature, index) => (
                        <Badge key={index} variant={index === 0 ? "default" : "secondary"} className="text-xs">{feature}</Badge>
                      ))}
                    </div>
                    <h1 className="text-2xl font-bold">{cardetail.title}</h1>
                    <p className="text-gray-500">{cardetail.subtitle}</p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">₹ {cardetail.price.toLocaleString('en-IN')}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-gray-700 font-semibold">Fuel Type: <span className="font-normal">{cardetail.fuelType}</span></div>
                  <div className="text-gray-700 font-semibold">Mileage: <span className="font-normal">{cardetail.mileage} KM</span></div>
                  <div className="text-gray-700 font-semibold">Transmission: <span className="font-normal">{cardetail.transmission}</span></div>
                </div>

                <div className="flex space-x-4">
                  <Button className="flex-1 bg-green-500 text-white">Make offer</Button>
                  <Button className="flex-1 bg-blue-500 text-white">Chat</Button>
                </div>
              </CardContent>
            </Card>

            {/* Description & Overview */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-bold">{cardetail.title}</h2>
                    <p className="text-gray-500">Seller: {cardetail.sellerName}</p>
                  </div>
                  <Image src={cardetail.sellerImage} alt={cardetail.sellerName} width={50} height={50} className="rounded-full" />
                </div>
                <p className="mb-6 text-gray-600">{cardetail.description}</p>

                <h3 className="font-semibold text-lg mb-2">Overview</h3>
                <div className="grid grid-cols-2 gap-4">
                  {cardetail.overview.additionalInfo.map((info, index) => (
                    <div key={index} className="text-gray-700 font-semibold">{info.label}: <span className="font-normal">{info.value}</span></div>
                  ))}
                </div>

                <div className="mt-6 text-right">
                  <button className="bg-gray-200 text-gray-600 py-2 px-4 rounded-full">
                    <ArrowUp className="inline-block mr-2" /> Back to top
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Related Ads */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Related Ads</h3>
            <div className="space-y-4">
              {relatedAds.map((ad) => (
                <Card key={ad.id}>
                  <CardContent className="p-4 flex space-x-4">
                    <Image src={ad.image} alt={ad.title} width={150} height={100} className="rounded-md" />
                    <div>
                      <p className="font-semibold text-gray-800">₹ {ad.price.toLocaleString('en-IN')}</p>
                      <p className="text-gray-600">{ad.title}</p>
                      <p className="text-gray-500 text-sm">{ad.year}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Links */}
            <h3 className="font-semibold text-lg mt-8 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index} className="text-blue-500 cursor-pointer hover:underline">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 mt-12 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">&copy; 2024 OLX Clone. All Rights Reserved.</p>
        </div>
      </footer>
      <Footer/>
    </div>
  )
}
// app/car/[id]/page.tsx
// app/car/[id]/page.tsx
// app/car/[id]/page.tsx
// import { useParams } from 'next/navigation';

// const CarDetails = () => {
  
//   const { id } = useParams();

//   // Ensure the ID is defined and is a string before matching
//   if (!id || typeof id !== 'string') {
//     return <div>Loading...</div>;
//   }

//   // Find the car details based on the ID
//   const cardetail = carDetails.find(car => car.id === id);

//   if (!cardetail) {
//     return <div>Car not found!</div>;
//   }

//   return (
//     <div>
//       <h1>{cardetail.title}</h1>
//       {/* Display additional car details */}
//     </div>
//   );
// };

// export default CarDetails;