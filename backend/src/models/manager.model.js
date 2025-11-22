import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

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

managerSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10)
    next()
}) 

managerSchema.methods.generateAccessToken = function () {
    return jwt.sign(
    {_id : this._id, username : this.username},
    process.env.ACCESS_TOKEN_SECRET,
    {expiresIn : process.env.ACCESS_TOKEN_EXPIRY}
);
}

managerSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
    {id : this._id, username : this.username},
    process.env.REFRESH_TOKEN_SECRET,
    {expiresIn : process.env.REFRESH_TOKEN_EXPIRY}
)
}

export const managerModel = mongoose.model("manager", managerSchema)