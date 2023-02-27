const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // he field ahe userId, products,address, amount, status
  products: [
    {
      productsId: { type: String },
      quantity: { type: Number, default: 1 },
    },
  ],
  address: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, default: 'pending', required: true },
}, {timestamps: true}); // created and updated at property create karnyasathi mongoose schema cha second argument use karu shakta {timestamp: true} ani ha ek object asnar ahe tyamule{}


mongoose.models = {} // cannot overwrite product model ha error solve jevha import hoyil punha bnvnyacha try krto tymule error yeto
export default mongoose.model("Order", OrderSchema) // OrderSchema ne Schema bnel table bnel ani ya table ch nav asel Order