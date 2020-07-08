const mongoose = require('mongoose');

const productSchema = mongoose.Schema( {
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    item_type: {type: String, required: true},
    qty: {type: Number,  default: 0},
    price: {type: Number, default: 25}
})

module.exports = mongoose.model('Product', productSchema);