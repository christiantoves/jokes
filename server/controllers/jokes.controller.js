const Jokes = require('../models/user.model');

module.exports.test = (req, res) => {
    response.json({
        message: "Testing"
    })
}

module.exports.allJokes = (req, res) => {
    Jokes.find({})
        .then(allJokes => res.json({allJokes}))
        .catch(err => res.json({err}))
}

module.exports.oneJoke = (req, res) => {
    const {id} = req.params
    Jokes.findOne({_id: id})
        .then(oneJoke => res.json({oneJoke}))
        .catch(err => res.json({err}))
}

module.exports.createJoke = (req, res) => {
    Jokes.create(req.body)
        .then(newJoke => res.json({newJoke}))
        .catch(err => res.status(400).json(err))
}

module.exports.updateJoke = (req, res) => {
    const {id} = req.params
    Jokes.findOneAndUpdate({_id: id}, req.body, {new:true, runValidators: true})
        .then(oneJoke => res.json({oneJoke}))
        .catch(err => res.status(400).json({err}))
}
module.exports.deleteJoke = (req, res) => {
    const {id} = req.params
    Jokes.deleteOne({_id: id})
        .then(confirmation => res.json({confirmation}))
        .catch(err => res.json({err}))
}