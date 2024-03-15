import { attendanceList } from "../model.mjs";

const sendTimings = async (req, res) => {
  const { name, time, date } = req.body;
  const d = await attendanceList.where({ name: name, date: date });
  console.log(date);
  if (d.length > 0) {
    await attendanceList.findOneAndUpdate(
      {
        date: date,
        name: name,
      },
      { timeOut: time }
    );
  } else {
    await attendanceList.create({
      name: name,
      timeIn: time,
      date: date,
    });
  }
  res.send("successfully send");
};

export default sendTimings;
