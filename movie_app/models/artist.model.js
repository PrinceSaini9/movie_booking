const mongoose = require('mongoose');
const { Schema } = mongoose;

const artistSchema = new Schema({
  artistid: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  wiki_url: { type: String, required: true },
  profile_url: { type: String, required: true },
});

const ArtistModel = mongoose.model('artist', artistSchema);

module.exports = ArtistModel;