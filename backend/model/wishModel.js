const mongoose = require("mongoose");

const wishSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    product : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("WishList",wishSchema);