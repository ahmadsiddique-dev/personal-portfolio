import { messageModel } from "../models/message.model.js";
import CustomError from "../utils/custom.error.js";
import { managerModel } from "../models/manager.model.js";
import cookieParser from "cookie-parser";

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


  const messageStatusController = async (req, res) => {
    const data = await messageModel.aggregate([
      {
        $project : {
          name : 1,
          track : 1,
          messageLength : { $strLenCP : "$message"}
        }
      }
    ]);
    
    res.json({
      success : true,
      data  
    })
  }

  const handleDeleteMessage = async (req, res) => {
    const response = await messageModel.deleteOne({id : req._id})
    if (!response) throw new CustomError("message not found", 500)

    res.json({
      success : true,
      status : 201
    })
  }

  const handleUpdateStatus = async (req, res) => {
    const response = await messageModel.updateOne({ id : req._id}, {$set : { track : true }})
    if (!response) throw new CustomError("message not found", 500)

    res.json({
      success : true,
      status : 200
    })
  }


const dashboardController = async (req, res) => {
  const data = await messageModel.aggregate([
    {$project : {
      name : 1,
      email : 1,
      message : 1,
      track : 1,
      createdAt : 1
    }}
  ]);
  res.json({
    success : true,
    data,
  });
};

const signupController = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    throw new CustomError("Missing Credentials", 400);

  const existing = await managerModel.findOne({ username });
  if (existing)
    throw new CustomError("User already exists", 400);

  const manager = await managerModel.create({ username, password });

  const refreshToken = manager.generateRefreshToken();

  res.cookie(
    "refreshToken",
    refreshToken,
    {
      httpOnly : true,
      secure : true,
      sameSite: "strict", 
      maxAge: Number(process.env.REFRESH_TOKEN_EXPIRY) || 30 * 24 * 60 * 60 * 1000, 
    }
  )
  res.json({
    success: true,
    message: "Signup successful",
    user: {
      _id: manager._id,
      username: manager.username
    },
    refreshToken,
  });
};


const loginController = async (req, res) => {
  const { username, password } = req.body; 
  console.log(username, password)

  if (!username || !password)
    throw new CustomError("Missing Credientials", 400)

  const manager = await managerModel.findOne({ username });
  
  if (!manager)
    throw new CustomError("Invalid Credientials!", 401);
  
  const refreshToken = await manager.generateRefreshToken()

  

  res.cookie(
    "refreshToken",
    refreshToken,
    {
      httpOnly : true,
      secure : true,
      sameSite : "strict",
      maxAge : Number(process.env.REFRESH_TOKEN_EXPIRY) || 30 * 24 * 60 * 60 * 1000,
    }
  )

  res.json({
    refreshToken,
    success : true,
    status: 200,
  });
};

export { messageController, dashboardController, loginController, signupController, messageStatusController, handleDeleteMessage, handleUpdateStatus };
