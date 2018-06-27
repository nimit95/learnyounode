const http = require('http');

//console.log(process.argv[2]);

http.get(process.argv[2], res => {

  //console.log(res);
  res.setEncoding('utf8');

  let data = '';

  res.on('data', chunk => {
    data += chunk;
  })

  res.on('end', ()=> {
    console.log(data.split("").length);
    console.log(data);
  });

});