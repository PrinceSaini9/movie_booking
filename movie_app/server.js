const express = require('express')
const {connectToDatabase} = require('./config/db.config');
const cors = require('cors');
const user_route = require('./routes/user.routes');
const artist_route = require('./routes/artist.routes');
const genre_route = require('./routes/genre.routes');
const movie_route = require('./routes/movie.routes');
const jwt = require('jsonwebtoken');


const app = express();
const PORT = 8085

async function connectDB() {
    const db = await connectToDatabase();
}

connectDB();

// dealing with JSON type of data
app.use(express.json());
app.use(cors());


// routes
app.use('/api/auth', user_route);
app.use('/api/artists', artist_route);
app.use('/api/genres', genre_route);
app.use('/api/movies', movie_route); 

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})  

// module.exports = {auth,admin};