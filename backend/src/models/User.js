const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        required: true,  
    },
    stocks: [{
        stockId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Stock', 
        },
        tickerSymbol: {
            type: String,
            required: true,
        },
        companyName: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            default: 0,
        },
    }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
