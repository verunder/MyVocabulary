const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const results = require("./lib/results.js")
results.init();


const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin','*');

  try{
      res.end(results.next());
  }catch(e) {
    res.statusCode = 500;
    res.end({WORD: 'ERROR', DEFINITION: e.message});
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});