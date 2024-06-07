import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { FormatBold, FormatItalic, FormatUnderlined, FormatStrikethrough, FormatListBulleted, FormatListNumbered, Code, Undo, Redo } from '@material-ui/icons';

const RichTextEditorToolbar = ({ onBold, onItalic, onUnderline, onStrikethrough, onBulletList, onNumberList, onCode, onUndo, onRedo }) => (
  <AppBar position="static" className="bg-gray-800">
    <Toolbar>
      <Typography variant="h6" className="text-white">Rich Text Editor</Typography>
      <IconButton color="inherit" onClick={onBold} aria-label="Bold" className="hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110">
        <FormatBold />
      </IconButton>
      <IconButton color="inherit" onClick={onItalic} aria-label="Italic" className="hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110">
        <FormatItalic />
      </IconButton>
      <IconButton color="inherit" onClick={onUnderline} aria-label="Underline" className="hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110">
        <FormatUnderlined />
      </IconButton>
      <IconButton color="inherit" onClick={onStrikethrough} aria-label="Strikethrough" className="hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110">
        <FormatStrikethrough />
      </IconButton>
      <IconButton color="inherit" onClick={onBulletList} aria-label="Bullet List" className="hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110">
        <FormatListBulleted />
      </IconButton>
      <IconButton color="inherit" onClick={onNumberList} aria-label="Number List" className="hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110">
        <FormatListNumbered />
    
      </IconButton>
      <IconButton color="inherit" onClick={onUndo} aria-label="Undo" className="hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110">
        <Undo />
      </IconButton>
      <IconButton color="inherit" onClick={onRedo} aria-label="Redo" className="hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110">
        <Redo />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default RichTextEditorToolbar;
