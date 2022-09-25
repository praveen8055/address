const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Ekartdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) .then(() => console.log("Connected to DB successfull"))

//address schema

const addressSchema = new mongoose.Schema({
    userId: {
        type: String, //UI-01
        unique: false
    },
    addressId: {
        type: String, //AI-01
        unique: true,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pinCode: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    }
},
);

const addressModel = mongoose.model('addressSchema', addressSchema);
module.exports=addressModel;