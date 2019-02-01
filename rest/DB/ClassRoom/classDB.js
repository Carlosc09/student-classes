const Class = require('../../models/class_model');
const _ = require('lodash');

module.exports = {
    insert(body) {
        return new Promise((resolve, reject) => {
            const classRoom = new Class(body);
            classRoom.save((err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    },

    getAll() {
        return new Promise((resolve, reject) => {
            Class.find({}).sort({
            }).exec((err, doc) => {
                if (err) {
                    reject(err);
                }
                doc.forEach(user => {
                    if(user.LogInfo) {
                        user.LogInfo = {};
                    }
                });
                resolve(doc);
            });
        });
    },

    search(by) {
        return new Promise((resolve, reject) => {
            Class.find(by).exec((err, doc) => {
                if (err) {
                    reject(err);
                }
                if(doc) {
                    resolve(doc);
                } else {
                    resolve({message :'not found'});
                }
            });
        });
    },

    getStudents(id) {
        return new Promise((resolve, reject) => {
            Class.find({_id: id}).exec((err, doc) => {
                if (err) {
                    reject(err);
                }
                if(doc) {
                    resolve(doc[0].Student);
                } else {
                    resolve([]);
                }
            });
        });
    },

    edit(_body) {
        return new Promise((resolve, reject) => {
            Class.findById(_body._id, (error, result) => {
                if(error) {
                    reject(error);
                }
                if(result) {
                    result.Code = _body.Code;
                    result.Title = _body.Title;
                    result.Description = _body.Description;
                    result.save((err, res) => {
                        if(err) {
                            reject(err);
                        }
                        res.LogInfo = {};
                        resolve(res);
                    });
                } else {
                    reject({ status: 401, message: 'class not found'});
                }
            });
        });
    },

    delete(id) {
        return new Promise((resolve, reject) => {
            Class.deleteOne({ _id: id }, (err, info) => {
                if (err) {
                    reject(err);
                }
                resolve(info);
            });
        });
    },

    addStudent(id, _student) {
        return new Promise((resolve, reject) => {
            Class.findById(id, (err, result) => {
                if(err) {
                    reject(err);
                }
                let found = _.find(result.Student, _student);
                if(found) {
                    reject({status: '401', message: 'student duplicate'});
                } else {
                    result.Student.push(_student);
                    result.save((_err, _res) => {
                        if(_err) {
                            reject(_err);
                        }
                        _res.LogInfo = {};
                        resolve(_res);
                    });
                }
            });
        });
    }
};
