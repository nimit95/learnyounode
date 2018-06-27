
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

  let parsed = url.parse(req.url, true);

  //console.log(parsed.pathname);

  let date = new Date(parsed.query['iso']);
  if(parsed.pathname === "/api/parsetime") {




    res.end(JSON.stringify({
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    }))
  }
  if(parsed.pathname === "/api/unixtime") {

    res.end(JSON.stringify({
      "unixtime": Date.parse(date.toISOString())
    }))
  }

  res.writeHead(200, { 'Content-Type': 'application/json' })

});


server.listen(process.argv[2]);