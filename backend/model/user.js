import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  googleId: { type: String, unique: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password:{type: String, required: false },
  photo: {type:String} ,
  role: {
    type: String,
    enum: ['admin', 'user', 'vendor'], 
    default: 'user',
  },
});

export default mongoose.model('User', UserSchema);
