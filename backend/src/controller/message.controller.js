import { messageModel } from "../models/message.model.js";
import CustomError from "../utils/custom.error.js";
import { managerModel } from "../models/manager.model.js";

const messageController = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message)
      return new CustomError("All Fields Are required", 400);

    const response = await messageModel.insertOne({
      track: false,
      name: name,
      email: email,
      message: message,
    });

    res.json({
      response: response,
    });
  } catch (error) {
    throw new CustomError(error.message);
  }
};

const dashboardController = async (req, res) => {
  const data = await messageModel
    .find({})
    .select("-email -createdAt -updatedAt");
  res.json({
    data,
  });
};

const managerController = async (req, res) => {
  const { username, password } = await req.body;

  if (!username || !password)
    throw new CustomError("Missing Credientials", 400)

  const manager = await managerModel.findOne({ username, password });

  if (!manager)
    throw new CustomError("Invalid Credientials!", 401);

  const data = await messageModel.find({});
  res.json({
    status: 200,
    data,
  });
};

export { messageController, dashboardController, managerController };
