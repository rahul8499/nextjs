import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import { CRYPTOJS_SECRET } from "@/Base_url";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    const {name, email} = req.body
    let u = new User({ name, email, password: CryptoJS.AES.encrypt(req.body.password, `${CRYPTOJS_SECRET}`).toString()});
   await u.save();

    res.status(200).json({ success: "Success" });
  } else {
    res.status(400).json({ error: "this method is not allowed" });
  }
};

export default connectDb(handler);
