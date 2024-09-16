'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

 function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="font-bold mb-4">POPULAR LOCATIONS</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:underline">Kolkata</Link></li>
              <li><Link href="#" className="text-gray-600 hover:underline">Mumbai</Link></li>
              <li><Link href="#" className="text-gray-600 hover:underline">Chennai</Link></li>
              <li><Link href="#" className="text-gray-600 hover:underline">Pune</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">TRENDING LOCATIONS</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:underline">Bhubaneshwar</Link></li>
              <li><Link href="#" className="text-gray-600 hover:underline">Hyderabad</Link></li>
              <li><Link href="#" className="text-gray-600 hover:underline">Chandigarh</Link></li>
              <li><Link href="#" className="text-gray-600 hover:underline">Nashik</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">ABOUT US</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:underline">Tech@OLX</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">OLX</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:underline">Blog</Link></li>
              <li><Link href="#" className="text-gray-600 hover:underline">Help</Link></li>
              <li><Link href="#" className="text-gray-600 hover:underline">Sitemap</Link></li>
              <li><Link href="#" className="text-gray-600 hover:underline">Legal & Privacy information</Link></li>
              <li><Link href="#" className="text-gray-600 hover:underline">Vulnerability Disclosure Program</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-gray-800"><Facebook size={24} /></Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800"><Instagram size={24} /></Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800"><Twitter size={24} /></Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800"><Youtube size={24} /></Link>
            </div>
            <div className="mt-4 flex space-x-4">
              <Link href="#"><Image src="/placeholder.svg?height=40&width=120" alt="Google Play" width={120} height={40} /></Link>
              <Link href="#"><Image src="/placeholder.svg?height=40&width=120" alt="App Store" width={120} height={40} /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex space-x-8 mb-4 lg:mb-0">
              <Image src="/placeholder.svg?height=40&width=150" alt="CarTrade Tech Group" width={150} height={40} />
              <Image src="/placeholder.svg?height=40&width=60" alt="OLX" width={60} height={40} />
              <Image src="/placeholder.svg?height=40&width=100" alt="CarWale" width={100} height={40} />
              <Image src="/placeholder.svg?height=40&width=100" alt="BikeWale" width={100} height={40} />
              <Image src="/placeholder.svg?height=40&width=100" alt="CarTrade" width={100} height={40} />
              <Image src="/placeholder.svg?height=40&width=150" alt="Mobility Outlook" width={150} height={40} />
            </div>
            <div className="text-sm">
              <Link href="#" className="hover:underline mr-4">Help</Link>
              <Link href="#" className="hover:underline">Sitemap</Link>
              <p className="mt-2">All rights reserved © 2006-2024 </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer