import mongoose from "mongoose";

const personSchema = mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  phone: Number,
  address: String,
  title: String,
  description: String,
  imageFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PersonModal = mongoose.model("Person", personSchema);

export default PersonModal;
