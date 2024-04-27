var http = require('http');

http.createServer(function(req, res){
    res.end("<h1>Olá Node Express</h1>");
}).listen(8081);