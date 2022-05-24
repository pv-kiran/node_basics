const path = require('path');
// console.log(path.sep);
const filepath = path.join('/folder','sub' , 'text.txt');
console.log(path.basename(filepath));
console.log(path.resolve(__dirname,'content','subfolder','test.txt'));
