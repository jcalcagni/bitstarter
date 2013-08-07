var express = require('express');
var fs = require("fs");

var app = express.createServer(express.logger());

var fileName = "index.html";
fs.readFile(fileName, 'utf8', function(error, data){

//error handling later
 
  app.get('/', function(request, response) {
    response.send(data); //was 'Hello World 2!' and not in fs.readfile
  });
});


var port = process.env.PORT || 8080;  //was 5000
app.listen(port, function() {
  console.log("Listening on " + port);
});
