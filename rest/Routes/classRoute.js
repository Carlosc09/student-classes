'use strict';

// auth controller routes
const express = require('express');
const router = express.Router();
const classRoom = require('../Controller').classRoom;

router.get('/class', (req, res) => {
    classRoom.getAll(req, res);
});

router.get('/class/:id', (req, res) => {
    classRoom.getStudents(req, res);
});

router.post('/class/:id', (req, res) => {
    classRoom.search(req, res);
});

router.post('/class', (req, res) => {
    classRoom.insert(req, res);
});

router.put('/class', (req, res) => {
    classRoom.edit(req, res);
});

router.delete('/class/:id/', (req, res) => {
    classRoom.delete(req, res);
});

router.patch('/class/:id/', (req, res) => {
    classRoom.addStudent(req, res);
});

module.exports = router;
