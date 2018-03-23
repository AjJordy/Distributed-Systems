// UDP Sample Client
var host = "localhost";
var c_port = 41234;
var dgram = require("dgram");
var client = dgram.createSocket("udp4");

var message = new Buffer("hello world");

client.on("message", function(msg, rinfo) {
  console.log("recieved: " + msg.toString());
  client.close();
});

client.on("err", function(err) {
  console.log("client error: \n" + err.stack);
  console.close();
});

client.on("close", function() {
  console.log("closed.");
});

send(message, host, c_port);
function send(message, host, port) {
  client.send(message, 0, message.length, port, host, function(err, bytes) {
    console.log("sent.");
  });
}
