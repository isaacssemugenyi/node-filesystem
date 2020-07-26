//https://nodejs.org/api/fs.html#fs_dir_read_callback
//Test whether a file path exists with fs.exists
//fs.exists(path, callback)
const fs = require('fs');

  if (fs.existsSync('source2.txt')) {
    console.log('The path exists.');
  } else {
      console.log('Nope')
  }