const router = require("express").Router();
const Cart = require("../model/cartModel");
const verifyToken = require("../verifyToken");

router.post("/addCart",verifyToken,async (req, res) => {
    const newCart = new Cart({
        user : req.User.id,
        productIds : req.body.productIds,
        quantity : req.body.quantity
    })
    try {
        await Cart.create(newCart).then(data => {
            res.json(data);
            console.log("cart added successfully")
        }).catch(err => {
            res.json(err)
        })
    } catch (error) {
        res.json(error)
    }
})

router.get("/getCart/:id",verifyToken,async (req,res) => {
    try {
        await Cart.findById(req.params.id).then(data => {
            res.json(data);
        }).catch(err => {
            res.json(err)
        })
    } catch (error) {
        res.send(error);
    }
})

router.post("/updateCart/:id", verifyToken, async(req,res) => {
    try {
        const newCart = {
            quantity : req.user.quantity
        };


        Cart.findByIdAndUpdate(req.params.id,{$set : newCart}, {new : true}).then(data => {
            res.json("updated Successful")
            console.log(data)
        }).catch(err => {
            res.json(err);
        })
        
    } catch (error) {
        res.json(error);
    }
})

router.delete("/deleteCart/:id",verifyToken,async(req,res) => {
    try {
        Cart.findByIdAndDelete(req.params.id).then(data => {
            res.json("Deleted Successfully");
            console.log(data)
        }).catch(err => {
            console.log(err);
        })

    } catch (error) {
        res.json(error);
    }
})

module.exports = router;