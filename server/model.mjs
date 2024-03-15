import mongoose from "mongoose";
import connect from "./Db.mjs";

connect();

const staffSchema = new mongoose.Schema({
  name: String,
  designation: String,
  timeIn: String,
  timeOut: String,
  shift: String,
  imgAdd: String,
});

const staff = new mongoose.model("staffMember", staffSchema);

const attendanceSchema = new mongoose.Schema({
  name: String,
  timeIn: String,
  timeOut: String,
  date: String,
});

export const attendanceList = new mongoose.model(
  "attendanceList",
  attendanceSchema
);

export default staff;
