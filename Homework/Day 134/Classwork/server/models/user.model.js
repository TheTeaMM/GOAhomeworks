import mongoose  from "mongoose";
const UserSchema = new mongoose.Schema({
      name: String,
      username: String,
      age: Number,   
})
const User = mongoose.model("users", userschema)