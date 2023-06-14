const router = require("express").Router();
const Product = require("../model/orderModel");
const verifyToken = require("../verifyToken");

router.post("/newOrder",verifyToken,async (req, res) => {
    const newProduct = new Product({
        user : req.User.id,
        products : req.body.products,
        amount : req.body.amount,
        address : req.body.address,
        name : req.body.name,
    })
    try {
        await Product.create(newProduct).then(data => {
            res.json("Product added successfully")
            console.log(data)
        }).catch(err => {
            res.json(err)
        })
    } catch (error) {
        res.json(error)
    }
})

router.get("/getOrder",verifyToken,async (req,res) => {
    try {
        await Product.find({user : req.User.id}).then(data => {
            res.json(data);
        }).catch(err => {
            res.json(err)
        })
    } catch (error) {
        res.send(error);
    }
})

router.get("/allOrders",async (req,res) => {
    try {
        await Product.find().then(data => {
            res.json(data);
        }).catch(err => {
            res.json(err)
        })
    } catch (error) {
        res.send(error);
    }
})

router.get("/getOrder/:id",async (req,res) => {
    try {
        await Product.findById(req.params.id).then(data => {
            res.json(data);
        }).catch(err => {
            res.json(err)
        })
    } catch (error) {
        res.send(error);
    }
})
router.post("/updateNote/:id", verifyToken, async(req,res) => {
    try {
        const newProduct = {};

        if(req.body.subject){
            newProduct.subject = req.body.subject
        }
        if(req.body.topic){
            newProduct.topic = req.body.topic
        }
        if(req.body.question){
            newProduct.question = req.body.question
        }
        if(req.body.Product){
            newProduct.Product = req.body.Product
        }

        Product.findByIdAndUpdate(req.params.id,{$set : newProduct}, {new : true}).then(data => {
            res.json("updated Successful")
            console.log(data)
        }).catch(err => {
            res.json(err);
        })
        
    } catch (error) {
        res.json(error);
    }
})

router.delete("/deleteProduct/:id",verifyToken,async(req,res) => {
    try {
        Product.findByIdAndDelete(req.params.id).then(data => {
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