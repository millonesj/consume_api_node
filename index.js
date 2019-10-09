var Request = require("request");
var endpoint = "http://3.89.83.231:8080/door";
var keys = [];

Request.post({
    "headers": { "content-type": "application/json" },
    "url": endpoint,
    "body": JSON.stringify({
      "stage":0,
      "key":"False",
      "door":1
    })
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.log('::::::::: OPENING DOOR ::::::::::::::');
    data = JSON.parse(body);
    key = data.key;
    keys.push(key);
    for (let door = 2; door <= 4; door++) {
      
      Request.post({
        "headers": { "content-type": "application/json" },
        "url": endpoint,
        "body": JSON.stringify({
          "stage":0,
          "key":key,
          "door":door
        })
    }, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        data = JSON.parse(body);
        key = data.key;
        keys.push(key);
        console.dir(data);
        console.log(data.key);
    });
      
    }


});


/* 
const fetch = require("node-fetch");
const url = "https://jsonplaceholder.typicode.com/posts/1";
const getData = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};
getData(url);
-------------------------------------------------------------------
var fetch = require('node-fetch')

async function getDataFromAPI() {
    let response = await fetch("https://api.github.com/users/up1")
    let data = await response.json()
    console.log(JSON.stringify(data, null, "\t"))
}

getDataFromAPI()

-------------------------------------------------------------------

var fetch = require('node-fetch')

function getDataFromAPI() {
    return fetch("https://api.github.com/users/up1")
        .then(response => response.json())
        .then(data => console.log(JSON.stringify(data, null, "\t")))
}

getDataFromAPI()
*/
