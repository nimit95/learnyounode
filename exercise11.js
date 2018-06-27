const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

  let readStream = fs.createReadStream(process.argv[3]);

  readStream.on('end', () =>{
    res.end();
  })

  readStream.pipe(res);

});

server.listen(process.argv[2]);