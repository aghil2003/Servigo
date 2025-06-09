import express from "express";
const bookingRoute=express.Router();
import bookingModel from '../model/booking.js'; 
import WorkerModel from "../model/Worker.js";

bookingRoute.post('/booking/:userId', async (req, res) => {
  try {
    const {  selectedservice,SelectedWorker,SelectedDate,UserAddress,Phone} = req.body;
    const { userId } = req.params;

    if (!selectedservice|| !SelectedWorker|| !SelectedDate|| !UserAddress || !Phone|| !userId) {
      return res.status(400).json({ message: 'booking detials and userId are required' });
    }

    const newAddress = new bookingModel({ selectedservice,SelectedWorker,SelectedDate,UserAddress,Phone, userId });
    await newAddress.save();

    return res.status(201).json({ message: 'booking saved successfully' });
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
    
      
      console.log(data,"book")

    if (!data || data.length === 0) {
      return res.status(404).json({ message: 'No bookings found for this user' });
    }

    const booking = data.map(b => ({
  service: b.selectedservice,
  date: b.SelectedDate,
  address: b.UserAddress,
  phone: b.Phone,
  workerName: b.SelectedWorker?.username || 'Unknown'
}));

    console.log(booking)

    return res.status(200).json({ booking });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});


export default bookingRoute;