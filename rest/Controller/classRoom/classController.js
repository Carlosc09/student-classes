'use strict';

const classRoom = require('../../DB').classRoom;

module.exports = {
    getAll(req, res) {
        classRoom.getAll({}).then(_res => {
            res.send(_res);
        }).catch(err => {
            res.status(500).send(err);
        });
    },

    getStudents(req, res) {
        classRoom.getStudents(req.params.id).then(_res => {
            res.send(_res);
        }).catch(_err => {
            res.status(500).send(_err);
        });
    },

    search(req, res) {
        classRoom.search(req.body).then(_res => {
            res.send(_res);
        }).catch(_err => {
            res.status(500).send(_err);
        });
    },

    insert(req, res) {
        classRoom.insert(req.body).then(_res => {
            res.send(_res);
        }).catch(_err => {
            res.status(500).send(_err);
        });
    },

    edit(req, res) {
        classRoom.edit(req.body).then(_res => {
            res.send(res);
        }).catch(_err => {
            res.status(500).send(err);
        });
    },

    delete(req, res) {
        classRoom.delete(req.params.id).then(_res => {
            res.send(_res);
        }).catch(err => {
            res.status(500).send(err);
        });
    },

    addStudent(req, res) {
        classRoom.addStudent(req.params.id, req.body).then(_res => {
            res.send(_res);
        }).catch(err => {
            res.status(500).send(err);
        });
    },
};
