import staff from "../model.mjs";

const details = async (employName) => {
  const data = await staff.findOne({ name: employName });
  return data;
};

export const getDetails = async (req, res) => {
  const employName = req.query.name;
  const response = await details(employName);
  res.json(response);
};
