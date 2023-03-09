const mongoose = require("mongoose");
// https://m.media-amazon.com/images/I/81nsMsrRB4L._AC_UL1500_.jpg
// https://m.media-amazon.com/images/I/71wPoz1vxpL._AC_UL1500_.jpg
// https://m.media-amazon.com/images/I/81JY6XT8pGL._AC_UL1500_.jpg
// https://m.media-amazon.com/images/I/61RdXJNMRXL._AC_UL1010_.jpg

const productSchema = new mongoose.Schema(
  {
    // unique: true
    title: { type: String, required: true },
    slug: { type: String, required: true }, // slug unique ahe
    desc: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String }, // kahase bolong karata ha tshirt , mugs, hoodies tyasathi category
    size: { type: String, required: true },
    color: { type: String },
    price: { type: Number, required: true },
    availableQty: { type: Number, required: true },
  },
  { timestamps: true }
); // created and updated at property create karnyasathi mongoose schema cha second argument use karu shakta {timestamp: true} ani ha ek object asnar ahe tyamule{}

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);

// mongoose.models = {}; // cannot overwrite product model ha error solve jevha import hoyil punha bnvnyacha try krto tymule error yeto
// export default mongoose.model("Product", productSchema); // productSchema ne Schema bnel table bnel ani ya table ch nav asel Order
