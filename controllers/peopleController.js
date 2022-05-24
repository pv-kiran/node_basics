const people = require('../model/People');

const getPeoplpe = (req,res) => {
    res.status(200).json({
        success: true ,
        data: people
    })
}

const createPerson = (req,res) => {
    console.log(req.body.name);
    const newPeople = {};
    newPeople.name = req.body.name;
    newPeople.id = req.body.id;
    people.push(newPeople);
    res.status(201).json({
        success: true ,
        data: people
    })
}

const updatePerson = (req,res) => {
    const id = req.params.id;
    people.map(item => {
        if(item.id === Number(id)) {
            item.name = req.body.name
        } else {
            item = item;
        }
        return item
    })  
    res.status(200).json({
        success: true ,
        data: people
    });
}

const deletePerson = (req,res) => {
    const id = req.params.id;
    console.log(id);
    const removeIndex = people.findIndex(item => item.id === Number(id));
    people.splice(removeIndex,1);
    res.status(200).json({
        success: true,
        message: 'Item is deleted',
        data: people 
    })
}

module.exports = {
    getPeoplpe ,
    createPerson,
    updatePerson,
    deletePerson
}