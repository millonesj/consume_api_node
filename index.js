/* var express = require('express');
var cors = require('cors');
var request = require('request');
var app = express();
app.use(express.bodyParser());
app.use(cors());
app.post('http://3.89.83.231:8080/',{
  stage:0, 
  key:''
}, function(req, res){
  console.log(req);
  request('door', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body)
      // var data stage, key, door
      res.send(info);
    }
  } )
});
app.listen(3000);
console.log("The server is now running on port 3000."); */

/* stage, key, door */


var Request = require("request");

Request.post({
    "headers": { "content-type": "application/json" },
    "url": "http://3.89.83.231:8080/door",
    "body": JSON.stringify({
      "stage":0,
      "key":"False",
      "door":1
    })
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.log(':::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::');
    data = JSON.parse(body);
    key = data.key;
    console.log('CUENTA ===> 1');
    var contador = 1;
    console.log('CONTADO: ' + contador)
    console.log(data.key);
    for (let door = 2; door <= 5; door++) {
      
      Request.post({
        "headers": { "content-type": "application/json" },
        "url": "http://3.89.83.231:8080/door",
        "body": JSON.stringify({
          "stage":0,
          "key":key,
          "door":door
        })
    }, (error, response, body) => {
      console.log('CONTADO: ' + contador);
      console.log('DOOR ===> ' + door);
        if(error) {
            return console.dir(error);
        }
        data = JSON.parse(body);
        key = data.key;
        contador++;
        console.dir(data);
        console.log(data.key);
    });



      
    }


});
