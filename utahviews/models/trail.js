const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trailSchema = new Schema({
  id: {
    type: Number,
    required: true
  }, 
  name: {
    type: String,
    required: true
  }, 
  type: {
    type: String,
    required: false
  }, 
  summary: {
    type: String,
    required: false
  }, 
  difficulty: {
    type: String,
    required: false
  }, 
  stars: {
    type: Number,
    required: false
  }, starVotes: {
    type: Number,
    required: false
  }, location: {
    type: String,
    required: false
  }, url: {
    type: String,
    default: ""
  }, imgSqSmall: {
    type: String,
    default: ""
  }, imgMedium: {
    type: String,
    default: ""
  }, length: {
    type: String,
    required: false
  }, ascent: {
    type: Number,
    required: false
  }, descent: {
    type: Number,
    required: false
  }, high: {
    type: Number,
    required: false
  }, low: {
    type: Number,
    required: false
  }, longitude: {
    type: Number,
    required: false
  }, latitude: {
    type: Number,
    required: false
  }, conditionStatus: {
    type: String,
    required: false
  }, conditionDetails: {
    type: String,
    required: false
  }, conditionDate: {
    type: Date,
    default: ""
  }
});

const Trail = mongoose.model("Trail", trailSchema);

module.exports = Trail;
