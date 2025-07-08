// models/bookingModel.js
import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  selectedservice: { type: String, required: true },
  SelectedWorker: { type: mongoose.Schema.Types.ObjectId, ref: 'Worker', required: true },
  SelectedDate: { type: Date, required: true },
  UserAddress: { type: String, required: true },
  Phone: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
 status: {
  type: String,
  enum: ["pending", "confirmed", "completed", "cancelled"],
  default: "pending",
}
}, { timestamps: true });

export default mongoose.model('Booking', bookingSchema);
