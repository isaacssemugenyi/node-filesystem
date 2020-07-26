const fs = require('fs');

//fs.mkdir(path, cb) Takes a callback
fs.mkdir('home2', (err)=>{
    if(err) console.error(err);
    console.log('Created!')
})

//fs.mkdirSync(path) Does not take a callback
fs.mkdirSync('home');