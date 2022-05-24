const osTest = require('os');
// console.log(osTest);
// console.log(osTest.userInfo());
// console.log(osTest.uptime());

const currentOs = {
    name: osTest.type(),
    release: osTest.release(),
    totalMem: osTest.totalmem(),
    freeMem : osTest.freemem()
}

console.log(currentOs);