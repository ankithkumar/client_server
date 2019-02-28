let express = require('express');

let app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');
const port = 3000;

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
app.get('/index.js', (req, res) => res.sendFile(__dirname + '/public/index.js'));

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('response', function (data) {
      console.log(data);
    });
});

server.listen(port, () => console.log('listening on port ', port));