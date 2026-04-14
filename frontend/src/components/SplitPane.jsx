import React from 'react';
import Editor from './Editor';
import Preview from './Preview';

const SplitPane = () => {
  return (
    <div className="split-pane">
      <Editor />
      <Preview />
    </div>
  );
};

export default SplitPane;
