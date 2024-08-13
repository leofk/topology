// src/components/Helpers/KeyComponent.js
import React from 'react';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css'; // Import KaTeX CSS for styling

const KeyComponent = ({ color, label }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
      <div
        style={{
          width: 4, // Make the line thinner
          height: 40, // Make the line longer
          backgroundColor: color,
          marginRight: 8,
        }}
      />
      <InlineMath math={label} />
    </div>
  );
};

export default KeyComponent;
