'use strict';

const student = require('../../DB').student;

module.exports = {
    getAll(req, res) {
        student.getAll({}).then(_res => {
            res.send(_res);
        }).catch(_err => {
            res.status(500).send(_err);
        });
    },

    getClases(req, res) {
        student.getClases(req.params.id).then(_res => {
            res.send(_res);
        }).catch(_err => {
            res.status(500).send(_err);
        });
    },

    search(req, res) {
        student.search(req.body).then(_res => {
            res.send(_res);
        }).catch(_err => {
            res.status(500).send(_err);
        });
    },

    insert(req, res) {
        student.insert(req.body).then(_res => {
            res.send(_res);
        }).catch(_err => {
            res.status(500).send(_err);
        });
    },

    edit(req, res) {
        student.edit(req.body).then(_res => {
            res.send(_res);
        }).catch(_err => {
            res.status(500).send(_err);
        });
    },

    delete(req, res) {
        student.delete(req.body).then(_res => {
            res.send(_res);
        }).catch(_err => {
            res.status(500).send(_err);
        });
    },

    addClass(req, res) {
        student.addClass(req.params.id, req.body).then(_res => {
            res.send(_res);
        }).catch(_err => {
            res.status(500).send(_err);
        });
    },
};
