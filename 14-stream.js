const fs = require('fs');
const stream = fs.createReadStream('./content/sub/big.txt');
stream.on('data',(result) => console.log(result)); 