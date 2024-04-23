import mongoose from "mongoose";


const DiseaseSchema = new mongoose.Schema({    
    name : String,
    location : {type:mongoose.Schema.Types.ObjectId, ref:"Districts"},
    count : String,
    causes : String,
    numberOfRecoveries: String,
    numberOfDeaths: String,
    recommendation : String,
    author : {type:mongoose.Schema.Types.ObjectId,ref:"User"}


},{timestamps:true})

const districtSchema = new mongoose.Schema({
    _id:{type:mongoose.Schema.Types.ObjectId},
    name: {type:String,unique:true},
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
const district = mongoose.model("Districts",districtSchema)

export {user,disease,district}