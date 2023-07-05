var express = require('express')
var storeCtrl = require('../Control/storeController');
const router = express.Router();
//    res.send("get all notes"); in controller
router.get('/stores', storeCtrl.getStoreList);
router.post('/stores/save', storeCtrl.saveStoreQuery);
// router.put("/notes/update", noteCtrl.updateAllNotes);
// router.delete('/notes/delete/:noteId', noteCtrl.deleteAllNotes);

module.exports = router; 