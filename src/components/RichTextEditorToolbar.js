import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { FormatBold, FormatItalic, FormatUnderlined, Image, Code, TableChart } from '@material-ui/icons';

const RichTextEditorToolbar = ({ onBold, onItalic, onUnderline, onImage, onCode, onTable }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">Rich Text Editor</Typography>
      <IconButton color="inherit" onClick={onBold}>
        <FormatBold />
      </IconButton>
      <IconButton color="inherit" onClick={onItalic}>
        <FormatItalic />
      </IconButton>
      <IconButton color="inherit" onClick={onUnderline}>
        <FormatUnderlined />
      </IconButton>
      <IconButton color="inherit" onClick={onImage}>
        <Image />
      </IconButton>
      <IconButton color="inherit" onClick={onCode}>
        <Code />
      </IconButton>
      <IconButton color="inherit" onClick={onTable}>
        <TableChart />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default RichTextEditorToolbar;
