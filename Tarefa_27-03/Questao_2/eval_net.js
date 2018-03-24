net = require('net');

net.createServer(
	function(socket) {
		socket.on('data', function(data) {
      socket.write(eval(String(data)).toString()+"\n");
		});
	}
).listen(3000);
