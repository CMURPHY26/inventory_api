const express = require('express');
const products = express.Router();
const Product = require('../models/product.js');


products.post("/", (req, res) => {
    console.log(req.body);
    Product.create( req.body, (error, createdProduct) => {
        if (error) {
            res.status(400).json({error: error.message})
        } 
        res.status(200).json(createdProduct); 
    })
})

products.get("/", (req, res) => {
    console.log("inventory index");
})

module.exports = products;