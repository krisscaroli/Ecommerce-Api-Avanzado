import mongoose from "mongoose";

const schema = new mongoose.Schema({
    code:String,
    type:{
        type:String,
        enum: ['porcentaje', 'monto'],
        default: 'monto',
    },
})

export default mongoose.model("Coupon",schema)