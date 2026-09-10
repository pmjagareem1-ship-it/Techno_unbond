import mongoose from "mongoose";
const s=new mongoose.Schema({user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},available:{type:Number,default:0},pending:{type:Number,default:0},used:{type:Number,default:0},history:[{type:{type:String},amount:Number,description:String,createdAt:{type:Date,default:Date.now}}]},{timestamps:true}); export default mongoose.model("Credit",s);
