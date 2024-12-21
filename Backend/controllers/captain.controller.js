const { validationResult } = require("express-validator");
const captainModle = require("../models/captain.model");
const captainService = require("../services/captain.service");

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

    const token = newCaptain.generateAuthTiken();
    res.status(201).json({ token , newCaptain});
}