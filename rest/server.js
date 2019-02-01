'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // Please do not remove this line, since CLI uses this line as guidance to import new controllers
const studentRoutes = require('./routes/studentRoute');
const classRoom = require('./Routes/classRoute');
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.DB_HOST);

const db = mongoose.connection;
db.on('error', _err => {
    return `connection error: ${_err}`;
});
db.once('open', _error => {
    return _error;
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', studentRoutes);
app.use('/api', classRoom);

/** start server. */
const server = app.listen(process.env.PORT, () => {
    console.log('Server is running');
});

module.exports = server;
