"use client";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
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

interface MobilePhoneListing {
  id: string;
  image: string;
  price: number;
  brand: string;
  model: string;
  storage: string;
  ram: string;
  condition: string;
  location: string;
  date: string;
  features: string[];
  isFeatured: boolean;
}

interface MobilePhoneListingsProps {
  listings?: MobilePhoneListing[];
  searchTerm?: string;
  totalAds?: number;
}

const sampleListings: MobilePhoneListing[] = [
  {
    id: "1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqng9CrH76yZtJpfpbLzarJ17YM812SM32aQ&s",
    price: 45000,
    brand: "Apple",
    model: "iPhone 12",
    storage: "128GB",
    ram: "4GB",
    condition: "Used",
    location: "Mumbai",
    date: "Aug 16",
    features: ["5G", "FACE ID"],
    isFeatured: true,
  },
  {
    id: "2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyjkYR5Uqp4zufZ_hoAibQm9-5SLcHG6JIBQ&s",
    price: 35000,
    brand: "Samsung",
    model: "Galaxy S21",
    storage: "256GB",
    ram: "8GB",
    condition: "Like New",
    location: "Delhi",
    date: "Aug 30",
    features: ["5G", "WIRELESS CHARGING"],
    isFeatured: true,
  },
  {
    id: "3",
    image:'data:image/jpeg;base64,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',
    price: 18000,
    brand: "OnePlus",
    model: "Nord 2",
    storage: "128GB",
    ram: "8GB",
    condition: "New",
    location: "Bangalore",
    date: "Aug 26",
    features: ["5G", "FAST CHARGING"],
    isFeatured: true,
  },
  {
    id: "4",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNpQ3vuKUzGdQarSVIu6NkkMzMcXp9LEBXng&s",
    price: 12000,
    brand: "Xiaomi",
    model: "Redmi Note 10",
    storage: "64GB",
    ram: "6GB",
    condition: "Used",
    location: "Chennai",
    date: "Today",
    features: ["QUAD CAMERA"],
    isFeatured: false,
  },
  {
    id: "5",
    image:
      "https://i.guim.co.uk/img/media/afd8fd14ba364c8d8a2917ff90eeb2216a74b28e/72_181_5311_3188/master/5311.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=14214f5f874034e8f2945be2d1f0bb84",
    price: 28000,
    brand: "Google",
    model: "Pixel 4a",
    storage: "128GB",
    ram: "6GB",
    condition: "Like New",
    location: "Hyderabad",
    date: "Today",
    features: ["NIGHT SIGHT", "STOCK ANDROID"],
    isFeatured: false,
  },
  {
    id: "6",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTeVNNKWZOkW87S2QHiFBcANHqle8-lRsVPQ&s",
    price: 22000,
    brand: "Vivo",
    model: "V21",
    storage: "128GB",
    ram: "8GB",
    condition: "New",
    location: "Pune",
    date: "Today",
    features: ["44MP SELFIE CAMERA"],
    isFeatured: true,
  },
];

function MobilePhoneListings({
  listings = sampleListings,
  searchTerm = "Mobile phone",
  totalAds = 5234,
}: MobilePhoneListingsProps) {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
           {searchTerm}
        </h1>
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
            <SelectItem value="condition">Condition</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listings.length > 0 ? (
          listings.map((phone) => (
            <Link key={phone.id}href={`/mobiles/${phone.id}`}>
            <Card key={phone.id} className="overflow-hidden">
              <CardHeader className="p-0 relative">
                <img
                  src={phone.image}
                  alt={`${phone.brand} ${phone.model}`}
                  className="w-full h-48 object-cover"
                />
                
                {phone.isFeatured && (
                  <Badge className="absolute top-2 left-2" variant="secondary">
                    FEATURED
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-bold">
                    ₹ {phone.price.toLocaleString()}
                  </h2>
                  <Badge variant="outline" className="text-xs">
                    {phone.condition}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {phone.brand} {phone.model}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {phone.storage} | {phone.ram} RAM
                </p>
                <p className="text-sm text-gray-500">{phone.location}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <p className="text-sm text-gray-500">{phone.date}</p>
                <div className="flex items-center space-x-2">
                  {phone.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {phone.features.length > 1 && (
                    <Badge
                      variant="secondary"
                      className="text-xs cursor-pointer"
                    >
                      +{phone.features.length - 1}
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
export default MobilePhoneListings;

