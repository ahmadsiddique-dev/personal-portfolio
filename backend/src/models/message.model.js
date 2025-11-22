import mongoose from "mongoose";

// I know what it does if you don't then you're not a fu**g programmer.

const messsageSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true
    },
    message : {
        type : String,
        require : true
    },
    track : {
        type : Boolean,
        require : true
    }
}, {timestamps : true})

export const messageModel = mongoose.model("Message", messsageSchema);