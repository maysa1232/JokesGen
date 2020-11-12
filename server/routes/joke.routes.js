const JokesController = require("../controllers/joke.controller");

module.exports = app => {
    app.get("/api/jokes", JokesController.findAllJokes);
    app.get("/api/jokes/random", JokesController.findRandom);
    app.get("/api/jokes/:_id", JokesController.findOneJoke);
    app.post("/api/jokes/new", JokesController.creatJoke);
    app.put("/api/jokes/update/:_id", JokesController.updateJoke);
    app.delete("/api/jokes/delete/:_id", JokesController.deleteJoke);
    
}