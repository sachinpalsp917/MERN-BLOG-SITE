import mongoose from "mongoose";
import { db_name } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${db_name}`
    );
    console.log(`Database connected : ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("connection failed ", error);
    process.exit(1);
  }
};

export default connectDB;
