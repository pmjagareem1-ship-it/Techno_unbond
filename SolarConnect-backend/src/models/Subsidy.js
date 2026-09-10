import mongoose from "mongoose";
const s=new mongoose.Schema({title:{type:String,required:true},state:String,description:String,eligibility:[String],documents:[String],applicationGuidance:String,active:{type:Boolean,default:true}},{timestamps:true}); export default mongoose.model("Subsidy",s);
