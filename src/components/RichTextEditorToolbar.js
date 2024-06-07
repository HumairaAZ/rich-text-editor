import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { FormatBold, FormatItalic, FormatUnderlined, Code, Undo, Redo } from '@material-ui/icons';

const RichTextEditorToolbar = ({ onBold, onItalic, onUnderline, onCode, onUndo, onRedo }) => (
  <AppBar position="static">
    <Toolbar className="bg-gray-800 text-white">
      <Typography variant="h6">Rich Text Editor</Typography>
      <IconButton color="inherit" onClick={onBold} aria-label="Bold" className="hover:bg-gray-700">
        <FormatBold />
      </IconButton>
      <IconButton color="inherit" onClick={onItalic} aria-label="Italic" className="hover:bg-gray-700">
        <FormatItalic />
      </IconButton>
      <IconButton color="inherit" onClick={onUnderline} aria-label="Underline" className="hover:bg-gray-700">
        <FormatUnderlined />
      </IconButton>
      <IconButton color="inherit" onClick={onCode} aria-label="Code" className="hover:bg-gray-700">
        <Code />
      </IconButton>
      <IconButton color="inherit" onClick={onUndo} aria-label="Undo" className="hover:bg-gray-700">
        <Undo />
      </IconButton>
      <IconButton color="inherit" onClick={onRedo} aria-label="Redo" className="hover:bg-gray-700">
        <Redo />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default RichTextEditorToolbar;
