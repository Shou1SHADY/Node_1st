var express = require('express')
var noteCtrl = require('../Control/noteControl');
const router = express.Router();
//    res.send("get all notes"); in controller
router.get('/notes', noteCtrl.getAllNotes);
router.post('/notes/save', noteCtrl.saveAllNotes);
router.put("/notes/update", noteCtrl.updateAllNotes);
router.delete('/notes/delete/:noteId', noteCtrl.deleteAllNotes);
// fault export default router ; 
module.exports = router; 