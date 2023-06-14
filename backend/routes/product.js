const express = require("express");
const Product = require("../model/productModel");
const router = express.Router();
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

router.post("/add", async (req, res, next) => {
  const file = req.files.photo;
  const { title, desc, category, price, rating } = req.body;
  try {
    await cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
      if (err) {
        console.log(err);
      }
      const newProduct = new Product({
        title: title,
        desc: desc,
        category: category,
        price: price,
        rating: rating,
        image: result.url,
      });
      Product.create(newProduct)
        .then((data) => {
          res.send("successfully uploaded");
          console.log(data);
        })
        .catch((err) => {
          res.json(err);
        });
    });
  } catch (error) {
    res.json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/addProduct", async (req, res, next) => {
  const file = req.files.photo;
  const { title, desc, category, price, rating } = req.body;
  const result = await cloudinary.uploader.upload(file.tempFilePath);
  const newProduct = new Product({
    title: title,
    desc: desc,
    category: category,
    price: price,
    rating: rating,
    image: result.url,
  });
  await Product.create(newProduct)
    .then((data) => {
      res.send("successfully uploaded");
      // res.json(data);
      console.log(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updatedProduct);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.post("/delete/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(201).json("Product has been deleted...");
  } catch (error) {
    res.status(500).json(err);
  }
});

router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
      products = await Product.find({
        category: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }
    res.status(201).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
