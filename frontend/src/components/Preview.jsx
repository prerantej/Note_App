import React from 'react';
import ReactMarkdown from 'react-markdown';

const Preview = ({ text }) => {
  return (
    <div className="preview-pane">
      <div className="preview-content">
        {text ? (
          <ReactMarkdown>{text}</ReactMarkdown>
        ) : (
          <p>Markdown preview will appear here...</p>
        )}
      </div>
    </div>
  );
};

export default Preview;
