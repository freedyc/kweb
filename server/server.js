var http = require('http');

var server = http.createServer(function(rep, res) {
    console.log(rep, res);    
    res.end("hello");
})

server.listen(8080, "127.0.0.1")
