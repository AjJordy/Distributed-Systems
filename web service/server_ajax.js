var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs"); 

app.get('/',function(req,res){
	fs.readFile(__dirname+"/"+"test_ajax.html",'utf8', function(err,data){
		console.log(data);
		res.send('Contente-Type','text/html');
		res.end(data);

	});
});

app.get('/ola',function(req,res){
	res.end("ola!");
});



/* var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}
*/

app.use(bodyParser.json()); // for parsing application/json

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.put('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      // data["user4"] = JSON.parse(req.body);
      data["user4"] = req.body;
      console.log( req.body );
      // console.log( data );
      res.end( JSON.stringify(data));
   });
})

app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      var user = data["user" + req.params.id] 
      console.log( user );
      res.end( JSON.stringify(user));
   });
})

app.delete('/deleteUser/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["user" + req.params.id];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

var server = app.listen(8083,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port)
});




