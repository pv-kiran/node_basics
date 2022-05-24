const express = require('express');
const app = express();
//parse json
app.use(express.json())
//parse form data
app.use(express.urlencoded({extended: false }));
// importing router for setting up the routes
const api = require('./routes/router');

app.use('/api' , api)



app.listen(3000 , () => {
    console.log(`Server is listening at 3000`);
})