const express = require('express');
const app = express();
express.static('./public')

app.get('/', (req,res) => {
    res.status(200).send('<h1>Home page</h1>');
})

app.get('/about' , (req,res) => {
    res.status(200).send('<h1>About</h1>')
})

app.all('*' , (req,res) => {
    res.status(404).send('<h1>Resource not found</h1>')
})


app.listen(5000 , () => {
    console.log('server is listening on port 5000');
})