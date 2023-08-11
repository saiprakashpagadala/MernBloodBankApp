import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to mongodb database ${mongoose.connection.host}`.bgYellow.black);
  } catch (error) {
    console.log(`mongo db error ${error}`.bgGreen.white);
  }
};

export default connectDB;
