"use client";
import { useState } from "react";
import {
  ChevronDown,
  Search,
  MessageCircle,
  Bell,
  
} from "lucide-react";
import { useAuth, UserButton, useUser, SignInButton } from "@clerk/nextjs";
// import { CardHeader } from "@/components/ui/card";
// import { Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
// import { useRouter } from "next/navigation";
import {
  sampleListings,
  sampleListing,
  CarListing,
  MotorcycleListing,
  scooter,
  commercial,
  mobile,
  MobilePhoneListing,
  scooterListing,
  CommercialVehicleListing,
  
  RealEstateListing,
} from "../data/alldata";
// Import your components for each category
import CarListings from "../listing/car_listing/page";
import Motorcycles from "../listing/motorcycles/page";
import MobileListing from "../listing/mobile_listing/page";
import ScooterListing from "../listing/scooter/page";
import RealEstateListings from "../listing/house_listing/page";
import CommercialVehicles from "../listing/commerical_vehicle/page";
import RentHouses from "../listing/commerical_vehicle/page";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function OlxHeaderImproved() {
  // const [showNoMessages, setShowNoMessages] = useState(false);
  // const [showNoNotifications, setShowNoNotifications] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(""); // State to hold the selected category
  const { isSignedIn } = useAuth();
  // const [successMessage, setSuccessMessage] = useState("");
  const { user } = useUser();
  // const router = useRouter();
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const addGoogleTranslate = () => {
  //       const script = document.createElement("script");
  //       script.src =
  //         "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  //       script.async = true;
  //       document.body.appendChild(script);
  //     };

      // addGoogleTranslate();

  //     window.googleTranslateElementInit = () => {
  //       if (window.google && window.google.translate) {
  //         new window.google.translate.TranslateElement(
  //           {
  //             pageLanguage: "en",
  //             includedLanguages: "en,hi", // Enable English and Hindi
  //             layout:
  //               window.google.translate.TranslateElement.InlineLayout.SIMPLE, // Ensure InlineLayout is available
  //             autoDisplay: false,
  //           },
  //           "google_translate_element"
  //         );
  //       }
  //     };
  //   }
  // }, []);

  const renderContent = () => {
    switch (selectedCategory) {
      case "Cars":
        return <CarListings />;
      case "Motorcycles":
        return <Motorcycles />;
      case "Mobile Phones":
        return <MobileListing />;
      case "Houses":
        return <RealEstateListings />;
      case "Scooters":
        return <ScooterListing />;
      case "Commercial Vehicles":
        return <CommercialVehicles />;
      case "Rent Houses":
        return <RentHouses />;
      case "":
        return (
          <div>
            <CarListings />
            <Motorcycles />
            <MobileListing />
            <RealEstateListings />
            <ScooterListing />
            <CommercialVehicles />
            <RentHouses />
            hello
          </div>
        );

      default:
        return <div>No item found</div>;
    }
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    const translateDropdown = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement;

    if (translateDropdown) {
      translateDropdown.value = selectedLang;
      translateDropdown.dispatchEvent(new Event("change")); // Trigger language change
    } else {
      console.error("Google Translate dropdown not found.");
    }
  };

  // const handleSignInSuccess = () => {
  //   setSuccessMessage("Signed in successfully! Redirecting...");
  //   router.push("/home_page");
  // };
  const [searchQuery, setSearchQuery] = useState("");

  // Combine both car and commercial vehicle listings into one array
  const combinedListings: (
    | CarListing
    | MotorcycleListing
    | scooterListing
    | MobilePhoneListing
    | MotorcycleListing
    | RealEstateListing
    | CommercialVehicleListing
  )[] = [
    ...sampleListings,
    ...sampleListing,
    ...scooter,
    ...commercial,
    ...mobile,
    ...commercial,
  ];
  // console.log(combinedListings)
  // Filter listings based on search query
  const filteredListings = combinedListings.filter((listing) => {
    const queryLowerCase = searchQuery.toLowerCase();

    // Check for the model property for Car and Motorcycle Listings
    if (
      "model" in listing &&
      "brand" in listing &&
      "year" in listing &&
      "mileage" in listing
    ) {
      return (
        listing.model.toLowerCase().includes(queryLowerCase) ||
        (listing.price && listing.price.toString().includes(searchQuery)) ||
        (listing.location &&
          listing.location.toLowerCase().includes(queryLowerCase)) ||
        (listing.brand &&
          listing.brand.toLowerCase().includes(queryLowerCase)) || // Check brand if applicable
        (listing.year && listing.year.toString().includes(searchQuery)) || // Check year if applicable
        (listing.mileage && listing.mileage.toString().includes(searchQuery)) || // Check mileage if applicable
        (listing.features &&
          listing.features.some((feature) =>
            feature.toLowerCase().includes(queryLowerCase)
          )) // Check features if applicable
      );
    }

    // Check for the title property for Real Estate Listings
    if ("title" in listing && "year" in listing && "mileage" in listing) {
      return (
        listing.title.toLowerCase().includes(queryLowerCase) ||
        (listing.price && listing.price.toString().includes(searchQuery)) ||
        (listing.location &&
          listing.location.toLowerCase().includes(queryLowerCase)) || // Check location if applicable
        (listing.year && listing.year.toString().includes(searchQuery)) || // Check year if applicable
        (listing.mileage && listing.mileage.toString().includes(searchQuery)) || // Check mileage if applicable
        (listing.features &&
          listing.features.some((feature) =>
            feature.toLowerCase().includes(queryLowerCase)
          )) // Check features if applicable
      );
    }

    // If neither model nor title exists, fallback to checking the location
    // return (
    //   (listing.location &&
    //     listing.location.toLowerCase().includes(queryLowerCase)) || // Check location
    //   (listing.price && listing.price.toString().includes(searchQuery)) || // Check price
    //   (listing.year && listing.year.toString().includes(searchQuery)) || // Check year if applicable
    //   (listing.mileage && listing.mileage.toString().includes(searchQuery)) // Check mileage if applicable
    // );
  });

  return (
    <div>
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-4">
              <svg className="w-10 h-10" viewBox="0 0 1024 1024" fill="none">
                <path d="M0 0H1024V1024H0V0Z" fill="#002F34" />
                <path
                  d="M660 330H363C345.33 330 331 344.33 331 362V659C331 676.67 345.33 691 363 691H660C677.67 691 692 676.67 692 659V362C692 344.33 677.67 330 660 330Z"
                  fill="white"
                />
              </svg>
              <div className="relative">
                <ChevronDown
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={16}
                />
              </div>
            </div>

            <div className="flex-grow mx-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Find Cars, Mobile Phones and more..."
                  className="w-full border-2 border-gray-300 rounded-sm py-2 px-4 pr-12 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button className="absolute right-0 top-0 bottom-0 bg-[#002F34] text-white px-4 rounded-r-sm">
                  <Search size={20} />
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <select
                className="appearance-none bg-transparent text-gray-700 font-semibold focus:outline-none"
                onChange={handleLanguageChange}
              >
                <option value="en">ENGLISH</option>
                <option value="hi">Hindi</option>
              </select>

              <Dialog>
                <DialogTrigger>
                  <MessageCircle
                    size={24}
                    className="text-gray-600 cursor-pointer"
                  />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Messages</DialogTitle>
                  </DialogHeader>
                  <div className="p-4 text-center">
                    <p>No messages yet.</p>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <Bell size={24} className="text-gray-600 cursor-pointer" />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Notifications</DialogTitle>
                  </DialogHeader>
                  <div className="p-4 text-center">
                    <p>No notifications at the moment.</p>
                  </div>
                </DialogContent>
              </Dialog>

              {isSignedIn && user ? (
                <div className="flex items-center space-x-4">
                  <div className="text-gray-700 font-semibold">
                    {user.fullName || "User"}
                  </div>
                  <UserButton />
                </div>
              ) : (
                <SignInButton mode="modal"  />
              )}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-white border-2 border-[#002F34] text-[#002F34] font-bold py-1 px-4 rounded-full">
                    + SELL
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Coming Soon</DialogTitle>
                  </DialogHeader>
                  <div className="p-4 text-center">
                    <p>The sell feature is coming soon. Stay tuned!</p>
                  </div>
                </DialogContent>
              </Dialog>

              {/* <Dialog>
                <DialogTrigger>
                  <Button className="bg-white border-2 border-[#002F34] text-[#002F34] font-bold py-1 px-4 rounded-full">
                    + SELL
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Coming Soon</DialogTitle>
                  </DialogHeader>
                  <div className="p-4 text-center">
                    <p>The sell feature is coming soon. Stay tuned!</p>
                  </div>
                </DialogContent>
              </Dialog> */}
            </div>
          </div>
        </div>

        <nav className="bg-gray-100 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <ul className="flex items-center space-x-16 py-2 text-sm text-gray-700 overflow-x-auto">
              <li
                className="font-semibold whitespace-nowrap cursor-pointer"
                onClick={() => setSelectedCategory("")}
              >
                ALL CATEGORIES
                <ChevronDown size={14} className="inline ml-1" />
              </li>
              <li
                className="whitespace-nowrap cursor-pointer"
                onClick={() => setSelectedCategory("Cars")}
              >
                Cars
              </li>
              <li
                className="whitespace-nowrap cursor-pointer"
                onClick={() => setSelectedCategory("Motorcycles")}
              >
                Motorcycles
              </li>
              <li
                className="whitespace-nowrap cursor-pointer"
                onClick={() => setSelectedCategory("Mobile Phones")}
              >
                Mobile Phones
              </li>
              <li
                className="whitespace-nowrap cursor-pointer"
                onClick={() => setSelectedCategory("Houses")}
              >
                For Sale: Houses & Apartments
              </li>
              <li
                className="whitespace-nowrap cursor-pointer"
                onClick={() => setSelectedCategory("Scooters")}
              >
                Scooters
              </li>
              <li
                className="whitespace-nowrap cursor-pointer"
                onClick={() => setSelectedCategory("Commercial Vehicles")}
              >
                Commercial & Other Vehicles
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-6">
        {searchQuery && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">
              Search Results for {searchQuery}:
            </h2>
            {filteredListings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                {filteredListings.map((listing) => (
                  <Card key={listing.id} className="overflow-hidden">
                    <CardHeader className="p-0 relative">
                      <img
                        src={listing.image}
                        // alt={listing.model}
                        className="w-full h-48 object-cover"
                      />
                      <button className="absolute top-2 right-2 p-1 bg-white rounded-full">
                        <Heart className="h-6 w-6 text-gray-500" />
                      </button>
                      {listing.isFeatured && (
                        <Badge
                          className="absolute top-2 left-2"
                          variant="secondary"
                        >
                          FEATURED
                        </Badge>
                      )}
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h2 className="text-2xl font-bold">
                          ₹ {listing.price.toLocaleString()}
                        </h2>
                        <Badge variant="outline" className="text-xs">
                          {/* {listing.year} - {listing.mileage.toLocaleString()} km */}
                        </Badge>
                      </div>
                      {/* <h3 className="text-xl font-semibold mb-2">
                        
                        {listing.model}
                      </h3> */}
                      <p className="text-sm text-gray-500">
                        {listing.location}
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between items-center">
                      <p className="text-sm text-gray-500">{listing.date}</p>
                      <div className="flex items-center space-x-2">
                        {listing.features.map((feature, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                        {listing.features.length > 1 && (
                          <Badge
                            variant="secondary"
                            className="text-xs cursor-pointer"
                          >
                            +{listing.features.length - 1}
                          </Badge>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <p>No listings found for {searchQuery}.</p>
            )}
          </div>
        )}

        {renderContent()}
        {/* {successMessage && (
          <div className="text-green-500 text-center mb-4">
            {successMessage}
          </div> */}
        {/* )} */}
      </main>
    </div>
  );
}

export default OlxHeaderImproved;
