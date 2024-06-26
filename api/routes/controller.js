import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { errorHandler } from '../error/error.js'
import {disease,district,user,hospital} from '../model/model.js'



export const addDistrict = async(req,res,next)=>{
    try {
        
        const {name,location} = req.body;
        const exists = await district.findOne({name});
        if(exists) return next(errorHandler(400,`district ${name} already exists`))
        const dis = new district({_id:new mongoose.Types.ObjectId,name,location})
        await dis.save()

        res.status(200).json(`district ${name} added successifully!`)

    } catch (error) {
        next(errorHandler(500,error.message))
    }

}

export const addDisease = async(req,res,next)=>{
    try {
        const {name,causes,count,location,numberOfDeaths,numberOfRecoveries,recommendation,email} = req.body
        const admin = await user.findOne({email})
        if(!admin) return next(errorHandler(500,"You are not authorised to add this data"))
        const loc = await district.findOne({name:location})
        if(!loc) return next(errorHandler(500,"this location does not exist"))
        const dis = new disease({causes,count,location:loc._id,name,numberOfDeaths,recommendation,numberOfRecoveries,author:admin._id,});

        await dis.save();
        res.status(400).json(`added ${name} successifully`)
    } catch (error) {
        next(errorHandler(500,error.message))
        
    }
}

export const addUser = async(req,res,next)=>{
    try {
        
        const {email,image,name,passord} = req.body;
        const _user = await user.findOne({email})
        if(_user) return next(errorHandler(500,`user already exists!!1`))
        const encryptedPassword = bcrypt.hashSync(passord,10)
        const admin = new user({image,name,email,password:encryptedPassword})
        await admin.save();
        code = 200
        res.status(code).json(`welcome ${name} to geohealthstats!!!!`)
    } catch (error) {
        next(errorHandler(500,error.message))
    }
}

export const getDiseaase = async(req,res,next)=>{
    try {
        
        const {name} = req.body
        const data = await disease.find({name}).populate(['location','author'])
        if(!data) return next(errorHandler(500).json(`disease ${name} in not recorded in our database`))
        res.status(200).json(data)

    } catch (error) {
        next(500,errorHandler(500,error.message))

    }
}

export const addHospital = async(req,res,next)=>{
    try {
        
        const {name,location,district} = req.body;
        const hospitalDistrict = await district.findOne({name:district})
        if(!district) return next(errorHandler(500,`districts ${district} does not exist or try to spell it correctly and capitalise the first character`))
        const hosp = new hospital({_id:new mongoose.Types.ObjectId,name,district:hospitalDistrict._id,location})
    } catch (error) {
        next(errorHandler(500,error.message))
    }
}


