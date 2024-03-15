import staff from "../model.mjs";

const imageData = async () => {
  const data = await staff.find({});
  return data;
};

export const getImage = async (req, res) => {
  const response = await imageData();
  res.json(response);
};
