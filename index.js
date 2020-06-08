const express = require('express')
//const path = require('path')
const PORT = process.env.PORT || 3000

var app = express();

app.get('/', function (req, res) {
  // initialize the container for our data
  //const { headers, method, url } = req;
  //let body = [];
  //const responseBody = { headers, method, url, body };
  //res.send(JSON.stringify(responseBody));
  //res.json(responseBody);

  res.send("<h1>Hello World!</h1>");
});

app.get('/users', function (req, res) {

  res.json([{"id":9,"name":"Glenna Reichert","username":"Delphine","email":"Chaim_McDermott@dana.io","address":{"street":"Dayna Park","suite":"Suite 449","city":"Bartholomebury","zipcode":"76495-3109","geo":{"lat":"24.6463","lng":"-168.8889"}},"phone":"(775)976-6794 x41206","website":"conrad.com","company":{"name":"Yost and Sons","catchPhrase":"Switchable contextually-based project","bs":"aggregate real-time technologies"}},
	{"id": 1,"name": "Leanne Graham","username": "Bret","email": "Sincere@april.biz","address": {"street": "Kulas Light","suite": "Apt. 556","city": "Gwenborough","zipcode": "92998-3874","geo": {"lng": "81.1496"}},"phone": "1-770-736-8031 x56442","website": "hildegard.org","company": {"name": "Romaguera-Crona","catchPhrase": "Multi-layered client-server neural-net","bs": "harness real-time e-markets"}}]);

});

var server = app.listen(PORT, function () {
  console.log(`Listening on ${ PORT }`);
});

