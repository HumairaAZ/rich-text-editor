// src/components/Toolbar.js

import React from 'react';
import { Button, ButtonGroup, Tooltip } from '@material-ui/core';
import { FormatBold, FormatItalic, FormatUnderlined, StrikethroughS, FormatAlignLeft, FormatAlignCenter, FormatAlignRight } from '@material-ui/icons';
import { Editor, Transforms } from 'slate';

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
    <div>
      <ButtonGroup variant="contained" color="primary" aria-label="outlined primary button group">
        <Tooltip title="Bold">
          <Button onMouseDown={(event) => {
            event.preventDefault();
            toggleMark(editor, 'bold');
          }}>
            <FormatBold />
          </Button>
        </Tooltip>
        <Tooltip title="Italic">
          <Button onMouseDown={(event) => {
            event.preventDefault();
            toggleMark(editor, 'italic');
          }}>
            <FormatItalic />
          </Button>
        </Tooltip>
        <Tooltip title="Underline">
          <Button onMouseDown={(event) => {
            event.preventDefault();
            toggleMark(editor, 'underlined');
          }}>
            <FormatUnderlined />
          </Button>
        </Tooltip>
        <Tooltip title="Strikethrough">
          <Button onMouseDown={(event) => {
            event.preventDefault();
            toggleMark(editor, 'strikethrough');
          }}>
            <StrikethroughS />
          </Button>
        </Tooltip>
      </ButtonGroup>
      <ButtonGroup variant="contained" color="primary" aria-label="outlined primary button group" style={{ marginLeft: '10px' }}>
        <Tooltip title="Align Left">
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
        </Tooltip>
        <Tooltip title="Align Center">
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
        </Tooltip>
        <Tooltip title="Align Right">
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
        </Tooltip>
      </ButtonGroup>
    </div>
  );
};

export default Toolbar;
