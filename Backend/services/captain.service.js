const captainModle = require('../models/captain.model');

module.exports.createCaptain = async ({firstname, lastname, email, password , color, plate, capacity, vehicleType}) => {
    if(!firstname || !lastname || !email || !password  || !color || !plate || !capacity || !vehicleType){
        throw new Error('Missing required fields');        
    }
    const captain = captainModle.create({
        fullname:{
            firstname, lastname
        },email,
        password,
        vehicle: {color, plate, capacity, vehicleType}
    })
    return captain;
}