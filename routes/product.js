const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const Product = require("../models/Product");

//create
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const saveProduct = await newProduct.save();
    res.status(200).json(saveProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get product
router.get("/find/:id", async (req, res) => {
  try {
    const Product_ = await Product.findById(req.params.id);
    res.status(200).json(Product_);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get  all Products
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCat = req.query.category;
  try {
    let products;
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCat) {
      products = await Product.find({
        categories: {
          $in: [qCat],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
