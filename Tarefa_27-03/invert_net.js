net = require('net');

net.createServer(
	function(socket) {
		socket.on('data', function(data) {
			socket.write(String(data).split("").reverse().join(""));
		});
	}
).listen(3000);
