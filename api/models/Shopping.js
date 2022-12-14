import mongoose from "mongoose";

const schema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
  },
  coupon: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Coupon",
  },
  partialAmount: Number,
  totalAmount: Number,
});

export default mongoose.model("Shopping", schema);
