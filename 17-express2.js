const express = require('express');
const app = express();

 const list = [
        {
            id: 1,
            name: 'Kiran' ,
            age: 27
        } ,
        {
            id: 2,
            name: 'Arun' ,
            age: 37
        } ,
        {
            id: 3,
            name: 'Sree' ,
            age: 47
        } 
    ]


app.get('/' ,(req,res) => {
    res.send('<h1>Home page</h1> <a href="/api/list">list</a>');
})
 
app.get('/api/list' , (req,res) => {
    console.log(req.query)
    const newList = list.map((item) => {
        const {id,name} = item;
        return {id,name};
    })
    console.log(newList)
    res.json(newList);
})


app.get('/api/list/:itemId' , (req,res) => {
        console.log(req.params.itemId)
        const searchItem = list.find((item) => item.id === Number(req.params.itemId));
        if(searchItem) {
            res.status(200).json(searchItem);
        } else {
            res.status(404).send(`Product doesn't exist`);
        }
})


app.listen(5000 , () => {
    console.log('server is listening on port 5000');
})