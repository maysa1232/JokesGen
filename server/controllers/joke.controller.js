const Joke = require("../models/joke.model");

// read all jokes 
module.exports.findAllJokes = (req, res) => {
    Joke.find()
    .then(alljokes => res.json({jokes: alljokes}))
    .catch(err => res.json({message: "you bombed your joke:(", error: err}))
}

// read one joke
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params._id})
    .then(Onejoke => res.json({joke: Onejoke}))
    .catch(err => res.json({message: "you bombed your joke:(", error: err}))
}

// create a new joke

module.exports.creatJoke = (req, res) => {
    Joke.create(req.body)
    .then(newJoke => res.json({joke: newJoke}))
    .catch(err => res.status(400).json(err));

}

// update an existing joke

module.exports.updateJoke = (req, res) => {
    Joke.update({_id: req.params._id}, {
        $set: {
            setup: req.body.setup,
            punchline: req.body.punchline
        }
    })
    .then(OneJoke => res.json({joke: OneJoke}))
    .catch(err => res.status(400).json(err))
}

// delete an existing joke

module.exports.deleteJoke = (req, res) => {
    Joke.remove({_id: req.params._id})
    .then(delJoke => res.json({message: "Deleted your awful joke >_> "}))
    .catch(err => res.json({message: "you bombed your joke:(", error: err}))
}

// read a random joke

module.exports.findRandom = (req, res) => {
    Joke.find()
    .then(jokes => {
        let rand = Math.floor(Math.random()*jokes.length);
        res.json({joke: jokes[rand]});
    })
    .catch(err => res.json({message: "you bombed your joke:(", error: err}))
}