const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, files) => {


  files.forEach(elem => {

    if(path.extname(elem).split(".").pop() === process.argv[3])
      console.log(elem);

  });
});