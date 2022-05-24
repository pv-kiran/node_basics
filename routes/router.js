const express = require('express');
const router = express.Router();


const {getPeoplpe ,createPerson,updatePerson, deletePerson} = require('../controllers/peopleController');

router.get('/people' , getPeoplpe );

router.post('/person' , createPerson);

router.put('/person/:id' , updatePerson );

router.delete('/person/:id' , deletePerson );


module.exports = router;