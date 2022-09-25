const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Ekartdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) .then(() => console.log("Connected to DB successfull"))
//seller details schema

const sellerDetailsSchema = new mongoose.Schema({
    productId: {
        type: String //PI-01
    },
    offerPrice: {
        type: Number,
    },
    seller: {
        type: String,
        required: true
    },
    avgRating: {
        type: String
    },
    reviews: {
        type: [{
            userId: String, //UI-01
            reviews: String,
            reviewComment: String,
        }],
        default: undefined
    },

})

const SellerDetails = mongoose.model('SellerDetails', sellerDetailsSchema);
module.exports = SellerDetails;