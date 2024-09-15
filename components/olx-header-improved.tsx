'use client'

import { ChevronDown, Search, MessageCircle, Bell } from 'lucide-react'

export function OlxHeaderImproved() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-4">
            <svg className="w-10 h-10" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H1024V1024H0V0Z" fill="#002F34"/>
              <path d="M660 330H363C345.33 330 331 344.33 331 362V659C331 676.67 345.33 691 363 691H660C677.67 691 692 676.67 692 659V362C692 344.33 677.67 330 660 330Z" fill="white"/>
            </svg>
            <div className="relative">
              <select className="appearance-none bg-gray-100 text-gray-700 font-semibold rounded-sm px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>India</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
            </div>
          </div>
          <div className="flex-grow mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Find Cars, Mobile Phones and more..."
                className="w-full border-2 border-gray-300 rounded-sm py-2 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-0 top-0 bottom-0 bg-[#002F34] text-white px-4 rounded-r-sm">
                <Search size={20} />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <select className="appearance-none bg-transparent text-gray-700 font-semibold focus:outline-none">
              <option>ENGLISH</option>
            </select>
            <MessageCircle size={24} className="text-gray-600" />
            <Bell size={24} className="text-gray-600" />
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
              U
            </div>
            <button className="bg-white border-2 border-[#002F34] text-[#002F34] font-bold py-1 px-4 rounded-full hover:bg-[#002F34] hover:text-white transition duration-300">
              + SELL
            </button>
          </div>
        </div>
      </div>
      <nav className="bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <ul className="flex items-center space-x-6 py-2 text-sm text-gray-700 overflow-x-auto">
            <li className="font-semibold whitespace-nowrap">ALL CATEGORIES <ChevronDown size={14} className="inline ml-1" /></li>
            <li className="whitespace-nowrap">Cars</li>
            <li className="whitespace-nowrap">Motorcycles</li>
            <li className="whitespace-nowrap">Mobile Phones</li>
            <li className="whitespace-nowrap">For Sale: Houses & Apartments</li>
            <li className="whitespace-nowrap">Scooters</li>
            <li className="whitespace-nowrap">Commercial & Other Vehicles</li>
            <li className="whitespace-nowrap">For Rent: Houses & Apartments</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}