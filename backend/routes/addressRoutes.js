import express from "express";
const addressRoute=express.Router();
import AddressModel from '../model/address.js'; 

addressRoute.post('/add-address/:userId', async (req, res) => {
  try {
    const { address, phone } = req.body;
    const { userId } = req.params;

    if (!address || !phone || !userId) {
      return res.status(400).json({ message: 'Address, phone and userId are required' });
    }

    const newAddress = new AddressModel({ address, phone, userId });
    await newAddress.save();

    return res.status(201).json({ message: 'Address saved successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});

export default addressRoute;