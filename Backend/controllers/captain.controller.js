const { validationResult } = require("express-validator");
const captainModle = require("../models/captain.model");
const captainService = require("../services/captain.service");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.registerCaptain = async (req,res,next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }
    const {fullname,email,password,vehicle} = req.body;
    const isCaptainAlreadyExist = await captainModle.findOne({email});
    if(isCaptainAlreadyExist){
        return res.status(400).json({message:"Captain already exist with this email"});
    }
    const hashedPassword = await captainModle.hashPassword(password);
    const newCaptain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email: email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    })

    const token = newCaptain.generateAuthToken();
    res.status(201).json({ token , newCaptain});
}

module.exports.logingCaptain = async (req,res,next)=>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }
    const {email,password} = req.body;
    const captain = await captainModle.findOne({email});
    if(!captain){
        return res.status(400).json({message:"Captain not found with this email"});
    }
    const isPasswordMatch = await captain.comparePassword(password);
    if(!isPasswordMatch){
        return res.status(400).json({message:"Password not match"});
    }
    const token = captain.generateAuthToken();
    captain.password = '';
    res.cookie('token',token)
    res.status(200).json({token,captain});
}

module.exports.getCaptainProfile = async (req,res,next) => {
    const captain = req.captain;
    captain.password = '';
    res.status(200).json(captain);
}

module.exports.logoutCaptain = async (req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        await blacklistTokenModel.create({token})
    }
    res.clearCookie('token');
    res.status(200).json({message:"Captain logout successfully"});
}