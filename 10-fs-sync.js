const fs = require('fs');

// console.log('Start')

// const first = fs.readFileSync('./content/first.txt' , 'utf8')
// const second = fs.readFileSync('./content/sub/second.txt', 'utf8')

// fs.writeFileSync('./content/sub/result.txt' , `Here is the reslt ${first} ${second}`);

// console.log('Done');
// console.log('Starting next one');

for(i = 0 ; i < 5000 ; i++) {
    fs.writeFileSync('./content/sub/big.txt' , `This is ${i}` , {flag: 'a'});
}
