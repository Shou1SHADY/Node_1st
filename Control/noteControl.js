
var generator = require("../Util/generator");

var memStorage = require("../Util/memory.storage");
var model = require('../model/note.model');
exports.getAllNotes = (req, res) => {
    // var seqId = generator.generate();
    // memStorage.store.setItem(seqId, "1st_Key");
    // var seqId2 = generator.generate();
    // memStorage.store.setItem(seqId2, "2nd_Key");

    // var keys = memStorage.getKeys(memStorage.store);
    var values = memStorage.getValues(memStorage.store);
    console.log("Values......... " + JSON.stringify(values));
    return res.status(200).send(JSON.stringify(values));
    // var Note = model.Note;
    // var noteObj = new Note(seqId, "ccc", "ssss", new Date(), "sas");
    // res.send("get all notes...KEYS ......  " + JSON.stringify(noteObj));

}




exports.updateAllNotes = (req, res) => {

    var createdBy = "Admin";
    var createOn = new Date();
    // req . body
    //var title = ''; gives error
    //var content = '';
    var noteId = req.body.noteId;
    var title = req.body.title;
    var content = req.body.content;
    if (!noteId) {

        return res.status(500).send({ error: 'noteId shouas  akakasja ' });

    }
    if (!title || !content) {
        //lazm tktb return
        return res.status(500).send({ error: ' title and content mandatory' })
    }
    var noteItem = memStorage.store.getItem(noteId);
    if (!noteItem) {
        return res.status(500).send({ error: 'noteId does not exist' })

    }

    var Note = model.Note;
    var noteObj = new Note(noteId, title, content, createOn, createdBy);
    memStorage.store.setItem(noteId, noteObj);
    return res.status(200).send("Successs note UPDATE");

}




exports.saveAllNotes = (req, res) => {
    var seqId = generator.generate();
    var createdBy = "Admin";
    var createOn = new Date();
    // req . body
    //var title = ''; gives error
    //var content = '';
    var title = req.body.title;
    var content = req.body.content;
    if (!title || !content) {
        //lazm tktb return
        return res.status(500).send({ error: ' titlewewewee and content mandatory' });
    }

    var Note = model.Note;
    var noteObj = new Note(seqId, title, content, createdBy, createOn);
    memStorage.store.setItem(seqId, noteObj);
    return res.status(201).send("Successs note save");

}





exports.deleteAllNotes = (req, res) => {

    var noteId = req.params.noteId;
    if (!noteId) {
        return res.status(500).send({ error: 'noteId shouas  akakasja ' });
    }
    var noteItem = memStorage.store.getItem(noteId);
    if (!noteItem) {
        return res.status(500).send({ error: 'noteId does not exist' })

    }

    memStorage.store.removeItem(noteId);
    return res.status(200).send("Successfullt note deleted");

}