const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Ekartdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) .then(() => console.log("Connected to DB successfull"))

//order schema

const OrderSchema = new mongoose.Schema({
    userId:{
        type:String,//UI-01
        required:true
    },
    addressId:{
        type:String,//AI-01
        required:true
    },
    cartId:{
        type:String,//CI-01
        required:true
    }
})

const Order = mongoose.model('Order', orderSchema);
module.exports=Order;