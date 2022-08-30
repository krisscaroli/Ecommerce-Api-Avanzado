import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  description: String,
  especification: String,
  price: Number,
  amount: Number,
  photo: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

export default mongoose.model("Product", schema);
