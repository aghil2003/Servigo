// models/Address.js
import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Phone number must be 10 digits'],
  },
}, { timestamps: true });

const Address = mongoose.model('Address', AddressSchema);
export default Address;
