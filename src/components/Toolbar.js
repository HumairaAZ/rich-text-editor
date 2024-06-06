// src/components/Toolbar.js

import React from 'react';
import { Button, ButtonGroup, IconButton, Tooltip } from '@material-ui/core';
import { FormatBold, FormatItalic, FormatUnderlined, StrikethroughS, FormatColorText, FormatAlignLeft, FormatAlignCenter, FormatAlignRight } from '@material-ui/icons';
import { Editor, Transforms, Text } from 'slate';
import { SketchPicker } from 'react-color';

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

const Toolbar = ({ editor, setColor }) => {
  return (
    <div>
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
        <Button onMouseDown={(event) => {
          event.preventDefault();
          toggleMark(editor, 'color');
        }}>
          <FormatColorText />
        </Button>
      </ButtonGroup>
      <SketchPicker
        color="#000000"
        onChangeComplete={(color) => {
          setColor(color.hex);
        }}
      />
      <ButtonGroup variant="contained" color="primary" aria-label="outlined primary button group" style={{ marginLeft: '10px' }}>
        <Button onMouseDown={(event) => {
          event.preventDefault();
          Transforms.setNodes(
            editor,
            { align: 'left' },
            { match: n => Editor.isBlock(editor, n) }
          );
        }}>
          <FormatAlignLeft />
        </Button>
        <Button onMouseDown={(event) => {
          event.preventDefault();
          Transforms.setNodes(
            editor,
            { align: 'center' },
            { match: n => Editor.isBlock(editor, n) }
          );
        }}>
          <FormatAlignCenter />
        </Button>
        <Button onMouseDown={(event) => {
          event.preventDefault();
          Transforms.setNodes(
            editor,
            { align: 'right' },
            { match: n => Editor.isBlock(editor, n) }
          );
        }}>
          <FormatAlignRight />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Toolbar;
