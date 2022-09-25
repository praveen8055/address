const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Ekartdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) .then(() => console.log("Connected to DB successfull"))

//product schema

const ProductSchema = new mongoose.Schema({
    productId: {
        type: String,
        unique: true,
    },
    displayName: {
        type: String,
        required: true,
    },
    shortDesc: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    deliveryCharge: {
        type: Number,
        requiredL: true,
    },
},
);

const productModel = mongoose.model('ProductSchema', ProductSchema);
module.exports = productModel;