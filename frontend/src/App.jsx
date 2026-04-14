import React, { useState, useEffect } from 'react';
import SplitPane from './components/SplitPane';
import { getNotes } from './services/api';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [markdownText, setMarkdownText] = useState('');

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const fetchedNotes = await getNotes();
        setNotes(fetchedNotes);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    
    fetchNotes();
  }, []);

  const handleSelectNote = (id) => {
    setSelectedNoteId(id);
    const selected = notes.find(n => n.id === id);
    if (selected) {
      setMarkdownText(selected.content);
    }
  };

  return (
    <div className="app-container">
      <SplitPane 
        notes={notes}
        selectedNoteId={selectedNoteId}
        onSelectNote={handleSelectNote}
        markdownText={markdownText} 
        setMarkdownText={setMarkdownText} 
      />
    </div>
  );
}

export default App;
