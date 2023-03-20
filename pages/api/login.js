import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import { CRYPTOJS_SECRET, JWT_SECRET } from "@/Base_url";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    let user = await User.findOne({ email: req.body.email });
    const bytes = CryptoJS.AES.decrypt(user.password, `${CRYPTOJS_SECRET}`);  // databse madhla password la decrypt kel same key ne jevha signup la use keli ahe encrypt key
let  decryptPaassword = bytes.toString(CryptoJS.enc.Utf8); // byte la string madhe convert kel 

    if (user) {
      if (
        req.body.email == user.email &&
        req.body.password == decryptPaassword      ) {
          var token = jwt.sign(
            { email: user.email, name: user.name },
            `${JWT_SECRET}`,
            { expiresIn: "2d" } // 2 day after wo logout ho jayega automatic login rahnar nahi
          );

        // secrete he same key ne encrypt  kel user chya password la ani te match kel database madhlya passwor sobt
        res.status(200).json({ success: true, token });
      } else {
        res.status(200).json({
          success: false,
          error: "invalid Credentials ",
        });
      }
    } else {
      res.status(200).json({ success: false, error: "No user Found" });
    }
  } else {
    res.status(400).json({ error: "this method is not allowed" });
  }
};

export default connectDb(handler);
