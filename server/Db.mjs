import mongoose from "mongoose";
import "dotenv/config";
const URI = process.env.MONGO_URI;

const connect = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection successful to DB");
  } catch (error) {
    console.error("Database connection failed");
    process.exit(0);
  }
};

export default connect;
