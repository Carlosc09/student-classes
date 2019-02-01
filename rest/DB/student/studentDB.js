const Student = require('../../models/student_Model');
const _ = require('lodash');

module.exports = {
    insert(body) {
        return new Promise((resolve, reject) => {
            const student = new Student(body);
            student.save((err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    },

    getAll() {
        return new Promise((resolve, reject) => {
            Student.find({}).sort({
            }).exec((err, doc) => {
                if (err) {
                    reject(err);
                }
                resolve(doc);
            });
        });
    },

    getClases(id) {
        return new Promise((resolve, reject) => {
            Student.find({_id: id}).exec((err, doc) => {
                if (err) {
                    reject(err);
                }
                if(doc) {
                    resolve(doc[0].Class);
                } else {
                    resolve([]);
                }
            });
        });
    },

    search(by) {
        return new Promise((resolve, reject) => {
            Student.find(by).exec((err, doc) => {
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

    edit(_body) {
        return new Promise((_resolve, _reject) => {
            Student.findById(_body._id, (err, result) => {
                if(err) {
                    _reject(_err);
                }
                result.Id = _body.Id;
                result.FirstName = _body.FirstName;
                result.LastName = _body.LastName;
                result.Class = _body.Class;
                result.save((_err, _res) => {
                    if(_err) {
                        _reject(_err);
                    }
                    _resolve(_res);
                });
            });
        });
    },

    delete(_users) {
        return new Promise((resolve, reject) => {
            Student.deleteOne({ _id: _users._id }, (err, info) => {
                if (err) {
                    reject(err);
                }
                resolve(info);
            });
        });
    },

    addClass(id, _class) {
        return new Promise((resolve, reject) => {
            Student.findById(id, (err, result) => {
                if(err) {
                    reject(_err);
                }
                let found = _.find(result.Class, _class);
                if(found) {
                    reject({status: '401', message: 'class duplicate'});
                } else {
                    result.Class.push(_class);
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
