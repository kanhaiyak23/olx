// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'
// import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

//  function Footer() {
//   return (
//     <footer className="w-full">
//       <div className="bg-gray-100 py-8">
//         <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
//           <div>
//             <h3 className="font-bold mb-4">POPULAR LOCATIONS</h3>
//             <ul className="space-y-2">
//               <li><Link href="#" className="text-gray-600 hover:underline">Kolkata</Link></li>
//               <li><Link href="#" className="text-gray-600 hover:underline">Mumbai</Link></li>
//               <li><Link href="#" className="text-gray-600 hover:underline">Chennai</Link></li>
//               <li><Link href="#" className="text-gray-600 hover:underline">Pune</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-bold mb-4">TRENDING LOCATIONS</h3>
//             <ul className="space-y-2">
//               <li><Link href="#" className="text-gray-600 hover:underline">Bhubaneshwar</Link></li>
//               <li><Link href="#" className="text-gray-600 hover:underline">Hyderabad</Link></li>
//               <li><Link href="#" className="text-gray-600 hover:underline">Chandigarh</Link></li>
//               <li><Link href="#" className="text-gray-600 hover:underline">Nashik</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-bold mb-4">ABOUT US</h3>
//             <ul className="space-y-2">
//               <li><Link href="#" className="text-gray-600 hover:underline">Tech@OLX</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-bold mb-4">OLX</h3>
//             <ul className="space-y-2">
//               <li><Link href="#" className="text-gray-600 hover:underline">Blog</Link></li>
//               <li><Link href="#" className="text-gray-600 hover:underline">Help</Link></li>
//               <li><Link href="#" className="text-gray-600 hover:underline">Sitemap</Link></li>
//               <li><Link href="#" className="text-gray-600 hover:underline">Legal & Privacy information</Link></li>
//               <li><Link href="#" className="text-gray-600 hover:underline">Vulnerability Disclosure Program</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-bold mb-4">FOLLOW US</h3>
//             <div className="flex space-x-4">
//               <Link href="#" className="text-gray-600 hover:text-gray-800"><Facebook size={24} /></Link>
//               <Link href="#" className="text-gray-600 hover:text-gray-800"><Instagram size={24} /></Link>
//               <Link href="#" className="text-gray-600 hover:text-gray-800"><Twitter size={24} /></Link>
//               <Link href="#" className="text-gray-600 hover:text-gray-800"><Youtube size={24} /></Link>
//             </div>
//             <div className="mt-4 flex space-x-4">
//               <Link href="#"><Image src="https://statics.olx.in/external/base/img/playstore.webp" alt="Google Play" width={120} height={40} /></Link>
//               <Link href="#"><Image src="https://statics.olx.in/external/base/img/appstore.webp" alt="App Store" width={120} height={40} /></Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div style={{ backgroundColor: 'rgb(1, 47, 52)' }} className="bg-gray-900 text-white py-8">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap justify-between items-center">
//             <div className="flex space-x-8 mb-4 lg:mb-0">
              
//             </div>
//             <div className="text-sm">
//               <Link href="#" className="hover:underline mr-4">Help</Link>
//               <Link href="#" className="hover:underline">Sitemap</Link>
//               <p className="mt-2">All rights reserved © 2006-2024 OLX</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }
// export default Footer
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { motion } from 'framer-motion'
import { Separator } from "@/components/ui/separator"
import { ArrowUp } from 'lucide-react'
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
      <Link href="#" className="fixed bottom-8 right-8 bg-blue-500 text-white p-2 rounded-full">
        <ArrowUp className="h-6 w-6" />
      </Link>
    </footer>
  )
}

export default Footer