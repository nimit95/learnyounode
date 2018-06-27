const http = require('http');

http.get(process.argv[2], res => {

  res.setEncoding('utf8');

  let data = '';

  res.on('data', chunk => data += chunk);

  res.on('end', () => {
    console.log(data);

    http.get(process.argv[3], res2 => {

      res2.setEncoding('utf8');

      data = '';
      res2.on('data', chunk => data += chunk);

      res2.on('end', () => {
        console.log(data);

        http.get(process.argv[4], res3 => {

          res3.setEncoding('utf8');

          data =''
          res3.on('data', chunk => data += chunk);

          res3.on('end', () => {
            console.log(data);
          })
        })
      })
    })
  })

});