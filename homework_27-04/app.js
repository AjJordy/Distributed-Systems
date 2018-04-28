var fs = require('fs')
    , http = require('http')
    , socketio = require('socket.io');

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.end(fs.readFileSync(__dirname + '/index.html'));
}).listen(8080, function() {
    console.log('Listening at: http://localhost:8080');
});

socketio.listen(server).on('connection', function (socket) {
    socket.on('message', function (msg) {
        console.log('Message Received: ', msg);
		try{
			var result = eval(msg);
        	socket.emit('message', result);
		}catch(e){
			socket.emit('message',msg);
		}
    });	
	
	setInterval(function(){	
		var d = new Date();
	    var h = d.getHours();
	    var m = d.getMinutes();
	    var s = d.getSeconds();
	    var hms = h+":"+m+":"+s;
		socket.emit('datetime',hms);
		//socket.emit('datetime', { datetime: new Date().getTime() });	
	},1000);

});


