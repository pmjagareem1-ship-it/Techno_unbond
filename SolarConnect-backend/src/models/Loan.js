import mongoose from "mongoose";
const s=new mongoose.Schema({user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},amount:Number,interestRate:Number,tenureYears:Number,emi:Number,plan:String,documents:[String],status:{type:String,enum:["draft","applied","under-review","approved","rejected","disbursed"],default:"draft"}},{timestamps:true}); export default mongoose.model("Loan",s);
