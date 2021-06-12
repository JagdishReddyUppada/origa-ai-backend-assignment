const express = require('express');
const app = express();

const userRoutes = require('./userRoutes')
const orderRoutes = require ('./orderRoutes')

app.use('/user', userRoutes);
app.use('/order', orderRoutes);


module.exports = app;