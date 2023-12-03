const mongoose = require('mongoose');
const { Schema } = mongoose;

const showSchema = new Schema({
  id: { type: Number, required: true },
  theatre: {
    name: { type: String, required: true },
    city: { type: String, required: true },
    language: { type: String, required: true },
    show_timing: { type: String, required: true },
    available_seats: { type: Number, required: true },
    unit_price: { type: Number, required: true },
  }
});

const artistSchema = new Schema({
  artistid: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  wiki_url: { type: String, required: true },
  profile_url: { type: String, required: true },
});

const movieSchema = new Schema({
  movieid: { type: Number, required: true },
  title: { type: String, required: true },
  published: { type: Boolean, default: true },
  released: { type: Boolean, default: true },
  poster_url: { type: String, required: true },
  release_date: { type: String, required: true },
  publish_date: { type: String, required: true },
  artists: [artistSchema],
  genres: [{ type: String }],
  duration: { type: Number, required: true },
  critic_rating: { type: Number, required: true },
  trailer_url: { type: String, required: true },
  wiki_url: { type: String, required: true },
  story_line: { type: String, required: true },
  shows: [showSchema],
});

const MovieModel = mongoose.model('movie', movieSchema);

module.exports = MovieModel;