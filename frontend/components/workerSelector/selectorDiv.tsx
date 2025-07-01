

"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams,useRouter } from "next/navigation";
import {
  Briefcase,
  MapPin,
  Star,
  Calendar,
  Search,
  Navigation,
} from "lucide-react";
import Axiosinstance from "@/axios/axiosInstance";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
 import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// import "leaflet/dist/leaflet.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddressModal from "../modal/address";
import Swal from "sweetalert2";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

type Worker = {
  username: string;
  place?: string;
  city?: string;
};

declare global {
  interface Window {
    Razorpay: any;
  }
}


const WorkerSelectorPage = () => {
  const searchParams = useSearchParams();
  const Router=useRouter();
  const service = searchParams.get("service") || "";
  const userId="6851620840217e5af31c27f6";

  const [userPosition, setUserPosition] = useState<[number, number]>([
    8.5241, 76.9366,
  ]);
  const [mapCenter, setMapCenter] = useState<[number, number]>(userPosition);
  const [locationSearch, setLocationSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<[number, number] | null>(null);
  const [selectedWorker, setSelectedWorker] = useState<Worker | null>(null);
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [addressModalOpen, setaddressModalOpen] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords: [number, number] = [
            pos.coords.latitude,
            pos.coords.longitude,
          ];
          setUserPosition(coords);
          setMapCenter(coords);
          setSelectedLocation(coords);
        },
        (error) => {
          console.warn("Geolocation error:", error);
        }
      );
    }
  }, []);

  useEffect(() => {
    fetchWorkers(1);
  }, [service, selectedLocation]);

  const fetchWorkers = async (pageNum = 1) => {
    if (!selectedLocation) return;
    setLoading(true);
    try {
      const res = await Axiosinstance.get(`/worker/${service}`, {
        params: {
          lat: selectedLocation[0],
          lon: selectedLocation[1],
          page: pageNum,
        },
      });
      setWorkers(res.data.workers || []);
      setPage(res.data.page || 1);
      setTotalPages(res.data.totalPages || 1);
    } catch (err) {
      setError("Failed to fetch workers.");
    } finally {
      setLoading(false);
    }
  };

  const handleLocationSearch = async () => {
    if (!locationSearch) return;
    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationSearch)}`;
      const response = await fetch(url, {
        headers: {
          "User-Agent": "servigo-app-example (your-email@example.com)",
        },
      });
      const data = await response.json();
      if (data?.length > 0) {
        const coords: [number, number] = [
          parseFloat(data[0].lat),
          parseFloat(data[0].lon),
        ];
        setMapCenter(coords);
        setSelectedLocation(coords);
      } else {
        alert("Location not found");
      }
    } catch (err) {
      alert("Error searching location");
    }
  };

  const handleUseCurrentLocation = () => {
    setMapCenter(userPosition);
    setSelectedLocation(userPosition);
  };

  const handleBooking = async () => {
    if (!selectedLocation) return alert("Select a location first.");
    if (!selectedWorker) return alert("Select a worker before booking.");
    if (!selectedDate) return alert("Please select a booking date.");
 
     setaddressModalOpen(true)
    
  };

  
  const handleSearch = async (pageNum = 1) => {
  if (!selectedLocation) return;
  setLoading(true);
  try {
    const res = await Axiosinstance.get(
      `/worker/${service}/${searchTerm || ""}`,
      {
        params: {
          lat: selectedLocation[0],
          lon: selectedLocation[1],
          page: pageNum,
        },
      }
    );
    setWorkers(res.data.workers || []);
    setPage(res.data.page || 1);
    setTotalPages(res.data.totalPages || 1);
  } catch (err) {
    console.error("Failed to fetch workers:", err);
    setError("Failed to fetch workers.");
  } finally {
    setLoading(false);
  }
};

console.log("selectedWorker: " + selectedWorker)

 const totalAmount = 5000;

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};


const checkoutPayment = async (orders) => {
  console.log(orders)
  const options = {
    key: "rzp_test_qx44vDxeEWIMqV", // 🔁 Use test key in development
    amount: orders.amount,
    currency: orders.currency,
    name: "VINERGO",
    description: "Thank you for shopping with us!",
    order_id: orders.id, // must be valid Razorpay order_id
    handler: async function (response) {
      Swal.fire({
        title: "Booking Confirmed!",
        text: "Your order has been successfully placed.",
        icon: "success",
        confirmButtonColor: "#000000",
        confirmButtonText: "OK",
      }).then(async () => {
        const paymentDetails = {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        };
        try {
          await Axiosinstance.post("/payement/verification", paymentDetails);
          console.log("✅ Payment verified!");
           window.location.href = "/booking";
        } catch (err) {
          console.error("❌ Payment verification failed", err);
          Swal.fire("Verification Failed", "Could not verify payment.", "error");
        }
      });
    },
    prefill: {
      name: "aghil",
      email: "aghil@gmail.com",
      contact: "6282717057",
    },
    theme: {
      color: "#AF6900",
    },
  };

  const razorpay = new window.Razorpay(options);

  razorpay.on("payment.failed", function (response) {
    Swal.fire({
      title: "Payment Failed",
      text: response.error.description || "Something went wrong.",
      icon: "error",
    });
  });
 console.log("🔍 Razorpay Options:", options);
  razorpay.open();
};

const newBooking = async () => {
  try {
    const loaded = await loadRazorpayScript();
    if (!loaded) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const response = await Axiosinstance.post("/payement", {
      amount: totalAmount, // in rupees
      currency: "INR",
    });

    if (response?.data?.order) {
      console.log(response.data.order, "✅ Order received");
      await checkoutPayment(response.data.order);
      
    } else {
      throw new Error("❌ Order creation failed");
    }
  } catch (error) {
    console.error("Booking Error:", error);
    Swal.fire("Error", "Booking failed. Please try again.", "error");
  }
};

    
      const handleSubmitForPay = ()=>{
        console.log("in the booking");
        
        newBooking()
      }


  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-center flex gap-5 items-baseline">
          <div className="bg-indigo-600 p-2 rounded-xl shadow">
            <Briefcase size={24} className="text-white" />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Find {service || "your"} Professional
            </h1>
            <div className="flex gap-1 mt-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4 text-indigo-600" />
              Expert <span className="font-semibold text-indigo-700 ml-1">{service}</span> near you
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {/* Map Panel */}
          <Card className="p-4 shadow-md w-full">
            <Input
              type="text"
              placeholder="Search location"
              value={locationSearch}
              onChange={(e) => setLocationSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLocationSearch()}
              className="mb-2"
            />
            <Button
              onClick={handleLocationSearch}
              className="w-full mb-2 bg-indigo-500 text-white"
            >
              <Search size={14} className="mr-1" /> Search
            </Button>
            <Button
              onClick={handleUseCurrentLocation}
              variant="outline"
              className="w-full mb-4 text-xs"
            >
              <Navigation size={12} className="mr-1" /> Use My Location
            </Button>
            <div className="h-[300px] overflow-hidden rounded border">
              <MapContainer
                center={mapCenter}
                zoom={13}
                scrollWheelZoom={true}
                className="h-full w-full"
                key={mapCenter.toString()}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {selectedLocation && (
                  <Marker position={selectedLocation}>
                    <Popup>Selected Location</Popup>
                  </Marker>
                )}
                <Marker position={userPosition}>
                  <Popup>Your Location</Popup>
                </Marker>
              </MapContainer>
            </div>
          </Card>

          {/* Professionals Panel */}
          <Card className="p-4 shadow-md w-full">
            <h2 className="text-lg font-semibold mb-4">Available Professionals</h2>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-end mb-4">
              <div className="flex w-full sm:w-auto gap-2">
                <Input
                  type="text"
                  placeholder="Search by name"
                  className="text-sm w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button className="text-sm" onClick={() => handleSearch()}>
                  Search
                </Button>
              </div>

              < div className="w-full sm:w-[140px]">
                <Select value={sortOption} onValueChange={(value) => setSortOption(value)}>
                  <SelectTrigger className="text-sm w-full">
                    <SelectValue placeholder="Rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating_low">Low To High</SelectItem>
                    <SelectItem value="rating_high">High To Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
             <div className="mt-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Booking Date</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date: Date | null) => setSelectedDate(date)}
                className="w-full border px-3 py-2 rounded text-sm"
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
                placeholderText="Choose a date"
              />
            </div>

            <div className="space-y-3 mt-2 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              {loading ? (
                <div className="text-center py-6 text-sm">Loading...</div>
              ) : error ? (
                <div className="bg-red-100 text-red-600 text-sm p-2 rounded">{error}</div>
              ) : workers.length > 0 ? (
                workers.map((worker, idx) => (
                  <Card
                    key={idx}
                    className={`p-3 border ${selectedWorker?.username === worker.username
                      ? "border-indigo-500 bg-indigo-50"
                      : "border-indigo-100"
                      } hover:shadow transition`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm font-semibold">
                          {worker.username[0].toUpperCase()}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-800">{worker.username}</div>
                          <div className="text-xs text-gray-500 flex items-center gap-1">
                            <MapPin size={12} className="inline text-blue-500 mr-1" />
                            {worker?.place || "Unknown Place"}, {worker?.city || "Unknown District"}
                          </div>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="text-xs bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1"
                        onClick={() => setSelectedWorker(worker)}
                      >
                        {selectedWorker?.username === worker.username ? "Selected" : "Select"}
                      </Button>
                    </div>
                  </Card>
                ))
              ) : (
                <div className="text-center py-6 text-sm text-gray-500">
                  <Search size={32} className="mx-auto mb-2 text-gray-400" />
                  No professionals found
                </div>
              )}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-between items-center mt-4">
                <Button
                  disabled={page === 1}
                  onClick={() => fetchWorkers(page - 1)}
                  className={`bg-gray-600 px-2  ${page === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  Previous
                </Button>
                <span className="text-sm">
                  Page <strong>{page}</strong> of <strong>{totalPages}</strong>
                </span>
                <Button
                  disabled={page === totalPages}
                  onClick={() => fetchWorkers(page + 1)}
                  className={`bg-gray-600 px-2  ${page === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  Next
                </Button>
              </div>
            )}
           

           <Button
              onClick={handleBooking}
              className="mt-4 w-full bg-indigo-600 text-white"
              disabled={!selectedWorker || !selectedLocation || !selectedDate}
            >
              Book Now
            </Button>
          </Card>
        </div>
      </motion.div>
      <AddressModal
  isOpen={addressModalOpen}
  onClose={() => setaddressModalOpen(false)}
  loading={loading}
  onSave={async({ address, phone }) => {
    try {
      const data={
      address:address,
      phone:phone
    }
    const res = await Axiosinstance.post(`/add-address/${userId}`, data);

    if (res.status !== 200 && res.status !== 201) {
      throw new Error(res.data?.message || 'Failed to save');
    }
 
    const Bookingdetails={
      selectedservice:service,
      SelectedWorker:selectedWorker,
      SelectedDate:selectedDate,
      UserAddress: address,
      Phone:phone
    }
    const resp=await Axiosinstance.post(`/booking/${userId}`, Bookingdetails);

    //     
    console.log("Booking details:");
    console.log("selected services:",service)
    console.log("Selected Worker:", selectedWorker);
    console.log("Selected Location:", selectedLocation);
    console.log("Selected Date:", selectedDate);
    console.log("User Address:", address);
    console.log("Phone:", phone);
      // Router.push('/booking')
      handleSubmitForPay(); 
    } catch (error) {
      console.log(error)
    }
  }}
/>

    </div>
  );
};

export default WorkerSelectorPage;
