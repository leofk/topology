import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import '../css/MarkdownRenderer.css';

const Markdown = ({ fileName, markdownContent }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    if (fileName) {
      import(`../markdown/${fileName}.md`)
        .then((file) => fetch(file.default))
        .then((response) => response.text())
        .then((text) => setContent(text));
    } else if (markdownContent) {
      setContent(markdownContent);
    }
  }, [fileName, markdownContent]);

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

export default Markdown;
