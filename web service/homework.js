var express = require('express');
var app = express();

app.get('/hora', function (req, res) {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var hms = h+":"+m+":"+s;
  res.send({"hora": hms});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
