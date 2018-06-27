
const fs = require('fs');
const path = require('path');


module.exports = function (dir, ext, callback) {

  ext = "." + ext;

  fs.readdir(dir, (err, files)=> {

    if (err) return callback(err);

    let ans = [];

    files.forEach(file => {
      if(path.extname(file) === ext)
        ans.push(file)
    });

    callback(null, ans);
  })


}
