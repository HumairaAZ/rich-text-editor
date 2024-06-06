// src/components/Toolbar.js

import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { FormatBold, FormatItalic, FormatUnderlined, StrikethroughS } from '@material-ui/icons';
import { Editor, Transforms, Text } from 'slate';

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const Toolbar = ({ editor }) => {
  return (
    <ButtonGroup variant="contained" color="primary" aria-label="outlined primary button group">
      <Button onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, 'bold');
      }}>
        <FormatBold />
      </Button>
      <Button onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, 'italic');
      }}>
        <FormatItalic />
      </Button>
      <Button onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, 'underlined');
      }}>
        <FormatUnderlined />
      </Button>
      <Button onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, 'strikethrough');
      }}>
        <StrikethroughS />
      </Button>
    </ButtonGroup>
  );
};

export default Toolbar;
