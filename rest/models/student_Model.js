'use strict';

const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    Id: {
        type: String,
        required: true,
        unique: true
    },
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Student', StudentSchema);
