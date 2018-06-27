const http = require('http');

//console.log(process.argv[2]);

http.get(process.argv[2], res => {

  //console.log(res);
  res.setEncoding('utf8');



  res.on('data', chunk => {
    console.log(chunk);
  })



});