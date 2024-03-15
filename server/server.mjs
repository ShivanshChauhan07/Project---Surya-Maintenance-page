import express, { urlencoded } from "express";
import "dotenv/config";
import staff from "./model.mjs";
import data from "./routes/route.mjs";
import cors from "cors";

const app = express();

// const main = async () => {
//   await staff.create({
//     name: "Shivam",
//     designation: "IT advisor",
//     timeIn: "10:00 am",
//     timeOut: "5:00 pm",
//     shift: "Morning",
//     imgAdd: "../../images/employee/shivam.jpg",
//   });
// };

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", data);

app.get("/", (req, res) => {
  // main();
  res.send("Successfully inserted data");
});

app.listen(5000, () => {
  console.log("Listening on port 5000 successfully");
});
