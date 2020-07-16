const express = require('express');
const products = express.Router();
const Product = require('../models/product.js');




//SHOW ROUTE
products.get("/:id", (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        if(err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).json(foundProduct);
    })
})


//UPDATE ROUTE
products.put("/:id", (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedProduct) => {
        if (err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).json(updatedProduct);
    })
})


//DELETE ROUTE
products.delete("/:id", (req, res) => {
    Product.findOneAndRemove(req.params.id, (err, deletedProduct) => {
        if (err) {
            res.status(400).json({error: err.message});
        }

        res.status(200).json(deletedProduct);
    })
})

//CREATE ROUTE
products.post("/new", (req, res) => {
    console.log(req.body);
    Product.create( req.body, (error, createdProduct) => {
        if (error) {
            res.status(400).json({error: error.message})
        } 
        res.status(200).json(createdProduct); 
    })
})

//Index Route
products.get("/", (req, res) => {
    Product.find({}, (err, foundProducts) => {
        if(err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).json(foundProducts);
    })
})

module.exports = products;