'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Search, MessageCircle, Bell, Heart, Share2, ChevronLeft, ChevronRight, ArrowUp } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// ... (previous imports and car details remain the same)

const relatedAds = [
  { id: 1, image: '/placeholder.svg?height=100&width=150', price: 525000, title: 'Honda City V MT Exclusive Edition', year: 2017 },
  { id: 2, image: '/placeholder.svg?height=100&width=150', price: 699000, title: 'Honda City 1.5 VX i-VTEC', year: 2016 },
  { id: 3, image: '/placeholder.svg?height=100&width=150', price: 825000, title: 'Honda City, 2018, Petrol', year: 2018 },
]

const quickLinks = [
  'Used Honda Cars in Mumbai',
  'Used City Cars in Mumbai',
  'Used Petrol Cars in Mumbai',
  'Used Automatic Cars in Mumbai',
  'Used Cars in Charni Road in Mumbai',
  'Used Cars Priced Between 7 Lakhs and 8 Lakhs in Mumbai',
]

export function CarDetailsComponent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === carDetails.images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carDetails.images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ... (previous header and main content remain the same) */}

      <main className="container mx-auto px-4 py-8">
        {/* ... (previous main content remains the same) */}

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">OVERVIEW</h2>
              <Button variant="outline" size="sm">
                <ArrowUp className="mr-2 h-4 w-4" /> Back to top
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p>Comprehensive Insurance valid</p>
                <p>Automatic gears</p>
                <p>Power steering</p>
                <p>Power windows</p>
                <p>Petrol engine</p>
                <p>63000 kms run</p>
                <p>2 keys available</p>
                <p>Original paint</p>
                <p>No major scratch or dent</p>
                <p>Car is next to new no work at all just buy and drive</p>
                <p>Genuine buyers can take spot delivery</p>
              </div>
              <div>
                <p><strong>Location:</strong> Opera House, Charni road, Mumbai</p>
                <p><strong>ADDITIONAL VEHICLE INFORMATION:</strong></p>
                <p>Accidental: No</p>
                <p>Battery Condition: New</p>
                <p>Vehicle Certified: Yes</p>
                <p>Color: White</p>
                <p>Engine Capacity/Displacement (in Cc): 1500</p>
                <p>Insurance Type: Comprehensive</p>
                <p>Make Month: October</p>
                <p>Registration Place: MH</p>
                <p>Exchange: Yes</p>
                <p>Finance: Yes</p>
                <p>Service History: Available</p>
                <p>Tyre Condition: New</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Related ads</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedAds.map((ad) => (
              <Card key={ad.id}>
                <CardContent className="p-4">
                  <Image src={ad.image} alt={ad.title} width={150} height={100} className="w-full h-auto mb-2" />
                  <p className="font-bold">₹ {ad.price.toLocaleString()}</p>
                  <p className="text-sm">{ad.title}</p>
                  <p className="text-xs text-gray-500">{ad.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {quickLinks.map((link, index) => (
              <Link key={index} href="#" className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm py-1 px-3 rounded-full">
                {link}
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">POPULAR LOCATIONS</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Kolkata</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Mumbai</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Chennai</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Pune</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">TRENDING LOCATIONS</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Bhubaneshwar</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Hyderabad</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Chandigarh</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Nashik</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">ABOUT US</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">About OLX Group</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">OLXPeople</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Waah Jobs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">OLX</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Help</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Sitemap</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Legal & Privacy information</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">OLX Autos Sell Car</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <Link href="#"><Image src="/placeholder.svg?height=40&width=40" alt="Facebook" width={40} height={40} /></Link>
              <Link href="#"><Image src="/placeholder.svg?height=40&width=40" alt="Instagram" width={40} height={40} /></Link>
              <Link href="#"><Image src="/placeholder.svg?height=40&width=40" alt="Twitter" width={40} height={40} /></Link>
              <Link href="#"><Image src="/placeholder.svg?height=40&width=40" alt="YouTube" width={40} height={40} /></Link>
            </div>
            <div className="flex space-x-4">
              <Link href="#"><Image src="/placeholder.svg?height=40&width=120" alt="Get it on Google Play" width={120} height={40} /></Link>
              <Link href="#"><Image src="/placeholder.svg?height=40&width=120" alt="Download on the App Store" width={120} height={40} /></Link>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#002f34] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-8">
            <Image src="/placeholder.svg?height=30&width=100" alt="OLX Group" width={100} height={30} />
            <Image src="/placeholder.svg?height=30&width=100" alt="Carwale" width={100} height={30} />
            <Image src="/placeholder.svg?height=30&width=100" alt="Bikewale" width={100} height={30} />
          </div>
          <div>
            <Image src="/placeholder.svg?height=30&width=100" alt="Mobility Outlook" width={100} height={30} />
          </div>
        </div>
      </div>

      <div className="bg-[#002f34] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <Link href="#" className="hover:underline">Help - Sitemap</Link>
          </div>
          <div>
            <p>All rights reserved © 2006-2024 OLX</p>
          </div>
        </div>
      </div>
    </div>
  )
}