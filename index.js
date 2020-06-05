const http = require('http')
const {Client} = require('pg')

const PORT = process.env.PORT || 3000
const conn = 'postgres://postgres:P@ssw0rd@localhost:5432/ayus'
//const conn = 'postgres://sxdesljjsbbagl:54a46a5568ca86005c81bf28dba79e7fd36f96bbcf177ae1efedd952109c08b8@ec2-54-83-61-142.compute-1.amazonaws.com:5432/d2jsbbh8rvn94r'

/*const client = new Client({
  //connectionString:conn
  user: 'postgres',
  password: 'P@ssw0rd',
  host: 'localhost',
  port: 5432,
  database: 'ayus'
});*/
http.createServer(function (req, res) {
  var client = new Client(conn)
  client.connect();

  res.writeHead(200, { 'Content-type': 'text/html' });
  res.write("<h1>Hello world!</h1>");
  client.query('select * from "myTable" order by "id"')
    .then(result => {
      console.table(result.rows)
      res.write('<table>');
      //res.write('<tr><td>nama</td></tr>');
      for (var i = 0; i < result.rows.length; i++) {
        res.write('<tr><td>' + result.rows[i].id + '</td><td>' + result.rows[i].name + '</td></tr>');
      }
      res.write('</table>');
      res.end("<h2>this is the end!</h2>")
    })
    .catch(e => console.log(e))
    .finally(() => client.end())

}).listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
});

/*
var client = new pg.Client({
  connectionString: conn
});
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.write("<h1>Hello world!</h1>");
  client.connect()
    .then(() => console.log('konek sukses'))
    .then(() => client.query('select * from "myTable" order by "id"'))
    .then(result => {
      console.table(result.rows)
      res.write('<table>');
      //res.write('<tr><td>nama</td></tr>');
      for (var i = 0; i < result.rows.length; i++) {
        res.write('<tr><td>' + result.rows[i].id + '</td><td>' + result.rows[i].name + '</td></tr>');
      }
      res.write('</table>');
    })
    .catch(e => {
      console.log(e)
      res.write(`ada sesuatu yang salah, ${e}`)
    })
    .finally(() => {
      client.end()
      res.end("<h2>this is the end!</h2>")
    });

}).listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
});
*/