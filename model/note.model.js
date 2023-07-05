exports.Note = class Note {

    constructor(noteId, title, content, createdBy, createOn) {

        this.noteId = noteId;
        this.title = title;
        this.content = content;

        this.createdBy = createdBy;
        this.createOn = createOn;
    }

}