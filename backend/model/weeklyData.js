import mongoose from 'mongoose';

const WeeklyDataSchema = new mongoose.Schema({
  day: String,
  income: Number,
  jobs: Number,
  customer: Number,
});

export default mongoose.model('WeeklyData', WeeklyDataSchema);
