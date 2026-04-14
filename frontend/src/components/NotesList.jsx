import React from 'react';

const mockNotes = [
  { id: 1, title: "First Note" },
  { id: 2, title: "Meeting Notes" },
  { id: 3, title: "Ideas" }
];

const NotesList = () => {
  return (
    <div className="notes-list-pane">
      <ul className="notes-list">
        {mockNotes.map((note) => (
          <li key={note.id} className="note-item">
            {note.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
