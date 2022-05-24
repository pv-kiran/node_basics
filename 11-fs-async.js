const fs = require('fs');

console.log('Start');

fs.readFile('./content/first.txt' , 'utf-8' ,(err,firstResult) => {
    if(err) {
        console.log(err);
        return
    } else {
       const first = firstResult;
       fs.readFile('./content/sub/second.txt', 'utf-8' , (err,secondResult) => {
           if(err) {
               console.log(err);
               return
           } else {
               const second = secondResult;
               fs.writeFile('./content/sub/result.txt' , `Here is the reslt ${first} ${second}`, (err,result) => {
                   if(err) {
                       console.log(err);
                       return
                   } else {
                       console.log('Success')
                   }
               })
           }
       })
    }
})

console.log('Starting the next one')