// import { useState, useEffect } from "react";
// import axiosInstance from "@/axios/axiosInstance";

// export default function OrderPage() {
//   const [order, setOrder] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const res = await axiosInstance.get(`/booking`);
//         console.log(res);
//         setOrder(res.data.booking);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchOrders(); 
//   }, []); 

//   return (
//     <div className="max-w-3xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
//         My Bookings
//       </h1>

//       {order.length > 0 ? (
//         <ul className="space-y-6">
//           {order.map((b, index) => (
//             <li
//               key={index}
//               className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 transition hover:shadow-lg"
//             >
//               <div className="space-y-2">
//                 <p>
//                   <span className="font-semibold text-gray-600">Service:</span>{" "}
//                   {b.service}
//                 </p>
//                 <p>
//                   <span className="font-semibold text-gray-600">Date:</span>{" "}
//                   {new Date(b.date ).toLocaleString()}
//                 </p>
//                 <p>
//                   <span className="font-semibold text-gray-600">Address:</span>{" "}
//                   {b.address }
//                 </p>
//                 <p>
//                   <span className="font-semibold text-gray-600">Worker:</span>{" "}
//                   {b.workerName  || "N/A"}
//                 </p>
//                  <p>
//                   <span className="font-semibold text-gray-600">Status:</span>{" "}
//                   {b.status }
//                 </p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="text-center text-gray-500">No bookings found</p>
//       )}
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import axiosInstance from "@/axios/axiosInstance";

export default function OrderPage() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axiosInstance.get(`/booking`);
        console.log(res.data.booking,"res.data.booking")
        setOrder(res.data.booking);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, []);

 const handleStatusChange = async (bookingId: string, newStatus: string) => {
  console.log(bookingId, "bookingId");
  console.log(newStatus, "newStatus");
  try {
    await axiosInstance.put(`/order/${bookingId}`, { status: newStatus });
    setOrder((prevOrders) =>
      prevOrders.map((b) =>
        b.BookingId === bookingId ? { ...b, status: newStatus } : b
      )
    );
  } catch (err) {
    console.log("Status update failed", err);
  }
};

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        My Bookings
      </h1>

      {order.length > 0 ? (
        <ul className="space-y-6">
          {order.map((b, index) => (
            <li
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 transition hover:shadow-lg"
            >
              <div className="space-y-2">
                <p>
                  <span className="font-semibold text-gray-600">Service:</span>{" "}
                  {b.service}
                </p>
                <p>
                  <span className="font-semibold text-gray-600">Date:</span>{" "}
                  {new Date(b.date).toLocaleString()}
                </p>
                <p>
                  <span className="font-semibold text-gray-600">Address:</span>{" "}
                  {b.address}
                </p>
                <p>
                  <span className="font-semibold text-gray-600">Worker:</span>{" "}
                  {b.workerName || "N/A"}
                </p>

                {/* Status Display */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-gray-600">Status:</span>{" "}
                    <span
                      className={`px-3 py-1 text-sm rounded-full font-medium ${
                        b.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : b.status === "confirmed"
                          ? "bg-blue-100 text-blue-800"
                          : b.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {b.status}
                    </span>
                  </div>

                  {/* Status Update Dropdown */}
                  <select
                    value={b.status}
                    onChange={(e) => handleStatusChange(b.BookingId, e.target.value)}
                    className="ml-4 border rounded px-2 py-1 text-sm"
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
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
