// src/components/Toolbar.js

import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { FormatBold, FormatItalic, FormatUnderlined, StrikethroughS } from '@material-ui/icons';

const Toolbar = ({ editor }) => {
  const toggleMark = (event, format) => {
    event.preventDefault();
    editor.exec({ type: 'toggle_mark', format });
  };

  return (
    <ButtonGroup variant="contained" color="primary" aria-label="outlined primary button group">
      <Button onMouseDown={(event) => toggleMark(event, 'bold')}>
        <FormatBold />
      </Button>
      <Button onMouseDown={(event) => toggleMark(event, 'italic')}>
        <FormatItalic />
      </Button>
      <Button onMouseDown={(event) => toggleMark(event, 'underlined')}>
        <FormatUnderlined />
      </Button>
      <Button onMouseDown={(event) => toggleMark(event, 'strikethrough')}>
        <StrikethroughS />
      </Button>
    </ButtonGroup>
  );
};

export default Toolbar;
