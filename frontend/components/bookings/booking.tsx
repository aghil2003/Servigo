// "use client"
// import { useState, useEffect } from "react";
// import Axiosinstance from "@/axios/axiosInstance";

// export default function Bookingpage() {
//   const [booking, setBooking] = useState([]);
//   const userId = "682c791005cb512735c615e5";

//   useEffect(() => {
//     const fetchBooking = async () => {
//       try {
//         const res = await Axiosinstance.get(`/booking/${userId}`);
//         console.log(res)
//         setBooking(res.data.booking);
//       } catch (error) {
//         console.error("Error fetching booking:", error);
//       }
//     };

//     fetchBooking();
//   }, [userId]);

//  return (
//   <div>
//     <h1 className="text-xl font-bold mb-4">My Bookings</h1>
//     {booking.length > 0 ? (
//       <ul className="space-y-4">
//         {booking.map((b, index) => (
//           <li key={index} className="border p-4 rounded shadow">
//             <p><strong>Service:</strong> {b.service}</p>
//             <p><strong>Date:</strong> {new Date(b.date).toLocaleString()}</p>
//             <p><strong>Address:</strong> {b.address}</p>
//             <p><strong>Worker Name:</strong> {b.workerName || "N/A"}</p>
//           </li>
//         ))}
//       </ul>
//     ) : (
//       <p>No bookings found</p>
//     )}
//   </div>
// );
// }

"use client";
import { useState, useEffect } from "react";
import Axiosinstance from "@/axios/axiosInstance";

export default function Bookingpage() {
  const [booking, setBooking] = useState([]);
  const userId = "682c791005cb512735c615e5";

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await Axiosinstance.get(`/booking/${userId}`);
        console.log(res);
        setBooking(res.data.booking);
      } catch (error) {
        console.error("Error fetching booking:", error);
      }
    };

    fetchBooking();
  }, [userId]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">My Bookings</h1>

      {booking.length > 0 ? (
        <ul className="space-y-6">
          {booking.map((b, index) => (
            <li key={index} className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 transition hover:shadow-lg">
              <div className="space-y-2">
                <p><span className="font-semibold text-gray-600">Service:</span> {b.service || b.selectedservice}</p>
                <p><span className="font-semibold text-gray-600">Date:</span> {new Date(b.date || b.SelectedDate).toLocaleString()}</p>
                <p><span className="font-semibold text-gray-600">Address:</span> {b.address || b.UserAddress}</p>
                <p><span className="font-semibold text-gray-600">Worker:</span> {b.workerName || b?.SelectedWorker?.username || "N/A"}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No bookings found</p>
      )}
    </div>
  );
}
