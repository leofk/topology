// src/MarkdownRenderer.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import '../css/MarkdownRenderer.css';

const content = `
## The fundamental group
We suppose the fundmental group is a group of homotopy classes under the path concatenation operation.
### Proof
## Identity Axiom
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
