// src/components/Toolbar.js

import React, { useState } from 'react';
import { Button, ButtonGroup, Tooltip, Popover, IconButton, makeStyles } from '@material-ui/core';
import { FormatBold, FormatItalic, FormatUnderlined, StrikethroughS, FormatColorText, FormatAlignLeft, FormatAlignCenter, FormatAlignRight } from '@material-ui/icons';
import { SketchPicker } from 'react-color';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  popover: {
    padding: theme.spacing(2),
  },
  colorButton: {
    marginLeft: theme.spacing(1),
  },
}));

const Toolbar = ({ editor }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [color, setColor] = useState('#000000');

  const handleColorClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleColorClose = () => {
    setAnchorEl(null);
  };

  const handleColorChange = (color) => {
    setColor(color.hex);
    editor.addMark('color', color.hex);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'color-popover' : undefined;

  const isMarkActive = (editor, format) => {
    const marks = editor.marks(editor);
    return marks ? marks[format] === true : false;
  };

  const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format);
    if (isActive) {
      editor.removeMark(format);
    } else {
      editor.addMark(format, true);
    }
  };

  return (
    <div className={classes.toolbar}>
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
        <Tooltip title="Text Color">
          <Button onMouseDown={handleColorClick}>
            <FormatColorText />
          </Button>
        </Tooltip>
      </ButtonGroup>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleColorClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <SketchPicker
          color={color}
          onChangeComplete={handleColorChange}
          className={classes.popover}
        />
      </Popover>
      <ButtonGroup variant="contained" color="primary" aria-label="outlined primary button group" style={{ marginLeft: '10px' }}>
        <Tooltip title="Align Left">
          <Button onMouseDown={(event) => {
            event.preventDefault();
            editor.alignText('left');
          }}>
            <FormatAlignLeft />
          </Button>
        </Tooltip>
        <Tooltip title="Align Center">
          <Button onMouseDown={(event) => {
            event.preventDefault();
            editor.alignText('center');
          }}>
            <FormatAlignCenter />
          </Button>
        </Tooltip>
        <Tooltip title="Align Right">
          <Button onMouseDown={(event) => {
            event.preventDefault();
            editor.alignText('right');
          }}>
            <FormatAlignRight />
          </Button>
        </Tooltip>
      </ButtonGroup>
    </div>
  );
};

export default Toolbar;
