const net = require('net');

const server = net.createServer(c => {

  let date = new Date();

  //Format is "YYYY-MM-DD hh:mm"
  let data = date.getFullYear() + "-" + (date.getMonth()<10?'0':'') + (date.getMonth()+1) + "-" + date.getDate() + " " + date.getHours() + ":" + (date.getMinutes()<10?'0':'') + date.getMinutes();
  c.end(data+"\n")
});


server.on('error', (err) => {
  throw err;
});


server.listen(process.argv[2]);

