function addNote() {
    const noteInput = document.getElementById('noteInput');
    const notesList = document.getElementById('notesList');
    if (noteInput.value) {
        const note = document.createElement('li');
        note.textContent = noteInput.value;
        notesList.appendChild(note);
        saveNotes();
        noteInput.value = '';
    }
}

function saveNotes() {
    const notes = Array.from(document.querySelectorAll('#notesList li')).map(li => li.textContent);
    localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const notesList = document.getElementById('notesList');
    notes.forEach(noteText => {
        const note = document.createElement('li');
        note.textContent = noteText;
        notesList.appendChild(note);
    });
}

window.onload = loadNotes;
