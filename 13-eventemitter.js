const eventEmitter = require('events');

const customEmitter = new eventEmitter();
customEmitter.on('response',(name,id) => {
    console.log(`${name} ${id}`);
})

customEmitter.on('response',() => {
    console.log('Data is received again');
})
customEmitter.emit('response' , 'john' , 23);