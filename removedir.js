const fs = require('fs');
//fs.rmdir(path[, options], callback)

//fs.rmdir('home', err => console.log(err))

//fs.rmdirSync(path[, options])

fs.rmdirSync('home');

//Using fs.rmdir() or fs.rmdirSync() on a file (not a directory) results in an ENOENT error
