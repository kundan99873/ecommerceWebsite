const express = require("express");
const app = express();
const connectToMongo = require("./db");
const bodyParser = require("body-parser");
const user = require("./routes/user")
const product = require("./routes/product")
const cart = require("./routes/cart");
const stripe = require("./routes/stripe");
const order = require("./routes/order");
const wish = require("./routes/wish");
const fileUpload = require("express-fileupload")

connectToMongo();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use(fileUpload({
    useTempFiles : true
}))

app.listen(4000,() => {
    console.log("connect to backend successfully")
});

app.use("/auth",user);
app.use("/product",product);
app.use("/cart",cart);
app.use("/payment",stripe);
app.use("/order",order);
app.use("/wish",wish)