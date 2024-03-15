import mongoose from "mongoose";

const URI =
  "mongodb+srv://shivam:shivam123@node-express-project.rr12wyk.mongodb.net/ringroad?retryWrites=true&w=majority&appName=Node-Express-Project";

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
