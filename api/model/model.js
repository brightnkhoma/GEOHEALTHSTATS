import mongoose from "mongoose";


const DiseaseSchema = new mongoose.Schema({    
    name : String,
    location : {type:mongoose.Schema.Types.ObjectId, ref:"districts"},
    count : String,
    causes : String,
    numberOfRecoveries: String,
    numberOfDeaths: String,
    recommendation : String,
    author : {type:mongoose.Schema.Types.ObjectId,ref:"User"}


},{timestamps:true})

const districtSchema = new mongoose.Schema({
    _id:{type:mongoose.Schema.Types.ObjectId},
    name: String,
    location: String
},)

const userSchema = new mongoose.Schema({
    name: {type:String, unique:true},
    email: {type:String,unique:true},
    password : String,
    image : String,
})

const user = mongoose.model("User", userSchema)
const disease = mongoose.model("Disease",DiseaseSchema)
const district = mongoose.model("Disease",districtSchema)

export {user,disease,district}