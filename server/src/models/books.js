const booksData = require('../data.json');

exports.all = booksData.books;

exports.findById = function (id){
    const res = Array.from(booksData.books).find(el => el.id === id);    
    return res;
}