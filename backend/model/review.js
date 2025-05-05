import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  customer: String,
  photo: String,
  rating: Number,
  comments: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.model('Review', ReviewSchema);

