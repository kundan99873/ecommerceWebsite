const mongoose = require("mongoose");
require('dotenv').config();

const mongoUrl = process.env.MONGO_URL;
mongoose.set({"strictQuery" : false})

const connectToMongo = () => {
    mongoose.connect(mongoUrl,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    }).then(() => {
        console.log("connected to server suceessfully...")
    }).catch(() => {
        console.log("internet error")
    })
}

module.exports = connectToMongo;