import mongoose from 'mongoose';

const YearlyDataSchema = new mongoose.Schema({
  year: String,
  income: Number,
  jobs: Number,
  customer: Number,
});

export default mongoose.model('YearlyData', YearlyDataSchema);
