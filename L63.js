const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          .container {
              width: 100%;
              height: 633px;
              border: 3px solid red;
              display: flex;
              /* flex-flow: row wrap; */
              justify-content: space-evenly;
              align-items: stretch;
              /* align-items:center; */
              /* flex-wrap: wrap; */
              /* flex-direction: row; */
              /* flex-direction: column; */
              /* flex-direction: row-reverse; */
              /* flex-direction: column-reverse; */
          }
  
          .box {
              border: 2px solid salmon;
              border-radius: 5px;
              margin: 10px;
              background-color: rgb(165, 129, 125);
  
              height: 170px;
              width: 170px;
  
  
          }
          #box1{
            order: 2;
  /* flex-grow: 2; */
          }
          #box2{
              /* flex-grow: 3; */
              /* flex-shrink: 3; */
              flex-basis: 300px;
          }
          #box3{
              order: 13;
              align-self: center;
          }
      </style>
  </head>
  
  <body>
      <h3>THIS IS FLEXBOX TUTORIAL</h3>
      <div class="container">
          <div class="box" id="box1">FIRST BOX</div>
          <div class="box" id="box2">SECOND BOX</div>
          <div class="box" id="box3">THIRD BOX</div>
          <!-- <div class="box" id="box4">FOURTH BOX</div>
          <div class="box" id="box5">FIFTH BOX</div>
          <div class="box" id="box6">SIXTH BOX</div> -->
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});