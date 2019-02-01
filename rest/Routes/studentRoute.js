'use strict';

// auth controller routes
const express = require('express');
const router = express.Router();
const student = require('../Controller').student;

router.get('/student', (req, res) => {
    student.getAll(req, res);
});

router.get('/student/:id', (req, res) => {
    student.getClases(req, res);
});

router.post('/student/:id', (req, res) => {
    student.search(req, res);
});

router.post('/student', (req, res) => {
    student.insert(req, res);
});

router.put('/student/', (req, res) => {
    student.edit(req, res);
});

router.delete('/student', (req, res) => {
    student.delete(req, res);
});

router.patch('/student/:id/', (req, res) => {
    student.addClass(req, res);
});

module.exports = router;
