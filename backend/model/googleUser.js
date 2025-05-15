import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true },
  displayName: String,
  email: String,
  photo: String,
});

export default  mongoose.model("googleUser", userSchema);;