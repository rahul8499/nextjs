import connectDb from "@/middleware/mongoose";
import Order from "@/models/Order";
// import Product from "@/models/Product";
// import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    let order = new Order({
      userName: req.body.userName,
      email: req.body.email,
      address: req.body.address,
      phone: req.body.phone,
      city: req.body.city,
      state: req.body.state,
      pincode: req.body.pincode,
      products: req.body.cart,
      totalAmount: req.body.totalAmount,
      // productName: req.body[i].productName,
      // productPrice: req.body[i].productPrice,
      // productQty: req.body[i].productQty,
      // productSize: req.body[i].productSize,
      // productColor: req.body[i].productColor,

      //
    });
    await order.save();

    res.status(200).json({ success: "Success" });
  } else {
    res.status(400).json({ error: "this method is not allowed" });
  }
};

export default connectDb(handler);
