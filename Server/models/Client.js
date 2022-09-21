const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
});

const ClientModel = mongoose.model("ClientModel",  ClientSchema, "client");
module.exports = ClientModel;

