import mongoose from 'mongoose';

const WorkerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password:{type: String, required: false },
  photo: {type:String} ,
  WorkeField: {type: String, required: false },
  place: { type: String, required: true },
  city: { type: String, required: true },
  postcode:{type:Number,required:true}

});

export default mongoose.model('Worker', WorkerSchema);
