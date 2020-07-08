const express = require('express');
const items = express.Router();

items.get("/", (req, res) => {
    console.log("inventory index");
})

module.exports = items;