const express = require("express");
const { default: mongoose } = require("mongoose");
const productRoute = require('./routes/product.route.js');
const app = express()

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/products', productRoute);


app.get('/', (req, res) => {
    res.send("hello from node Api server");
});

// To connect mongodb database

mongoose.connect("mongodb+srv://sam:<your data base key>@cluster0.mmlyo5r.mongodb.net/Crud-Api?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected bhai jan");
        app.listen(3000, () => {
            console.log("Server is running on port 3000 theak hai na??");

        });
    })
    .catch(() => {
        console.log("Connection Failed")
    });