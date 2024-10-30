'use client'

import { useState, useRef } from 'react'
import {useRouter}  from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Upload } from 'lucide-react'
import { db } from '@/lib/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useUser } from '@clerk/nextjs'
// import { getAuth, onAuthStateChanged } from "firebase/auth";
export default function Form() {
  const router = useRouter()
  const { user } = useUser(); 
  const [images, setImages] = useState<File[]>([])
  const [sellerPhoto, setSellerPhoto] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    category: "",
    brand: "",
    year: "",
    fuel: "petrol",
    transmission: "manual",
    kmDriven: "",
    owners: "1st",
    adTitle: "",
    description: "",
    price: "",
    state: "",
    name: "",
    phone: "",
    sellerId:""
  })

  const fileInputRef = useRef<HTMLInputElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files).slice(0, 3))
    }
  }

  const handleSellerPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        setSellerPhoto(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCameraCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.play()
      }
    } catch (err) {
      console.error("Error accessing camera:", err)
    }
  }

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas')
      canvas.width = videoRef.current.videoWidth
      canvas.height = videoRef.current.videoHeight
      canvas.getContext('2d')?.drawImage(videoRef.current, 0, 0)
      setSellerPhoto(canvas.toDataURL('image/jpeg'))
      if (videoRef.current.srcObject instanceof MediaStream) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop())
      }
    }
  }

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   const { id, value } = e.target
  //   setFormData((prevData) => ({ ...prevData, [id]: value }))
  // }

  
 
  
  // const auth = getAuth();
  
  const handleFormSubmit = async () => {
    const storage = getStorage();
    const sellerId = user ? user.id : "";
    // Proceed with uploading files without authentication
    const imageUrls = await Promise.all(
      images.map(async (image) => {
        const imageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(imageRef, image);
        return getDownloadURL(imageRef);
      })
    );

    // Upload seller photo
    let sellerPhotoUrl = null;
    if (sellerPhoto) {
      const sellerPhotoRef = ref(storage, `seller-photos/${formData.name}`);
      const sellerPhotoBlob = await fetch(sellerPhoto).then(r => r.blob());
      await uploadBytes(sellerPhotoRef, sellerPhotoBlob);
      sellerPhotoUrl = await getDownloadURL(sellerPhotoRef);
    }

    const newListing = {
      ...formData,
      images: imageUrls,
      sellerId:sellerId,
      sellerPhoto: sellerPhotoUrl,
      createdAt: new Date().toISOString()
    };
    console.log(newListing)

    try {
      const docRef = await addDoc(collection(db, 'listings'), newListing);
      console.log(docRef)
      alert('Listing added successfully!');
      router.push('/') 
    } catch (error) {
      console.error('Error adding listing: ', error);
      alert('Failed to add listing. Please try again.');
    }
  }

  
  
  
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-8 bg-gradient-to-br from-purple-100 to-blue-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">Post Your Ad</h1>

      <div className="space-y-6">
        <Card className="border-2 border-purple-300 shadow-lg">
          <CardHeader className="bg-purple-500 text-white">
            <CardTitle>Selected Category</CardTitle>
          </CardHeader>
          <CardContent className="mt-4">
            <div className="space-y-4">
              <Label htmlFor="category" className="text-purple-700">Category *</Label>
              <Select onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                <SelectTrigger id="category" className="border-2 border-purple-300">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="car">Car</SelectItem>
                  <SelectItem value="motorcycle">Motorcycle</SelectItem>
                  <SelectItem value="scooter">Scooter</SelectItem>
                  <SelectItem value="mobile_phone">Mobile Phone</SelectItem>
                  <SelectItem value="commercial_vehicle">Commercial Vehicle</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-300 shadow-lg">
          <CardHeader className="bg-blue-500 text-white">
            <CardTitle>Include Some Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 mt-4">
            <div>
              <Label htmlFor="brand" className="text-blue-700">Brand *</Label>
              <Select onValueChange={(value) => setFormData(prev => ({ ...prev, brand: value }))}>
                <SelectTrigger id="brand" className="border-2 border-blue-300">
                  <SelectValue placeholder="Select brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="toyota">Toyota</SelectItem>
                  <SelectItem value="honda">Honda</SelectItem>
                  <SelectItem value="ford">Ford</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="year" className="text-blue-700">Year *</Label>
              <Input 
                type="number" 
                id="year" 
                placeholder="Enter year" 
                className="border-2 border-blue-300"
                onChange={(e) => setFormData(prev => ({ ...prev, year: e.target.value }))}
              />
            </div>

            <div>
              <Label className="text-blue-700">Fuel *</Label>
              <RadioGroup 
                defaultValue="petrol" 
                className="flex flex-wrap gap-4"
                onValueChange={(value) => setFormData(prev => ({ ...prev, fuel: value }))}
              >
                {['CNG & Hybrids', 'Diesel', 'Electric', 'LPG', 'Petrol'].map((fuel) => (
                  <div key={fuel} className="flex items-center space-x-2">
                    <RadioGroupItem value={fuel.toLowerCase()} id={fuel.toLowerCase()} />
                    <Label htmlFor={fuel.toLowerCase()}>{fuel}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label className="text-blue-700">Transmission *</Label>
              <RadioGroup 
                defaultValue="manual" 
                className="flex gap-4"
                onValueChange={(value) => setFormData(prev => ({ ...prev, transmission: value }))}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="automatic" id="automatic" />
                  <Label htmlFor="automatic">Automatic</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="manual" id="manual" />
                  <Label htmlFor="manual">Manual</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="km-driven" className="text-blue-700">KM driven *</Label>
              <Input 
                type="number" 
                id="km-driven" 
                placeholder="Enter KM driven" 
                className="border-2 border-blue-300"
                onChange={(e) => setFormData(prev => ({ ...prev, kmDriven: e.target.value }))}
              />
            </div>

            <div>
              <Label className="text-blue-700">No. of Owners *</Label>
              <RadioGroup 
                defaultValue="1st" 
                className="flex flex-wrap gap-4"
                onValueChange={(value) => setFormData(prev => ({ ...prev, owners: value }))}
              >
                {['1st', '2nd', '3rd', '4th', '4+'].map((owner) => (
                  <div key={owner} className="flex items-center space-x-2">
                    <RadioGroupItem value={owner} id={`owner-${owner}`} />
                    <Label htmlFor={`owner-${owner}`}>{owner}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="ad-title" className="text-blue-700">Ad title *</Label>
              <Input 
                id="ad-title" 
                placeholder="Mention the key features of your item (e.g. brand, model, age, type)" 
                className="border-2 border-blue-300"
                onChange={(e) => setFormData(prev => ({ ...prev, adTitle: e.target.value }))}
              />
            </div>

            <div>
              <Label htmlFor="description" className="text-blue-700">Description *</Label>
              <Textarea 
                id="description" 
                placeholder="Include condition, features and reason for selling" 
                className="border-2 border-blue-300"
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-300 shadow-lg">
          <CardHeader className="bg-green-500 text-white">
            <CardTitle>Set a price</CardTitle>
          </CardHeader>
          <CardContent className="mt-4">
            <div>
              <Label htmlFor="price" className="text-green-700">Price *</Label>
              <Input 
                type="number" 
                id="price" 
                placeholder="Enter price" 
                className="border-2 border-green-300"
                onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-yellow-300 shadow-lg">
          <CardHeader className="bg-yellow-500 text-white">
            <CardTitle>Upload Photos</CardTitle>
          </CardHeader>
          <CardContent className="mt-4">
            <div className="flex items-center justify-center w-full">
              <Label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-yellow-300 border-dashed rounded-lg cursor-pointer bg-yellow-50 hover:bg-yellow-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-10 h-10 mb-3 text-yellow-500" />
                  <p className="mb-2 text-sm text-yellow-700"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-yellow-600">PNG, JPG or GIF (MAX. 3 files)</p>
                </div>
                <Input id="dropzone-file" type="file" className="hidden" multiple accept="image/*" onChange={handleImageUpload} />
              </Label>
            </div>
            {images.length > 0 && (
              <div className="mt-4 flex gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <img src={URL.createObjectURL(image)} alt={`Uploaded ${index + 1}`} className="w-20 h-20 object-cover rounded" />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute -top-2 -right-2 w-6 h-6"
                      onClick={() => setImages(images.filter((_, i) => i !== index))}
                    >
                      ×
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="border-2 border-red-300 shadow-lg">
          <CardHeader className="bg-red-500 text-white">
            <CardTitle>Confirm your location</CardTitle>
          </CardHeader>
          <CardContent className="mt-4">
            <div>
              <Label htmlFor="state" className="text-red-700">State *</Label>
              <Select onValueChange={(value) => setFormData(prev => ({ ...prev, state: value }))}>
                <SelectTrigger id="state" className="border-2 border-red-300">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="karnataka">Karnataka</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-indigo-300 shadow-lg">
          <CardHeader className="bg-indigo-500 text-white">
            <CardTitle>Review your details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 mt-4">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-32 h-32 bg-indigo-100 rounded-full overflow-hidden flex items-center justify-center">
                {sellerPhoto ? (
                  <img src={sellerPhoto} alt="Seller" className="w-full h-full object-cover" />
                ) : (
                  <Camera className="w-12 h-12 text-indigo-500" />
                )}
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <Label htmlFor="name" className="text-indigo-700">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Enter your name" 
                    className="border-2 border-indigo-300"
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-indigo-700">Your phone number</Label>
                  <Input 
                    id="phone" 
                    placeholder="Enter your phone number" 
                    className="border-2 border-indigo-300"
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <Button onClick={() => fileInputRef.current?.click()} className="bg-indigo-500 hover:bg-indigo-600">
                Upload Photo
              </Button>
              <Button onClick={handleCameraCapture} className="bg-indigo-500 hover:bg-indigo-600">
                Take Photo
              </Button>
              <Input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleSellerPhotoUpload}
              />
            </div>
            {videoRef.current && (
              <div className="mt-4 flex justify-center">
                <video ref={videoRef} className="w-64 h-48 border-2 border-indigo-300 rounded-lg" />
                <Button onClick={capturePhoto} className="ml-4 bg-indigo-500 hover:bg-indigo-600">
                  Capture
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Button 
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          onClick={handleFormSubmit}
        >
          Post now
        </Button>
      </div>
    </div>
  )
}