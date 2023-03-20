import Order from "@/models/Order";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  let order = await Order.find();
  res.status(200).json({ order });
};

export default connectDb(handler);
