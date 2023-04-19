const http = require('http')
const url = require('url')
const fs = require('fs')
const mysql = require('mysql');
var qs = require('querystring');
const hostname = '127.0.0.1'
const port = 3000
function onRequest(req, res) {
var baseURL = 'http://' + req.headers.host + '/';
var myURL = new URL(req.url, baseURL);
res.statusCode = 200
res.setHeader('Content-Type', 'text/HTML')
//res.write("You requested" + req.url)
if (req.url == '/') {
index(req, res)
Page | 68
}
else if (req.url == '/showsignin') {
showsignin(req, res)
}
else if (req.url == '/dosignin') {
var body = '';
req.on('data', function (data) {
body += data;
});
req.on('end', function () {
var post = qs.parse(body);
// use post['blah'], etc.
dosignin(req, res, post)
});
}
else if(req.url == '/showsignup'){
showsignup(req, res)
}
else if(req.url == '/dosignup'){
var body = '';
req.on('data', function (data) {
body += data;
});
req.on('end', function () {
var post = qs.parse(body);
// use post['blah'], etc.
dosignup(req, res, post)
});
}
else {
res.end();
}
}
function dosignin(req, res, body) {
var con = mysql.createConnection({
host: "localhost",
Page | 69
user: "root",
password: "password",
database: "dbit"
});
con.connect(function (err) {
var username = body.username;
var password = body.password;
con.query("SELECT * FROM userlogin where username=? and
password=?", [username, password], function (err, result, fields) {
console.log(result);
if (err) {
res.write('<body style="color: #fff; background-color:
darkcyan; padding: 300px;"><center><h3>Failed to
Sign-in!</h3></center></body>');
res.end();
return;
};
if (result.length <= 0) {
res.write('<body style="color: #fff; background-color:
darkcyan; padding: 300px;"><center><h3>ERROR: Could not Sign you In!
:(</h3></center></body>');
res.end();
return;
}
else { // if user found
// render to views/user/edit.ejs template file
res.write('<body style="color: #fff; background-color:
darkcyan; padding: 300px;"><center><h3>Signed-in
Successfully!</h3></center></body>');
res.end();
}
});
});
}
function dosignup(req, res, body) {
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "password",
Page | 70
database: "dbit"
});
con.connect(function (err) {
if (err) throw err;
console.log("Connected!");
var username = body.username;
var password = body.password;
var sql = "INSERT INTO userlogin (username, password) VALUES ("+
username +","+ password +")";
con.query(sql, function (err, result) {
if (err) {
res.write('<body style="color: #fff; background-color:
darkcyan; padding: 300px;"><center><h3>Failed to
Sign-Up!</h3></center></body>');
res.end()
return;
};
if (result.length <= 0) {
res.write('<body style="color: #fff; background-color:
darkcyan; padding: 300px;"><center><h3>ERROR: Could not Sign you Up!
:(</h3></center></body>');
res.end();
return;
}
else { // if user found
// render to views/user/edit.ejs template file
res.write('<body style="color: #fff; background-color:
darkcyan; padding: 300px;"><center><h3>Signed-Up
Successfully!</h3></center></body>')
res.end()
}
});
});
}
function showsignin(req, res) {
fs.readFile('signin.html', function (err, data) {
res.write(data);
return res.end();
Page | 71
});
}
function showsignup(req, res) {
fs.readFile('signup.html', function (err, data) {
res.write(data);
return res.end();
});
}
function index(req, res) {
fs.readFile('index.html', function (err, data) {
res.write(data);
return res.end();
});
}
const server = http.createServer(onRequest)
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`)
})