const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Ekartdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) .then(() => console.log("Connected to DB successfull"))

//cart schema

const cartSchema = new mongoose.Schema({
    cartId:{
        type: String, //CI-01
        required: true,
        unique: true
    },
    userId: {
        type: String, //UI-01
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    productId: {
        type: String, //PI-01
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    }
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports=Cart;