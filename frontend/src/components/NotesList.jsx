import React from 'react';

const NotesList = ({ notes, selectedNoteId, onSelectNote }) => {
  return (
    <div className="notes-list-pane">
      <ul className="notes-list">
        {notes.length === 0 ? (
          <li className="note-item" style={{ cursor: 'default' }}>No notes found</li>
        ) : (
          notes.map((note) => (
            <li 
              key={note.id} 
              className={`note-item ${note.id === selectedNoteId ? 'active' : ''}`}
              onClick={() => onSelectNote(note.id)}
            >
              {note.title}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default NotesList;
