//fs.appendFile(‘<fileName>’,<contenet>,callbackFunction)
//or fs.appendFile(filepath, data, options, callback_function);
//If file does not exist, it will create it with data, 
//if it exists it will append content on the exist data in the file
//asynchronously

const fs = require('fs');

fs.appendFile('files/third.txt', 'More data added and more', (err)=>{
    if(err) console.log(err);
    console.log('File created or updated');
})


