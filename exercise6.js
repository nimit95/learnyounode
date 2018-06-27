
const filterModule = require('./filtermodule');



filterModule(process.argv[2], process.argv[3], (err, filteredFile) => {

  if(err) throw err;

  filteredFile.forEach( file => {

    console.log(file);
  })

});