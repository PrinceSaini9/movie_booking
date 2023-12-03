const mongoose = require('mongoose');

const connectionString =
"mongodb://localhost:27017/moviesdb";

async function connectToDatabase(){
    await mongoose
    .connect(connectionString)
    .then((res) => console.log("Connected to db successfully"))
    .catch((ex) => console.log(ex));
}

module.exports = {connectToDatabase};