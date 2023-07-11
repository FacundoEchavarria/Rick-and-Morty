var http = require('http')
const data = require('./utils/data');
const { stringify } = require('querystring');

http.createServer((req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if(req.url.includes("/rickandmorty/character")){
        var id = req.url.split('/')
        id = parseInt(id[id.length - 1])
    }
    
    let character = []
    data.forEach(char => {
        if(char.id === id) character.push(char)
    })
    if(character.length === 0){
        res.statusCode = 404;
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Personaje no encontrado' }));
    }else{
        res.writeHead(200, {'Content-Type':'application/json'})
        res.end(JSON.stringify(character[0]))
    }

}).listen(3001, 'localhost')