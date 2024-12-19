const mongoose = require('mongoose');

// function connectToDb() {
//     mongoose.connect(process.env.DB_CONNECT_NEW,{
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }).then(
//         console.log('mogodb conneted')
        
//     ).catch(err => console.log(err)
//     )
// }

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT_NEW).then(
        console.log('mogodb conneted')
    ).catch(err => console.log(err)
    )
}

module.exports = connectToDb;