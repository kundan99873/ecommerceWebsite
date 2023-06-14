const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    products : [
        {
            id : {
                type : String,
            },
            pQuantity : {
                type : Number,
                default : 1
            }
        }
    ],
    amount : {
        type : Number,
        required : true
    },
    name : {
        type : String
    },
    address : {
        type : String,
        required : true
    },
    status : {
        type : String,
        default : "pending"
    }
},
    { timestamps : true}
)

module.exports = mongoose.model("Order",orderSchema);