const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product');
const customerRoutes = require('./routes/customer');
const orderRoutes = require('./routes/order');
const orderDetailRoutes = require('./routes/orderDetail');
const userRoutes = require('./routes/user');
const path = require('path');

const app = express();

//mongoose.connect('mongodb+srv://mohamedwertani:20104074@cluster0.3rvlm.mongodb.net/dev?retryWrites=true&w=majority', {
mongoose.connect('mongodb+srv://test:test@cluster0.6lzun.mongodb.net/dev?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/orderDetail', orderDetailRoutes);

module.exports = app;