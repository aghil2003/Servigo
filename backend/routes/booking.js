import express from "express";
const bookingRoute=express.Router();
import bookingModel from '../model/booking.js'; 
import WorkerModel from "../model/Worker.js";
import {createOrder,verifyPayment} from "../controllers/RazorPay.js"


bookingRoute.post('/payement',createOrder)
bookingRoute.post('/payement/verification',verifyPayment)

bookingRoute.post('/booking/:userId', async (req, res) => {
  try {
    const {  selectedservice,SelectedWorker,SelectedDate,UserAddress,Phone} = req.body;
    const { userId } = req.params;

    if (!selectedservice|| !SelectedWorker|| !SelectedDate|| !UserAddress || !Phone|| !userId) {
      return res.status(400).json({ message: 'booking detials and userId are required' });
    }

    const newAddress = new bookingModel({ selectedservice,SelectedWorker,SelectedDate,UserAddress,Phone, userId });
    await newAddress.save();

    return res.status(201).json({newAddress, message: 'booking saved successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});


bookingRoute.get('/booking', async (req, res) => {
  try {

    // Fetch bookings and populate the worker name
    const data = await bookingModel
      .find()
      .populate('SelectedWorker', 'username'); // populate only the 'name' field from Worker
    
      
      console.log(data,"book")

    if (!data || data.length === 0) {
      return res.status(404).json({ message: 'No bookings found for this user' });
    }

    const booking = data.map(b => ({
    BookingId:b._id,
  service: b.selectedservice,
  date: b.SelectedDate,
  address: b.UserAddress,
  phone: b.Phone,
  workerName: b.SelectedWorker?.username || 'Unknown',
  status: b.status
}));

    console.log(booking)

    return res.status(200).json({ booking });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});
// import bookingModel from '../model/booking.js'; 
// import WorkerModel from "../model/Worker.js";

bookingRoute.get('/booking/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: 'userId is required' });
    }

    // Fetch bookings and populate the worker name
    const data = await bookingModel
      .find({ userId })
      .populate('SelectedWorker', 'username'); // populate only the 'name' field from Worker
    
      
      // console.log(data,"book")

    if (!data || data.length === 0) {
      return res.status(404).json({ message: 'No bookings found for this user' });
    }

    const booking = data.map(b => ({
  BookingId:b._id,
  service: b.selectedservice,
  date: b.SelectedDate,
  address: b.UserAddress,
  phone: b.Phone,
  workerName: b.SelectedWorker?.username || 'Unknown',
  status:b.status
}));

    console.log(booking,"booking test")

    return res.status(200).json({ booking });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});


// Update order status
bookingRoute.put("/order/:id", async (req, res) => {
  try {
    const { status } = req.body;

    const updatedOrder = await bookingModel.findByIdAndUpdate(
      req.params.id,
      { status: status || "confirmed" },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order updated", updatedOrder });
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({ message: "Server error" });
  }
});


// bookingRoute.js or bookingRoute.ts
bookingRoute.put("/order/:id", async (req, res) => {
  try {
    const { status } = req.body;
    console.log(status)
    console.log( req.params.id," req.params.id")

    const updatedOrder = await bookingModel.findByIdAndUpdate(
      req.params.id,
      { status: status || "confirmed" },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order updated", updatedOrder });
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({ message: "Server error" });
  }
});



export default bookingRoute;