import React from 'react';

const Editor = ({ text, setText }) => {
  return (
    <div className="editor-pane">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write markdown here..."
        className="editor-textarea"
      />
    </div>
  );
};

export default Editor;
