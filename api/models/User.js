import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  lastname: String,
  phone: String,
  email: String,
  password: String,
  deliveryAddress: String,
  street: String,
  location: String,
  outdoorNumber: Number,
  intdoorNumber: Number,
  betweenStreets:String,
  city: String,
  country: String,
  zipCode:String,
  references: String,
  personalContact: String,
  role: {
    type: String,
    enum: ['Administrator', 'Seller', 'Customer'],
    default: 'Seller',

  },

});

export default mongoose.model("User", schema);
