net = require('net');
var fs = require('fs');


fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }    
    net.createServer(
    	function(socket) {
    		socket.on('data', function(data) {
    			socket.write(html);
    		});
    	}
    ).listen(3000);

});
