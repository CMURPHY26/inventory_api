require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;


const itemsController = require('./controllers/items.js');

app.use("/items", itemsController);





app.listen(PORT, () => {
    console.log("Running on Port", PORT)
})