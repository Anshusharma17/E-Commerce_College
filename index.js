const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const cors = require("cors");
// const stripeRoute = require("./routes/stripe");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;
dotenv.config();

app.use(cors());

// mongoose.connect("process.env.MONGO_URL",(err)=>{
//     if(!err){
//         console.log("db connected");
//     }
// }) or

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);
// app.use("/api/checkout", stripeRoute);


//for client side
app.use(express.static("client/build"));
app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
);

http://localhost:5000/

//admin panel
app.use(express.static("admin/build"));
app.get("/admin", (req, res) =>
  res.sendFile(path.resolve(__dirname, "admin", "build", "index.html"))
);

// console.log("./client/build/index.html");
app.listen(port, () => {
  console.log(`Port started at ${port}`);
});
