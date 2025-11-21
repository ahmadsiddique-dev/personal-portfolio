import mongoose from "mongoose";

const managerSchema = new mongoose.Schema({
    username :{
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    
})

export const managerModel = mongoose.model("manager", managerSchema)