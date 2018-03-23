net = require('net');

net.createServer( 
	function(socket) {
		socket.on('data', function(data) {
			socket.write(String(data).toUpperCase());
		});
	}
).listen(3000);
