const mongoose = require("mongoose");
const db = require("../models");

// This file empties the City collection and inserts the city below

mongoose.connect(
    process.env.MONGODB_URI || 
    "mongodb://localhost/utahviews"
);

const favoritesSeed = [
    {
        "username": "SuperHiker",
        "id": 7011192
    },
    {
        "username": "SuperHiker",
        "id": 7000130
    },
    {
        "username": "SuperHiker",
        "id": 7004226
    },
    {
        "username": "TrailLover",
        "id": 7011191
    },
    {
        "username": "TrailLover",
        "id": 7011192
    }
];

db.Cities.remove({})
    .then(() => db.City.collection.insertMany(favoriteSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });