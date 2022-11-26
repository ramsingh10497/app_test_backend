const express = require("express");
const { getProduct, createProduct } = require("../controllers/product/product");
const router = express.Router();

router.get("/getAll", (req, res) => {
    getProduct(req, res);
});

router.post("/create", (req, res) => {
    createProduct(req, res);
});


module.exports = router;
