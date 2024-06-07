import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { FormatBold, FormatItalic, FormatUnderlined, Image, Code, TableChart } from '@material-ui/icons';

const RichTextEditorToolbar = ({ onBold, onItalic, onUnderline, onImage, onCode, onTable }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">Rich Text Editor</Typography>
      <IconButton color="inherit" onClick={onBold} aria-label="Bold">
        <FormatBold />
      </IconButton>
      <IconButton color="inherit" onClick={onItalic} aria-label="Italic">
        <FormatItalic />
      </IconButton>
      <IconButton color="inherit" onClick={onUnderline} aria-label="Underline">
        <FormatUnderlined />
      </IconButton>
      <IconButton color="inherit" onClick={onImage} aria-label="Insert Image">
        <Image />
      </IconButton>
      <IconButton color="inherit" onClick={onCode} aria-label="Code">
        <Code />
      </IconButton>
      <IconButton color="inherit" onClick={onTable} aria-label="Insert Table">
        <TableChart />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default RichTextEditorToolbar;
