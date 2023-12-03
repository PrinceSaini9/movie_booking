const mongoose = require('mongoose');
const { Schema } = mongoose;

const genreSchema = new Schema({
  genreid: { type: Number, required: true },
  genre: { type: String, required: true },
});

const GenreModel = mongoose.model('genre', genreSchema);

module.exports = GenreModel;