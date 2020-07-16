const express = require('express');
const products = express.Router();
const Product = require('../models/product.js');




products.delete("/:id", (req, res) => {
    Product.findOneAndRemove(req.params.id, (err, deletedProduct) => {
        if (err) {
            res.status(400).json(error: err.message);
        }
        
        res.status(200).json(deletedProduct);
    })
})

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
    Product.find({}, (err, foundProducts) => {
        if(err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).json(foundProducts);
    })
})

module.exports = products;