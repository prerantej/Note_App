import React from 'react';
import NotesList from './NotesList';
import Editor from './Editor';
import Preview from './Preview';

const SplitPane = () => {
  return (
    <div className="split-pane">
      <NotesList />
      <Editor />
      <Preview />
    </div>
  );
};

export default SplitPane;
