const express = require('express');
const app = express();

const logger = (req,res,next) => {
    const method = req.method;
    const url = req.url;
    const date = new Date().getDate();
    console.log(method,url,date);
    next();
}
const authorize = (req,res,next) => {
   const { user } = req.query;
   if(user === 'Kiran') {
       req.user = {name: 'Kiran' , id: 3}
       next()
   } else {
       res.status(401).send('Unauthorized');
   }
}
app.use([authorize,logger])
app.get('/',   (req,res) => {
    console.log(req.user)
    res.send('Home')
})

app.get('/about', (req,res) => {
    console.log(req.user)
    res.send('About')
})

app.listen(3000 , () => {
    console.log(`Server is listening at 3000`)
})