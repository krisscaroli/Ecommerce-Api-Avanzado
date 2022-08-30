import mongoose from "mongoose";

const schema = mongoose.schema({
    total: Number,
    paymentDate: Date,
    products: [ new mongoose.Schema({
        amount: Number,
        price: Number,
        product: {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Product"

        }
    })]

});

export default mongoose.model("Cart", schema);
