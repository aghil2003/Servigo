import mongoose from "mongoose";

const OtpSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    email:{type: String,require:true},
    otp: { type: String, }, 
    expiresAt: { type: Date, default: () => Date.now() + 60 * 1000, expires: 60 } // Expires in 1 min
  },
  { timestamps: true }
);

const Otp = mongoose.model("Otp", OtpSchema);

export default Otp;
