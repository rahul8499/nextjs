const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    // name: { type: String, required: true },
    // email: { type: String, required: true, unique: true },
    // password: { type: String, required: true },
  },
  { timestamps: true }
); // created and updated at property create karnyasathi mongoose schema cha second argument use karu shakta {timestamp: true} ani ha ek object asnar ahe tyamule{}

export default mongoose.models.User || mongoose.model("User", userSchema);

// mongoose.models = {}; // cannot overwrite product model ha error solve jevha import hoyil punha bnvnyacha try krto tymule error yeto
// export default mongoose.model("User", userSchema); // userSchema ne Schema bnel table bnel ani ya table ch nav asel Order
