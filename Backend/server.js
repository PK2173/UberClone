const http = require('http');
const app = require('./app')
const port = process.env.PORT || 3000
const connectToDb = require('./db/db');

connectToDb()

const server = http.createServer(app);

server.listen(port,()=>{
    console.log(`localhost is working on ${port}`);
})