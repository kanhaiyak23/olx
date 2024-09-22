'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { motion } from 'framer-motion'
import { Separator } from "@/components/ui/separator"

function Footer() {
  const socialIcons = [
    { Icon: Facebook, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Youtube, href: "#" },
  ]

  return (
    <footer className="w-full bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-800">POPULAR LOCATIONS</h3>
            <ul className="space-y-2">
              {["Kolkata", "Mumbai", "Chennai", "Pune"].map((city) => (
                <li key={city}>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-800">TRENDING LOCATIONS</h3>
            <ul className="space-y-2">
              {["Bhubaneshwar", "Hyderabad", "Chandigarh", "Nashik"].map((city) => (
                <li key={city}>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-800">ABOUT US</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Tech@OLX
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-800">OLX</h3>
            <ul className="space-y-2">
              {["Blog", "Help", "Sitemap", "Legal & Privacy information", "Vulnerability Disclosure Program"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-800">FOLLOW US</h3>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href={href} className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    <Icon size={24} />
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 flex space-x-4">
              <Link href="#">
                <Image src="https://statics.olx.in/external/base/img/playstore.webp" alt="Google Play" width={120} height={40} className="rounded-md hover:opacity-80 transition-opacity duration-200" />
              </Link>
              <Link href="#">
                <Image src="https://statics.olx.in/external/base/img/appstore.webp" alt="App Store" width={120} height={40} className="rounded-md hover:opacity-80 transition-opacity duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Separator className="bg-gray-300" />
      <div className="bg-[#012F34] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Image src="/logo.png" alt="OLX Logo" width={50} height={50} className="rounded-full" />
              <span className="text-2xl font-bold">OLX</span>
            </div>
            <div className="text-sm flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <Link href="#" className="hover:underline transition-all duration-200">Help</Link>
              <Link href="#" className="hover:underline transition-all duration-200">Sitemap</Link>
              <p className="mt-2 md:mt-0">All rights reserved © 2006-2024 OLX</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer