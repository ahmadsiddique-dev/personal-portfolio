import mongoose from "mongoose";
import CustomError from "../utils/custom.error.js";

// You know what is it doing it is obvious from name.

const dbConnection = async () => {
    try {
        const conInstance = await mongoose.connect(`${process.env.MONGODB_URI}/messages`)
        console.log("HOST : ", conInstance.connection.host)
    } catch (error) {
        throw new CustomError(
        `DBCONNECTION :: ERROR :: ${error.message || "Unable to setup DB"}`,
        error.code || 500
    );
    }
}

export default dbConnection;