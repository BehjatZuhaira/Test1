const express = require("express");
const app = express();
const mongoose = require('mongoose');
const ClientModel = require('./models/Client');

mongoose.connect("mongodb+srv://behjat:behjat123@cluster0.kgze4su.mongodb.net/bzdata?retryWrites=true&w=majority");

app.get("/getClients", (req, res) => {
    ClientModel.find({}, (err, result) => {
        if(err){
            res.json(err);
        } else {
           // console.log(result);
            res.json(result); 
        }
    });
});

app.listen(3001, () => {
    console.log("Server is running...");
});


    