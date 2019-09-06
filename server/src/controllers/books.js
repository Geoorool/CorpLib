const Books = require('../models/books');

exports.all = function (req, res) {
    res.send(Books.all);
};

exports.findById = function (req, res) {
    res.send(Books.findById(req.params.id));
};