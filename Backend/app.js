const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const express = require('express');
const app = express();
const userRouter = require('./routes/user.routes');
const captainRouter = require('./routes/captain.routes');
const cookieParser = require('cookie-parser');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser()); // most importan if we are using cookis

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.use('/user',userRouter)
app.use('/captains',captainRouter)

module.exports = app;