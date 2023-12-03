const express = require('express');
const genreModel = require('../models/genre.model');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const data = await genreModel.find();
        res.json({genres:data});
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

module.exports = router;