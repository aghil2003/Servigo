import mongoose from 'mongoose';

const MonthlyDataSchema = new mongoose.Schema({
  month: String,
  income: Number,
  jobs: Number,
  customer: Number,
});

export default mongoose.model('MonthlyData', MonthlyDataSchema);

