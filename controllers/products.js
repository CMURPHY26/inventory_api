const express = require('express');
const products = express.Router();

products.get("/", (req, res) => {
    console.log("inventory index");
})

module.exports = products;