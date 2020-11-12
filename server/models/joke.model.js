const mongoose = require("mongoose");

const Schema = new mongoose.Schema;

const JokeSchema = new mongoose.Schema({

    setup :{
        type: String,
        required: [true, "You need to set up your joke!"],
        minlength: [10, "your joke is too short!"]
    },
    punchline:{
        type: String,
        required: [true, "so whats the joke??"],
        minlength: [3, "that's not a joke"]
    }

});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;

