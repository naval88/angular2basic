var express = require('express');
var axios = require('axios');
var app = express();
var router = express.Router();
const http = require('http').createServer(app);
const session = require('express-session');
module.exports = router;
module.exports = axios;
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(session({secret: 'ssshhhhh'}));
app.use(express.static('public'));
app.use('/upload', express.static(__dirname + '/upload'));
app.use('/public', express.static(__dirname + '/public'));
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
require('./router/app.router.js')(app);
var server = app.listen(process.env.PORT || 8081, function () {
   var host = server.address().address
   var port = server.address().port
  
   console.log("Example app listening at http://%s:%s", host, port)
})
const io = require('socket.io').listen(server);   

io.sockets.on('connection', function(socket) {
    socket.on('username', function(username) {
        socket.username = username;
        io.emit('is_online', '🔵 <i>' + socket.username + ' join the chat..</i>');
    });

    socket.on('disconnect', function(username) {
        io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
    })

    socket.on('chat_message', function(message) {
        io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
    });

});
