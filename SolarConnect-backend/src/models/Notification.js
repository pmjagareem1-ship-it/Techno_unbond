import mongoose from "mongoose";
const s=new mongoose.Schema({user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},title:String,message:String,type:{type:String,enum:["order","service","loan","credit","maintenance","system"],default:"system"},read:{type:Boolean,default:false}},{timestamps:true}); export default mongoose.model("Notification",s);
