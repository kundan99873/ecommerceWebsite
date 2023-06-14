const mongoose = require("mongoose");

const noteModel = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    desc : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    inStock : {
        type : Boolean,
        default : true
    },
    image : {
        type : String,
    },
    rating : {
        type : Number
    }
},
    { timestamps : true}
)

module.exports = mongoose.model("note",noteModel,"Product")