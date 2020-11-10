import Note from './note.js'
import Notes from './notes.js'
import Db from './db.js'
import NotesUI from './ui.js'
//przycisk pokaż wszytskie notatki
document.querySelector('#shownotes').addEventListener('click', showsNotes)
//dodaj notatkę 
document.querySelector('#noteAdd').addEventListener('click', addNoteto)
const notePad = new Notes('main')
function addNoteto(){
    console.log('main')
    const noteTitle = document.querySelector('#noteTitle').value
    const noteContent = document.querySelector('#noteContent').value
    const noteColor = document.querySelector('#Color').value
    notePad.addNote(new Note(noteTitle,noteContent,noteColor))


}
function showsNotes(){
    console.log('dodane')
}
