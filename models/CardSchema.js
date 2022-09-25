const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Ekartdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) .then(() => console.log("Connected to DB successfull"))

//card schema

const cardSchema = new mongoose.Schema({
    cardId:{
        type:String,//CDI-01
    },
    userId: {
        type:String,//UI-01
        unique: true,
        required: true
    },
    cardNumber: {
        type: Number,
        required: true
    },
    nameOnCard: {
        type: String,
        required: true
    },
    expiryMonth: {
        type: Number,
        required: true
    },
    expiryYear: {
        type: Number,
        required: true
    },
})

const Card = mongoose.model('Card', cardSchema);
module.exports=Card;