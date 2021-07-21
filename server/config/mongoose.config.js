const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/JokesSchema',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to JokesSchema"))
    .catch(err => console.log("Something went wrong connecting to the database", err));