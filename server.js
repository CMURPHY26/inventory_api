require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const productsController = require('./controllers/products.js');
const Product = require('./models/product.js');
const faker = require('faker');
const { fake } = require('faker');

// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

//...farther down the page

mongoose.connect('mongodb://localhost:27017/products', { useNewUrlParser: true , useUnifiedTopology: true})
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})

//MiddleWare
app.use(express.json());//use .json(), not .urlencoded()
app.use("/products", productsController);


app.get("/products/seed", (req, res) => {

    for(let i = 0; i < 10; i++) {
        Product.create([
            {
                name: faker.commerce.productName(),
                description: faker.commerce.productMaterial(),
                item_type: faker.commerce.department(),
                qty: faker.random.number(),
                price: faker.commerce.price()
            }
        ])
    }
    res.redirect("/products");
})

app.listen(PORT, () => {
    console.log("Running on Port", PORT)
})