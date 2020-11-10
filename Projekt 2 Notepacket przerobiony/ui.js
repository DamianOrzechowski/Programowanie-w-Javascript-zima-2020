class NotesUI {
    constructor(containerSelector) {
        this.notesContainer = this.getNotesContainer(containerSelector)
    }
    getNotesContainer(containerSelector) {
        return document.querySelector(containerSelector)
    }
    createNote(note) {
        const htmlNote = document.createElement('div')
        htmlNote.classList.add('note')
        const htmlTitle = document.createElement('h1')
        const htmlContent = document.createElement('p')
        const htmlDate = document.createElement('h4')
        const htmlRemoveBtn = document.createElement('button')
        const htmlPinnedBtn = document.createElement('button')

        htmlPinnedBtn.addEventListener('click',()=>{
        if(note.pinned){
            note.pinned = false 
            htmlPinnedBtn.innerHTML = 'przypnij'
        }else{
            note.pinned = true
            htmlPinnedBtn.innerHTML = 'odepnij'
        }
        })
        htmlTitle.innerHTML = note.title
        htmlContent.innerHTML = note.content
        htmlDate.innerHTML = note.createdDate.toLocaleString()
        htmlRemoveBtn.innerHTML = 'usuń'
        if(note.pinned){
        htmlPinnedBtn.innerHTML = 'odepnij'
        }
        else{
        htmlPinnedBtn.innerHTML = 'przypnij'
        }
        htmlNote.classList.add('note')
        htmlNote.appendChild(htmlTitle)
        htmlNote.appendChild(htmlContent)
        htmlNote.appendChild(htmlDate)
        htmlNote.appendChild(htmlRemoveBtn)
        htmlNote.appendChild(htmlPinnedBtn)
        

        return htmlNote;
    }
    getNote(id) {
        const noteSelector = '#'+ id;
        this.notesContainer.querySelector(noteSelector);
    }
    addNote(note) {
        const htmlNote = this.createNote(note);
        this.notesContainer.appendChild(htmlNote)
        
    }
    removeNote(id) {
        const htmlNote = this.getNote(id);
        this.notesContainer.removeChild(htmlNote)
    }
}
export default NotesUI