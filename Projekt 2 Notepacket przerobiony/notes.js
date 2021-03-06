import Db from './db.js'
import NotesUI from './ui.js'
class Notes {
    constructor(containerSelector) {
        this.notesArr = [];
        this.db = new Db();
        this.notesUI = new NotesUI(containerSelector)
    }

    addNote(note) {
        this.notesArr.push(note);
        this.db.saveNotes(this.notesArr);
        this.notesUI.addNote(note);
    }
    removeNote(id) {
        
    }
    getNotes() {
        return this.notesArr;
    } 
    getNote(id) {
        return this.notesArr.find(el => el.id === id);
    } 
    loadNotesFromLocalStorage(){
        if(this.db.getNotes()){
        this.notesArr = this.db.getNotes()
        this.notesArr.forEach(note => {
            this.notesUI.addNote(note)
        
        }) };
    }
}
export default Notes
