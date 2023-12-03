const express = require('express');
const artistModel = require('../models/artist.model');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const data = await artistModel.find();
        res.json({artists : data});
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

module.exports = router;