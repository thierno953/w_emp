import mongoose from "mongoose";

const personSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  address: String,
  title: String,
  creator: String,
  description: String,
  imageFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PersonModal = mongoose.model("Person", personSchema);

export default PersonModal;
