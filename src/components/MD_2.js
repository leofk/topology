// src/MarkdownRenderer.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import '../css/MarkdownRenderer.css';

const content = `
## Path Homotopy
`;

const MarkdownRenderer = () => {
  return (
    <div className="markdown-container">
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
