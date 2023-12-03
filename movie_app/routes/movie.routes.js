const express = require('express');
const movieModel = require('../models/movie.model');
const router = express.Router();


// get all the movies data and the PUBLISHED data from database
router.get('/', async (req, res) => {
    try{
        const data = await movieModel.find();
        res.json({movies : data});
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
});

router.get('/', async (req, res) => {
    const status = req.query.status;
    console.log(status);
    if(status == "PUBLISHED"){
       try{
       const published_movies = movieModel.find({published : true});  
       res.json({movies : published_movies}); 
    }
    catch(error){
        res.status(500).json({message: error.message})
    } 
    }
});



// get data from database by movieid
router.get('/:id', async (req, res) => {
    try{
        const data = await movieModel.find({ movieid: req.params.id });
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}); 



module.exports = router;