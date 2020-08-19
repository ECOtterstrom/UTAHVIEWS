const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  username: {
    type: String,
    required: true
  }, id: {
    type: Number,
    required: true
  }
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;