import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let p = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i])   //findByIdAndUpdate he mongoose ch function ahe update karnasathi he ek promise return kart , first argument id and second argument eka peksha jast update karnyasathi
   
    }
    res.status(200).json({ success: "Success" });
  } else {
    res.status(400).json({ error: "this method is not allowed" });
  }
};

export default connectDb(handler);
