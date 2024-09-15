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
    model: 'Pulsar NS200',
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
    model: 'Classic 350',
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
    model: 'FZ-S',
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
    model: 'Splendor Plus',
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
    image:     "data:image/jpeg;base64,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",
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
      "data:image/jpeg;base64,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",
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
      "data:image/jpeg;base64,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",
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
      "data:image/jpeg;base64,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",
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
      "data:image/jpeg;base64,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",
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