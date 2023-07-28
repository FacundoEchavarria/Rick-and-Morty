const express = require('express')
const server = express()
const PORT = 3001
const router = require('./routes/index')
const {conn} = require('./DB_connection')
const cors = require('cors')

server.use(express.json())

server.listen(PORT, () => {
conn.sync({force: true})
console.log('Server listen in port ' + PORT);
});

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});
server.use('/rickandmorty', router)

// var http = require('http');
// var getCharById = require('./controllers/getCharById');


// http.createServer((req, res) =>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
    
//     if(req.url.includes("/rickandmorty/character")){
//         var id = req.url.split('/');
//         id = parseInt(id[id.length - 1]);
//         getCharById(res, id);
//     }
//     else {
//         res.writeHead(404, {"Content-Type":"application/json"})
//         return res.end(JSON.stringify({error : "url not found"}))
//     }

    
// }).listen(3001, 'localhost') 