var http = require('http');
const internal = require('stream');

const server = http.createServer((req, res) => {
    res.end("Hello world");

})
server.on('clientError', (err, socket) => {

    socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");

})


server.listen(8000);
//server.emit('clientError', internal.Duplex);