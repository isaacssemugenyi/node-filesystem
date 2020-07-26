const fs = require('fs');

//fs.unlink(path, callback);

const getFilesInDirectory = function(){
    const files = fs.readdirSync(__dirname);
    files.forEach(file => console.log(file));
}

// Get the files in current diectory before deletion 
getFilesInDirectory(); 

fs.unlink('toBeDeleted.txt', err => {
    if(err) {
        console.log(err);
    } else {
        console.log('/////////')
        //Get files in current diretory after deletion
        getFilesInDirectory(); 
    }
})
