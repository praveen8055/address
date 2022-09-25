const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Ekartdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) .then(() => console.log("Connected to DB successfull"))

//user schema

const userSchema = new mongoose.Schema({
    userId: {
        type: String, //UI-01
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);
module.exports=User;