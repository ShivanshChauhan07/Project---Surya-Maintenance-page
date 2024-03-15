import { attendanceList } from "../model.mjs";

const timings = async (date, name) => {
  const data = await attendanceList.find({ date: date, name: name });
  return data;
};

export const getTimings = async (req, res) => {
  const date = req.query.date;
  const name = req.query.name;
  const response = await timings(date, name);
  //   console.log(response);
  res.json(response);
};
