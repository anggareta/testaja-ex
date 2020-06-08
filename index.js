const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

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

var server = app.listen(PORT, function () {
  console.log(`Listening on ${ PORT }`);
});

