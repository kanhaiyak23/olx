//car data
export interface CarListing {
  id: string
  image: string
  price: number
  title: string
  subtitle:string
  year: number
  mileage: number
  model: string
  location: string
  date: string
  features: string[]
  isFeatured: boolean
  fuelType: string
  transmission: string
  owner  : string
  // postingdate: string
  postingDate: string
  description: string
  sellerName: string
  sellerImage: string
  images: string[]
  overview: object
}

export interface CarListingsProps {
  listings?: CarListing[]
  searchTerm?: string
  totalAds?: number
}
export const sampleListings: CarListing[] = [
  {
    id: '1',
    image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/City/9710/1677914238296/front-left-side-47.jpg',
    price: 585000,
    year: 2014,
    mileage: 82000,
    model: 'Honda City',
    location: 'Wanowrie',
    date: 'Aug 16',
    features: ['WARRANTY', 'ROADSIDE ASSISTANCE'],
    isFeatured: true,
    title: 'Honda City (2014)',
    subtitle: '[2014-2014] 1.5 V CVT i-VTEC',
    fuelType: 'PETROL',
    transmission: 'AUTOMATIC',
    owner: '1st',
    postingDate: '08-SEP-24',
    description: 'Good condition Honda City, well maintained.',
    sellerName: 'Seller Name 1',
    sellerImage: '/placeholder.svg?height=50&width=50',
    images: [
      'https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/City/9710/1677914238296/front-left-side-47.jpg',
      // Add more images if necessary
    ],
    overview: {
      location: 'Wanowrie, Pune',
      additionalInfo: [
        { label: 'Accidental', value: 'No' },
        { label: 'Battery Condition', value: 'Good' },
        { label: 'Vehicle Certified', value: 'Yes' },
        { label: 'Color', value: 'White' },
        { label: 'Engine Capacity', value: '1500cc' },
        { label: 'Insurance Type', value: 'Comprehensive' },
        { label: 'Make Month', value: 'January' },
        { label: 'Registration Place', value: 'MH' },
        { label: 'Exchange', value: 'Yes' },
        { label: 'Finance', value: 'Yes' },
        { label: 'Service History', value: 'Available' },
        { label: 'Tyre Condition', value: 'New' },
      ],
    },
  },
  {
    id: '2',
    image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/51502/honda-city-4th-generation-left-front-three-quarter3.jpeg',
    price: 250000,
    year: 2010,
    mileage: 80000,
    model: 'Honda City',
    location: 'Airoli',
    date: 'Aug 30',
    features: ['WARRANTY'],
    isFeatured: true,
    title: 'Honda City (2010)',
    subtitle: '[2010-2010] 1.5 V MT i-VTEC',
    fuelType: 'PETROL',
    transmission: 'MANUAL',
    owner: '2nd',
    postingDate: '08-SEP-24',
    description: 'Well maintained Honda City with good mileage.',
    sellerName: 'Seller Name 2',
    sellerImage: '/placeholder.svg?height=50&width=50',
    images: [
      'https://imgd.aeplcdn.com/1280x720/n/cw/ec/51502/honda-city-4th-generation-left-front-three-quarter3.jpeg',
      // Add more images if necessary
    ],
    overview: {
      location: 'Airoli, Navi Mumbai',
      additionalInfo: [
        { label: 'Accidental', value: 'No' },
        { label: 'Battery Condition', value: 'Good' },
        { label: 'Vehicle Certified', value: 'Yes' },
        { label: 'Color', value: 'Silver' },
        { label: 'Engine Capacity', value: '1500cc' },
        { label: 'Insurance Type', value: 'Third Party' },
        { label: 'Make Month', value: 'March' },
        { label: 'Registration Place', value: 'MH' },
        { label: 'Exchange', value: 'No' },
        { label: 'Finance', value: 'No' },
        { label: 'Service History', value: 'Available' },
        { label: 'Tyre Condition', value: 'Good' },
      ],
    },
  },
  {
    id: '3',
    image: 'https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/169159/gla-facelift-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80',
    price: 345000,
    year: 2012,
    mileage: 70000,
    model: 'Honda City',
    location: 'Chembur',
    date: 'Aug 26',
    features: ['VERIFIED SELLER'],
    isFeatured: true,
    title: 'Honda City (2012)',
    subtitle: '[2012-2012] 1.5 V MT i-VTEC',
    fuelType: 'PETROL',
    transmission: 'MANUAL',
    owner: '1st',
    postingDate: '08-SEP-24',
    description: 'Single owner Honda City, excellent condition.',
    sellerName: 'Seller Name 3',
    sellerImage: '/placeholder.svg?height=50&width=50',
    images: [
      'https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/169159/gla-facelift-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80',
      // Add more images if necessary
    ],
    overview: {
      location: 'Chembur, Mumbai',
      additionalInfo: [
        { label: 'Accidental', value: 'No' },
        { label: 'Battery Condition', value: 'New' },
        { label: 'Vehicle Certified', value: 'Yes' },
        { label: 'Color', value: 'Red' },
        { label: 'Engine Capacity', value: '1500cc' },
        { label: 'Insurance Type', value: 'Comprehensive' },
        { label: 'Make Month', value: 'July' },
        { label: 'Registration Place', value: 'MH' },
        { label: 'Exchange', value: 'Yes' },
        { label: 'Finance', value: 'Yes' },
        { label: 'Service History', value: 'Available' },
        { label: 'Tyre Condition', value: 'Good' },
      ],
    },
  },
  {
    id: '4',
    image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/150603/i20-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80',
    price: 169000,
    year: 2010,
    mileage: 93000,
    model: 'Honda City',
    location: 'Taloja',
    date: 'Today',
    features: [],
    isFeatured: false,
    title: 'Honda City (2010)',
    subtitle: '[2010-2010] 1.5 V MT i-VTEC',
    fuelType: 'PETROL',
    transmission: 'MANUAL',
    owner: '3rd',
    postingDate: '08-SEP-24',
    description: 'Good condition Honda City, low price.',
    sellerName: 'Seller Name 4',
    sellerImage: '/placeholder.svg?height=50&width=50',
    images: [
      'https://imgd.aeplcdn.com/1280x720/n/cw/ec/150603/i20-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80',
      // Add more images if necessary
    ],
    overview: {
      location: 'Taloja, Navi Mumbai',
      additionalInfo: [
        { label: 'Accidental', value: 'No' },
        { label: 'Battery Condition', value: 'Good' },
        { label: 'Vehicle Certified', value: 'Yes' },
        { label: 'Color', value: 'Blue' },
        { label: 'Engine Capacity', value: '1500cc' },
        { label: 'Insurance Type', value: 'Third Party' },
        { label: 'Make Month', value: 'April' },
        { label: 'Registration Place', value: 'MH' },
        { label: 'Exchange', value: 'No' },
        { label: 'Finance', value: 'No' },
        { label: 'Service History', value: 'Available' },
        { label: 'Tyre Condition', value: 'Good' },
      ],
    },
  },
  {
    id: '5',
    image: 'https://mediapool.bmwgroup.com/cache/P9/202309/P90522951/P90522951-the-bmw-i5-edrive40-driving-10-2023-2247px.jpg',
    price: 120000,
    year: 2004,
    mileage: 196000,
    model: 'Honda City',
    location: 'Airoli',
    date: 'Today',
    features: [],
    isFeatured: false,
    title: 'Honda City (2004)',
    subtitle: '[2004-2004] 1.5 V MT i-VTEC',
    fuelType: 'PETROL',
    transmission: 'MANUAL',
    owner: '4th',
    postingDate: '08-SEP-24',
    description: 'High mileage Honda City, needs some repairs.',
    sellerName: 'Seller Name 5',
    sellerImage: '/placeholder.svg?height=50&width=50',
    images: [
      'https://mediapool.bmwgroup.com/cache/P9/202309/P90522951/P90522951-the-bmw-i5-edrive40-driving-10-2023-2247px.jpg',
      // Add more images if necessary
    ],
    overview: {
      location: 'Airoli, Navi Mumbai',
      additionalInfo: [
        { label: 'Accidental', value: 'No' },
        { label: 'Battery Condition', value: 'Fair' },
        { label: 'Vehicle Certified', value: 'No' },
        { label: 'Color', value: 'Grey' },
        { label: 'Engine Capacity', value: '1500cc' },
        { label: 'Insurance Type', value: 'Expired' },
        { label: 'Make Month', value: 'December' },
        { label: 'Registration Place', value: 'MH' },
        { label: 'Exchange', value: 'No' },
        { label: 'Finance', value: 'No' },
        { label: 'Service History', value: 'Not Available' },
        { label: 'Tyre Condition', value: 'Worn' },
      ],
    },
  },
  {
    id: '6',
    image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Curvv/9578/1723033064164/front-left-side-47.jpg',
    price: 610000,
    year: 2016,
    mileage: 68000,
    model: 'Honda Jazz',
    location: 'Karmayogi Nagar',
    date: 'Today',
    features: [],
    isFeatured: true,
    title: 'Honda Jazz (2016)',
    subtitle: '[2016-2016] 1.2 V CVT i-VTEC',
    fuelType: 'PETROL',
    transmission: 'AUTOMATIC',
    owner: '1st',
    postingDate: '08-SEP-24',
    description: 'Excellent condition Honda Jazz, single owner.',
    sellerName: 'Seller Name 6',
    sellerImage: '/placeholder.svg?height=50&width=50',
    images: [
      'https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Curvv/9578/1723033064164/front-left-side-47.jpg',
      // Add more images if necessary
    ],
    overview: {
      location: 'Karmayogi Nagar, Pune',
      additionalInfo: [
        { label: 'Accidental', value: 'No' },
        { label: 'Battery Condition', value: 'New' },
        { label: 'Vehicle Certified', value: 'Yes' },
        { label: 'Color', value: 'Black' },
        { label: 'Engine Capacity', value: '1200cc' },
        { label: 'Insurance Type', value: 'Comprehensive' },
        { label: 'Make Month', value: 'June' },
        { label: 'Registration Place', value: 'MH' },
        { label: 'Exchange', value: 'Yes' },
        { label: 'Finance', value: 'Yes' },
        { label: 'Service History', value: 'Available' },
        { label: 'Tyre Condition', value: 'New' },
      ],
    },
  },
];


export interface MotorcycleListing {
  id: string;
  image: string;
  price: number;
  year: number;
  mileage: number;
  model: string;
  brand: string;
  location: string;
  date: string;
  features: string[];
  isFeatured: boolean;
  title: string;
  subtitle: string;
  fuelType: string;
  transmission: string;
  owner: string;
  postingDate: string;
  description: string;
  sellerName: string;
  sellerImage: string;
  images: string[];
  overview: {
    location: string;
    additionalInfo: { label: string; value: string }[];
  };
}

export const sampleListing: MotorcycleListing[] = [
  {
    id: '1',
    image: 'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/bajaj-select-model-sparkle-black-blue-single-disc-1671022733142.png?q=80',
    price: 85000,
    year: 2018,
    mileage: 15000,
    model: 'Bajaj Pulsar NS200',
    brand: 'Bajaj',
    location: 'Pune',
    date: 'Aug 16',
    features: ['ABS', 'DIGITAL SPEEDOMETER'],
    isFeatured: true,
    title: 'Bajaj Pulsar NS200 (2018)',
    subtitle: 'Powerful performance with modern features',
    fuelType: 'PETROL',
    transmission: 'MANUAL',
    owner: '1st',
    postingDate: '08-SEP-24',
    description: 'Well maintained Bajaj Pulsar NS200, low mileage and excellent performance.',
    sellerName: 'Seller Name 1',
    sellerImage: '/placeholder.svg?height=50&width=50',
    images: [
      'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/bajaj-select-model-sparkle-black-blue-single-disc-1671022733142.png?q=80',
      // Add more images if necessary
    ],
    overview: {
      location: 'Pune',
      additionalInfo: [
        { label: 'Accidental', value: 'No' },
        { label: 'Battery Condition', value: 'Good' },
        { label: 'Vehicle Certified', value: 'Yes' },
        { label: 'Color', value: 'Black' },
        { label: 'Engine Capacity', value: '200cc' },
        { label: 'Insurance Type', value: 'Comprehensive' },
        { label: 'Make Month', value: 'May' },
        { label: 'Registration Place', value: 'MH' },
        { label: 'Exchange', value: 'Yes' },
        { label: 'Finance', value: 'Yes' },
        { label: 'Service History', value: 'Available' },
        { label: 'Tyre Condition', value: 'New' },
      ],
    },
  },
  {
    id: '2',
    image: 'https://imgd.aeplcdn.com/664x374/bw/ec/35849/Royal-Enfield-Classic--350-Signals-Side-134409.jpg?wm=0&q=80',
    price: 150000,
    year: 2020,
    mileage: 8000,
    model: 'Royal Enfield Classic 350',
    brand: 'Royal Enfield',
    location: 'Mumbai',
    date: 'Aug 30',
    features: ['DUAL CHANNEL ABS'],
    isFeatured: true,
    title: 'Royal Enfield Classic 350 (2020)',
    subtitle: 'Timeless classic motorcycle',
    fuelType: 'PETROL',
    transmission: 'MANUAL',
    owner: '1st',
    postingDate: '08-SEP-24',
    description: 'Classic 350 in pristine condition, single owner, low mileage.',
    sellerName: 'Seller Name 2',
    sellerImage: '/placeholder.svg?height=50&width=50',
    images: [
      'https://imgd.aeplcdn.com/664x374/bw/ec/35849/Royal-Enfield-Classic--350-Signals-Side-134409.jpg?wm=0&q=80',
      // Add more images if necessary
    ],
    overview: {
      location: 'Mumbai',
      additionalInfo: [
        { label: 'Accidental', value: 'No' },
        { label: 'Battery Condition', value: 'New' },
        { label: 'Vehicle Certified', value: 'Yes' },
        { label: 'Color', value: 'Green' },
        { label: 'Engine Capacity', value: '350cc' },
        { label: 'Insurance Type', value: 'Comprehensive' },
        { label: 'Make Month', value: 'August' },
        { label: 'Registration Place', value: 'MH' },
        { label: 'Exchange', value: 'Yes' },
        { label: 'Finance', value: 'Yes' },
        { label: 'Service History', value: 'Available' },
        { label: 'Tyre Condition', value: 'Good' },
      ],
    },
  },
  {
    id: '3',
    image: 'https://www.yamaha-motor-india.com/theme/v4/images/webp_images/fz_series_all/fzs-fi-new/color/grey.webp',
    price: 65000,
    year: 2017,
    mileage: 25000,
    model: 'Yamaha FZ-S',
    brand: 'Yamaha',
    location: 'Delhi',
    date: 'Aug 26',
    features: ['DISC BRAKE', 'ALLOY WHEELS'],
    isFeatured: true,
    title: 'Yamaha FZ-S (2017)',
    subtitle: 'Stylish and powerful bike',
    fuelType: 'PETROL',
    transmission: 'MANUAL',
    owner: '2nd',
    postingDate: '08-SEP-24',
    description: 'Stylish Yamaha FZ-S with good performance and handling.',
    sellerName: 'Seller Name 3',
    sellerImage: '/placeholder.svg?height=50&width=50',
    images: [
      'https://www.yamaha-motor-india.com/theme/v4/images/webp_images/fz_series_all/fzs-fi-new/color/grey.webp',
      // Add more images if necessary
    ],
    overview: {
      location: 'Delhi',
      additionalInfo: [
        { label: 'Accidental', value: 'No' },
        { label: 'Battery Condition', value: 'Good' },
        { label: 'Vehicle Certified', value: 'Yes' },
        { label: 'Color', value: 'Grey' },
        { label: 'Engine Capacity', value: '150cc' },
        { label: 'Insurance Type', value: 'Third Party' },
        { label: 'Make Month', value: 'June' },
        { label: 'Registration Place', value: 'DL' },
        { label: 'Exchange', value: 'No' },
        { label: 'Finance', value: 'No' },
        { label: 'Service History', value: 'Available' },
        { label: 'Tyre Condition', value: 'Good' },
      ],
    },
  },
  {
    id: '4',
    image: 'https://bd.gaadicdn.com/processedimages/hero/splendor-plus-xtec/source/splendor-plus-xtec665968736dd79.jpg',
    price: 55000,
    year: 2016,
    mileage: 30000,
    model: 'Hero Splendor Plus',
    brand: 'Hero',
    location: 'Bangalore',
    date: 'Today',
    features: ['ELECTRIC START'],
    isFeatured: false,
    title: 'Hero Splendor Plus (2016)',
    subtitle: 'Reliable commuter motorcycle',
    fuelType: 'PETROL',
    transmission: 'MANUAL',
    owner: '3rd',
    postingDate: '08-SEP-24',
    description: 'Hero Splendor Plus, ideal for daily commuting.',
    sellerName: 'Seller Name 4',
    sellerImage: '/placeholder.svg?height=50&width=50',
    images: [
      'https://bd.gaadicdn.com/processedimages/hero/splendor-plus-xtec/source/splendor-plus-xtec665968736dd79.jpg',
      // Add more images if necessary
    ],
    overview: {
      location: 'Bangalore',
      additionalInfo: [
        { label: 'Accidental', value: 'No' },
        { label: 'Battery Condition', value: 'Good' },
        { label: 'Vehicle Certified', value: 'Yes' },
        { label: 'Color', value: 'Red' },
        { label: 'Engine Capacity', value: '100cc' },
        { label: 'Insurance Type', value: 'Third Party' },
        { label: 'Make Month', value: 'January' },
        { label: 'Registration Place', value: 'KA' },
        { label: 'Exchange', value: 'No' },
        { label: 'Finance', value: 'No' },
        { label: 'Service History', value: 'Not Available' },
        { label: 'Tyre Condition', value: 'Good' },
      ],
    },
  },
  {
    id: '5',
    image: 'https://bd.gaadicdn.com/processedimages/bajaj/dominar-400-ug/494X300/dominar-400-ug617684d9f1563.jpg',
    price: 200000,
    year: 2021,
    mileage: 5000,
    model: 'Dominar 400',
    brand: 'Bajaj',
    location: 'Hyderabad',
    date: 'Today',
    features: ['LED HEADLAMP', 'DUAL CHANNEL ABS'],
    isFeatured: false,
    title: 'Bajaj Dominar 400 (2021)',
    subtitle: 'Adventure touring motorcycle',
    fuelType: 'PETROL',
    transmission: 'MANUAL',
    owner: '1st',
    postingDate: '08-SEP-24',
    description: 'Bajaj Dominar 400 with low mileage, perfect for touring.',
    sellerName: 'Seller Name 5',
    sellerImage: '/placeholder.svg?height=50&width=50',
    images: [
      'https://bd.gaadicdn.com/processedimages/bajaj/dominar-400-ug/494X300/dominar-400-ug617684d9f1563.jpg',
      // Add more images if necessary
    ],
    overview: {
      location: 'Hyderabad',
      additionalInfo: [
        { label: 'Accidental', value: 'No' },
        { label: 'Battery Condition', value: 'New' },
        { label: 'Vehicle Certified', value: 'Yes' },
        { label: 'Color', value: 'Black' },
        { label: 'Engine Capacity', value: '400cc' },
        { label: 'Insurance Type', value: 'Comprehensive' },
        { label: 'Make Month', value: 'March' },
        { label: 'Registration Place', value: 'TS' },
        { label: 'Exchange', value: 'Yes' },
        { label: 'Finance', value: 'Yes' },
        { label: 'Service History', value: 'Available' },
        { label: 'Tyre Condition', value: 'New' },
      ],
    },
  },
  {
    id: '6',
    image: 'https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160-4V/optimize-image/160-4V---Red---600-Resulation---750-x-536-Pix.png',
    price: 110000,
    year: 2019,
    mileage: 12000,
    model: 'Apache RTR 160 4V',
    brand: 'TVS',
    location: 'Chennai',
    date: 'Today',
    features: ['RACE TUNED FUEL INJECTION'],
    isFeatured: true,
    title: 'TVS Apache RTR 160 4V (2019)',
    subtitle: 'Performance-oriented motorcycle',
    fuelType: 'PETROL',
    transmission: 'MANUAL',
    owner: '1st',
    postingDate: '08-SEP-24',
    description: 'TVS Apache RTR 160 4V with sporty design and features.',
    sellerName: 'Seller Name 6',
    sellerImage: '/placeholder.svg?height=50&width=50',
    images: [
      'https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160-4V/optimize-image/160-4V---Red---600-Resulation---750-x-536-Pix.png',
      // Add more images if necessary
    ],
    overview: {
      location: 'Chennai',
      additionalInfo: [
        { label: 'Accidental', value: 'No' },
        { label: 'Battery Condition', value: 'Good' },
        { label: 'Vehicle Certified', value: 'Yes' },
        { label: 'Color', value: 'Red' },
        { label: 'Engine Capacity', value: '160cc' },
        { label: 'Insurance Type', value: 'Comprehensive' },
        { label: 'Make Month', value: 'February' },
        { label: 'Registration Place', value: 'TN' },
        { label: 'Exchange', value: 'Yes' },
        { label: 'Finance', value: 'Yes' },
        { label: 'Service History', value: 'Available' },
        { label: 'Tyre Condition', value: 'Good' },
      ],
    },
  }
];

export interface MobilePhoneListing {
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

export interface MobilePhoneListingsProps {
  listings?: MobilePhoneListing[];
  searchTerm?: string;
  totalAds?: number;
}

export const mobile: MobilePhoneListing[] = [
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
    image:'',
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

export interface scooterListing {
  id: string
  image: string
  price: number
  year: number
  mileage: number
  model: string
  brand: string
  location: string
  date: string
  features: string[]
  isFeatured: boolean
}

export interface ScooterListingsProps {
  listings?: scooterListing[]
  searchTerm?: string
  totalAds?: number
}

export const scooter: scooterListing[] = [
  {
    id: '1',
    image: 'https://bubhandari.net/wp-content/uploads/2020/06/Honda-Activa6G-Red.jpg',
    price: 75000,
    year: 2020,
    mileage: 5000,
    model: 'Activa 6G',
    brand: 'Honda',
    location: 'Mumbai',
    date: 'Aug 16',
    features: ['DISC BRAKE', 'USB CHARGING'],
    isFeatured: true
  },
  {
    id: '2',
    image: 'https://bd.gaadicdn.com/processedimages/suzuki/bs6-access-125/640X309/bs6-access-1256431264fe3a67.jpg',
    price: 85000,
    year: 2021,
    mileage: 3000,
    model: 'Access 125',
    brand: 'Suzuki',
    location: 'Delhi',
    date: 'Aug 30',
    features: ['LED HEADLAMP', 'ALLOY WHEELS'],
    isFeatured: true
  },
  {
    id: '3',
    image: 'https://bd.gaadicdn.com/processedimages/tvs/tvs-jupiter/494X300/tvs-jupiter66c714371574b.jpg',
    price: 70000,
    year: 2019,
    mileage: 8000,
    model: 'Jupiter',
    brand: 'TVS',
    location: 'Bangalore',
    date: 'Aug 26',
    features: ['MOBILE CONNECTIVITY', 'ECO MODE'],
    isFeatured: true
  },
  {
    id: '4',
    image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/127621/pleasure-plus-right-side-view-3.png?isig=0',
    price: 55000,
    year: 2018,
    mileage: 12000,
    model: 'Pleasure+',
    brand: 'Hero',
    location: 'Chennai',
    date: 'Today',
    features: ['INTEGRATED BRAKING'],
    isFeatured: false
  },
  {
    id: '5',
    image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/102709/ntorq-125-right-front-three-quarter.jpeg?isig=0',
    price: 95000,
    year: 2022,
    mileage: 2000,
    model: 'Ntorq 125',
    brand: 'TVS',
    location: 'Hyderabad',
    date: 'Today',
    features: ['RACE TUNED FI', 'BLUETOOTH CONNECTIVITY'],
    isFeatured: false
  },
  {
    id: '6',
    image:'https://bd.gaadicdn.com/processedimages/yamaha/fascino-125/source/fascino-1256613f62c7ef53.jpg',
    price: 80000,
    year: 2021,
    mileage: 4000,
    model: 'Fascino 125',
    brand: 'Yamaha',
    location: 'Pune',
    date: 'Today',
    features: ['SIDE STAND ENGINE CUT-OFF'],
    isFeatured: true
  }
]

export interface CommercialVehicleListing {
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

export interface CommercialVehicleListingsProps {
  listings?: CommercialVehicleListing[]
  searchTerm?: string
  totalAds?: number
}

export const commercial: CommercialVehicleListing[] = [
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

export interface RealEstateListing {
  id: string;
  image: string;
  price: number;
  model: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: "House" | "Apartment";
  date: string;
  features: string[];
  isFeatured: boolean;
}

export interface RealEstateListingsProps {
  listings?: RealEstateListing[];
  searchTerm?: string;
  totalAds?: number;
}



export const house: RealEstateListing[] = [
  {
    id: "1",
    image:
      "https://www.guptasen.com/wp-content/uploads/2021/05/chand-terraces-for-sale-3-bhk.jpg",
    price: 8500000,
    model: "3 BHK Apartment in Bandra West",
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
    image:     "https://imagecdn.99acres.com/media1/25435/5/508705907M-1722657602457.webp",
    price: 15000000,
    model: "4 BHK Villa in Koramangala",
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
      "https://imagecdn.99acres.com/media1/25545/6/510906467M-1723531311271.webp",
    price: 6000000,
    model: "2 BHK Flat in Andheri East",
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
      "https://imagecdn.99acres.com/media1/24869/16/497396056M-1718009900636.webp",
    price: 20000000,
    model: "5 BHK Independent House in Vasant Vihar",
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
      "https://im.proptiger.com/1/3176158/6/kaleido-elevation-138511614.jpeg",
    price: 4500000,
    model: "1 BHK Apartment in Kharadi",
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
      "https://www.ziraholidays.com/wp-content/uploads/2022/01/landmark-villa-ecr.jpg",
    price: 12000000,
    model: "3 BHK Villa in ECR",
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