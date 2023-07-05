var express = require('express')
var bookCtrl = require('../Control/bookController');
const router = express.Router();
//    res.send("get all notes"); in controller
router.get('/books', bookCtrl.getBookList);
router.post('/books/save', bookCtrl.saveBookQuery);
router.get('/books/details/:bookId', bookCtrl.getBookDetails);
router.put("/book/update", bookCtrl.updateBookQuery);
router.delete('/books/delete/:bookId', bookCtrl.deleteBook);

module.exports = router; 