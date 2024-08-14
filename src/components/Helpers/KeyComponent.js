import React from 'react';
import { Typography } from '@mui/material';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const KeyComponent = ({ color, label }) => (
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
    <div
      style={{
        width: 2, // Thin line instead of box
        height: 20,
        backgroundColor: color,
        marginRight: 8,
      }}
    />
    {/* <Typography variant="body1"> */}
      <InlineMath math={label} />
    {/* </Typography> */}
  </div>
);

export default KeyComponent;
