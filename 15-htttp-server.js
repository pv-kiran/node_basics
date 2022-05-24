const http = require('http');
const fs = require('fs');
const homePage = fs.readFileSync('./content/index.html');
const server = http.createServer((req,res) => {
   console.log(req.method)
   const url = req.url
   if(url === '/') {
        res.writeHead(200 , {'content-type':'text/html'})
        res.write(homePage)
        res.end()
   } else {
     res.writeHead(404, {'content-type': 'text/html'})
     res.write('<h1>Page not found</h1>')
   }
   
})

server.listen(5000);