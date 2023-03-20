const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    // required: true
    // unique: true

    userName: { type: String },
    email: { type: String },
    address: { type: String },
    phone: { type: Number },
    city: { type: String },
    state: { type: String },
    pincode: { type: Number },
    products: { type: Object },
    totalAmount: { type: Number },
    // products: [
    //   {
    //     productsId: { type: String },
    //     quantity: { type: Number, default: 1 },
    //   },
    // ],
  },
  { timestamps: true }
); // created and updated at property create karnyasathi mongoose schema cha second argument use karu shakta {timestamp: true} ani ha ek object asnar ahe tyamule{}
export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
// mongoose.models = {}; // cannot overwrite product model ha error solve jevha import hoyil punha bnvnyacha try krto tymule error yeto
// export default mongoose.model("Order", OrderSchema); // OrderSchema ne Schema bnel table bnel ani ya table ch nav asel Order

// export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
