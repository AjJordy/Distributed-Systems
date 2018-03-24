var s_port = 41234;
var dgram = require("dgram");
var server = dgram.createSocket("udp4");
var fs = require("fs");


// Asynchronous read
fs.readFile('./input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('./input.txt');
console.log("Synchronous read: " + data.toString());
console.log("Program Ended");

server.on("listening", function() {
  var address = server.address();
  console.log("server listening " + address.address + ":" + address.port);
});

server.on("message", function(msg, rinfo) {
  console.log("server got a message from " + rinfo.address + ":" + rinfo.port);
  var feedback = new Buffer(String(data));
  server.send(feedback, 0, feedback.length, rinfo.port, rinfo.address, function(err, bytes) {
    console.log("sent message.");
  });
});

server.on("error", function(err) {
  console.log("server error: \n" + err.stack);
  server.close();
});

server.on("close", function() {
  console.log("closed.");
});

server.bind(s_port);
