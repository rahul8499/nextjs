

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String, required: true, unique: true },
    img: { type: String, required: true, unique: true },
    category: { type: String, required: true, unique: true }, // kahase bolong karata ha tshirt , mugs, hoodies tyasathi category
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
    availableQty: { type: Number, required: true },
  },
  { timestamps: true }
); // created and updated at property create karnyasathi mongoose schema cha second argument use karu shakta {timestamp: true} ani ha ek object asnar ahe tyamule{}

export default mongoose.model("Product", productSchema) // productSchema ne Schema bnel table bnel ani ya table ch nav asel Order