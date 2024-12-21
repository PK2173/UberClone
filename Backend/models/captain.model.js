const mongoose  = require("mongoose");
const bcrypt  = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength: [3,'Firstname must be at least 3 characters']
        },
        lastname:{
            type:String,
            minlength: [3,'Lastname must be at least 3 characters']
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0 -9.-]+\.[a-zA-Z]{2,}$/,'Please fill a valid email address']
    },
    password:{
        type:String,
        required:true,
        minlength: [6,'Password must be at least 6 characters'],
        select:false
    },
    socketId:{
        type:String,
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default: 'inactive',
    },
    vehicle:{
        color:{
            type:String,
            required:true,
        },
        plate:{
            type:String,
            required:true,
            minlength: [3,'Plate must be at least 3 characters']
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,'Capacity must be at least 1']
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto']
        }
    },
    location:{
        lat:{
            type:Number,
        },
        lng:{
            type:Number,
        }
    }
})

captainSchema.methods.generateAuthTiken = function () {
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'})
    return token;
}

captainSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const captainModle = mongoose.model('captain',captainSchema)

module.exports = captainModle;