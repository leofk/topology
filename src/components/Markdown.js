// src/components/MarkdownComponent.js
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import '../css/MarkdownRenderer.css';

const MarkdownComponent = ({ fileName }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    import(`../markdown/${fileName}.md`)
      .then((file) => fetch(file.default))
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, [fileName]);

  return (
    <div className="markdown-container">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownComponent;
