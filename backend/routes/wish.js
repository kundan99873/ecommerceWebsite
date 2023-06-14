const router = require("express").Router();
const Wish = require("../model/wishModel");
const verifyToken = require("../verifyToken");

router.post("/addWish",verifyToken,async (req, res) => {
    const newWish = new Wish({
        user : req.User.id,
        product : req.body.product,
    })
    try {
        await Wish.create(newWish).then(data => {
            res.json(data);
            console.log("Wish added successfully")
        }).catch(err => {
            res.json(err)
        })
    } catch (error) {
        res.json(error)
    }
})

router.get("/getWish",verifyToken,async (req,res) => {
    try {
        await Wish.find().then(data => {
            res.json(data);
        }).catch(err => {
            res.json(err)
        })
    } catch (error) {
        res.send(error);
    }
})


// router.delete("/deleteWish/:id",verifyToken,async(req,res) => {
//     try {
//         Wish.findByIdAndDelete(req.params.id).then(data => {
//             res.json("Deleted Successfully");
//             console.log("deleted")
//         }).catch(err => {
//             console.log(err);
//         })

//     } catch (error) {
//         res.json(error);
//     }
// })
router.post("/deleteWish",verifyToken,async(req,res) => {
    const deleteWish = {
        product : req.body.product
    }
    try {
        await Wish.deleteOne(deleteWish).then(data => {
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