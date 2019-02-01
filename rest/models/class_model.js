'use strict';

const mongoose = require('mongoose');

const ClassSchema = mongoose.Schema({
    Code: {
        type: String,
        required: true,
        unique: true
    },
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Student: {
        type: Array
    }
  });

module.exports = mongoose.model('Class', ClassSchema);
