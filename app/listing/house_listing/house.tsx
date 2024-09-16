"use client";

import { Heart, BedDouble, Bath, Ruler } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link  from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RealEstateListing {
  id: string;
  image: string;
  price: number;
  title: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: "House" | "Apartment";
  date: string;
  features: string[];
  isFeatured: boolean;
}

interface RealEstateListingsProps {
  listings?: RealEstateListing[];
  searchTerm?: string;
  totalAds?: number;
}



const sampleListings: RealEstateListing[] = [
  {
    id: "1",
    image:
      "https://www.guptasen.com/wp-content/uploads/2021/05/chand-terraces-for-sale-3-bhk.jpg",
    price: 8500000,
    title: "3 BHK Apartment in Bandra West",
    location: "Mumbai, Maharashtra",
    bedrooms: 3,
    bathrooms: 2,
    area: 1200,
    type: "Apartment",
    date: "Aug 16",
    features: ["PARKING", "SWIMMING POOL"],
    isFeatured: true,
  },
  {
    id: "2",
    image:     "https://www.guptasen.com/wp-content/uploads/2021/05/chand-terraces-for-sale-3-bhk.jpg",
    price: 15000000,
    title: "4 BHK Villa in Koramangala",
    location: "Bangalore, Karnataka",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    type: "House",
    date: "Aug 30",
    features: ["GARDEN", "MODULAR KITCHEN"],
    isFeatured: true,
  },
  {
    id: "3",
    image:
      "https://www.guptasen.com/wp-content/uploads/2021/05/chand-terraces-for-sale-3-bhk.jpg",
    price: 6000000,
    title: "2 BHK Flat in Andheri East",
    location: "Mumbai, Maharashtra",
    bedrooms: 2,
    bathrooms: 2,
    area: 950,
    type: "Apartment",
    date: "Aug 26",
    features: ["GYM", "24/7 SECURITY"],
    isFeatured: true,
  },
  {
    id: "4",
    image:
      "https://www.guptasen.com/wp-content/uploads/2021/05/chand-terraces-for-sale-3-bhk.jpg",
    price: 20000000,
    title: "5 BHK Independent House in Vasant Vihar",
    location: "New Delhi, Delhi",
    bedrooms: 5,
    bathrooms: 4,
    area: 3500,
    type: "House",
    date: "Today",
    features: ["TERRACE", "SERVANT QUARTER"],
    isFeatured: false,
  },
  {
    id: "5",
    image:
      "https://www.guptasen.com/wp-content/uploads/2021/05/chand-terraces-for-sale-3-bhk.jpg",
    price: 4500000,
    title: "1 BHK Apartment in Kharadi",
    location: "Pune, Maharashtra",
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    type: "Apartment",
    date: "Today",
    features: ["CLUBHOUSE", "POWER BACKUP"],
    isFeatured: false,
  },
  {
    id: "6",
    image:
      "https://www.guptasen.com/wp-content/uploads/2021/05/chand-terraces-for-sale-3-bhk.jpg",
    price: 12000000,
    title: "3 BHK Villa in ECR",
    location: "Chennai, Tamil Nadu",
    bedrooms: 3,
    bathrooms: 3,
    area: 1800,
    type: "House",
    date: "Today",
    features: ["SEA VIEW", "PRIVATE BEACH ACCESS"],
    isFeatured: true,
  },
];

function RealEstateListings({
  listings = sampleListings,
  searchTerm = "Houses & Apartments",
  totalAds = 7823,
}: RealEstateListingsProps) {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">For Sale: {searchTerm}</h1>
        <Badge variant="secondary" className="text-lg">
          {totalAds} Ads
        </Badge>
      </div>
      <div className="flex justify-end mb-4">
        <Select defaultValue="date">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Date Published</SelectItem>
            <SelectItem value="price">Price</SelectItem>
            <SelectItem value="area">Area</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listings.length > 0 ? (
          listings.map((property) => (
            <Link key={property.id} href={'/coming_soon'}>
            <Card key={property.id} className="overflow-hidden">
              <CardHeader className="p-0 relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <button
                  className="absolute top-2 right-2 p-1 bg-white rounded-full"
                  aria-label="Add to favorites"
                >
                  <Heart className="h-6 w-6 text-gray-500" />
                </button>
                {property.isFeatured && (
                  <Badge className="absolute top-2 left-2" variant="secondary">
                    FEATURED
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-bold">
                    ₹ {property.price.toLocaleString()}
                  </h2>
                  <Badge variant="outline" className="text-xs">
                    {property.type}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  {property.location}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <BedDouble className="h-4 w-4 mr-1" />
                    {property.bedrooms} Beds
                  </span>
                  <span className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    {property.bathrooms} Baths
                  </span>
                  <span className="flex items-center">
                    <Ruler className="h-4 w-4 mr-1" />
                    {property.area} sq.ft
                  </span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <p className="text-sm text-gray-500">{property.date}</p>
                <div className="flex items-center space-x-2">
                  {property.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {property.features.length > 1 && (
                    <Badge
                      variant="secondary"
                      className="text-xs cursor-pointer"
                    >
                      +{property.features.length - 1}
                    </Badge>
                  )}
                </div>
              </CardFooter>
            </Card>
            </Link>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No listings found.
          </p>
        )}
      </div>
    </div>
  );
}
export default RealEstateListings;
