import mongoose from "mongoose";

const connectDb = handler => async (req, res)=>{ // connectdb ka argument hai handleer
    if(mongoose.connections[0].readyState) {
      //jitne bhi mongoose connection hai unka pahila connection readyState hai mtalb already connection hai
      return handler(req, res);
    } 

    await mongoose.connect(process.env.MONGO_URI)
    return handler(req, res);

}

export default connectDb;