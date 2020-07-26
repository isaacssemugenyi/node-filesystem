/*
    fs.writeFile(‘<fileName>’,<content>,callbackFunction)
    When writeFile.js is executed, the second.txt is created, if the second.txt already exists 
    it's data will be overwritten
*/
//Require the fs module
const fs = require('fs');

//Create a file second.txt and put in 'Nice to have this working/////

fs.writeFile('second.txt', 'Nice to have this working//////', (err)=>{
    if(err) console.error('File created');
    console.log(data);
})

