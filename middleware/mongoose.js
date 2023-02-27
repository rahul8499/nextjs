import mongoose from "mongoose";

const connectDb = async(handleer)=>{ // connectdb ka argument hai handleer
    if (mongoose.connection[0].readyState) {
      //jitne bhi mongoose connection hai unka pahila connection readyState hai mtalb already connection hai
      return handleer(req, res);
    } 

    await mongoose.connect(process.env.MONGO_URI)
    return handleer(req, res);

}

export default connectDb