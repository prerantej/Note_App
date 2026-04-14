import React, { useState } from 'react';
import SplitPane from './components/SplitPane';
import './App.css';

function App() {
  const [markdownText, setMarkdownText] = useState('');

  return (
    <div className="app-container">
      <SplitPane 
        markdownText={markdownText} 
        setMarkdownText={setMarkdownText} 
      />
    </div>
  );
}

export default App;
