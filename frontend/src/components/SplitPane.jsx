import React from 'react';
import NotesList from './NotesList';
import Editor from './Editor';
import Preview from './Preview';

const SplitPane = ({ markdownText, setMarkdownText }) => {
  return (
    <div className="split-pane">
      <NotesList />
      <Editor text={markdownText} setText={setMarkdownText} />
      <Preview text={markdownText} />
    </div>
  );
};

export default SplitPane;
