import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  status: String,
  amount: Number,
  customer: String,
  date: { type: Date, default: Date.now },
  services: [String], 
});

export default mongoose.model('Order', OrderSchema);
