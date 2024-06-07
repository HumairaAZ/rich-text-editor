import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Select, MenuItem } from '@material-ui/core';
import { FormatBold, FormatItalic, FormatUnderlined, Image, Code, TableChart, Undo, Redo } from '@material-ui/icons';

const RichTextEditorToolbar = ({ onBold, onItalic, onUnderline, onImage, onCode, onTable, onUndo, onRedo, onBlockTypeChange, onFontSizeChange }) => (
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
      <IconButton color="inherit" onClick={onUndo} aria-label="Undo">
        <Undo />
      </IconButton>
      <IconButton color="inherit" onClick={onRedo} aria-label="Redo">
        <Redo />
      </IconButton>
      <Select
        defaultValue=""
        onChange={(e) => onBlockTypeChange(e.target.value)}
        displayEmpty
        inputProps={{ 'aria-label': 'Block Type' }}
      >
        <MenuItem value="">Block Type</MenuItem>
        <MenuItem value="header-one">Header One</MenuItem>
        <MenuItem value="header-two">Header Two</MenuItem>
        <MenuItem value="unstyled">Normal</MenuItem>
      </Select>
      <Select
        defaultValue=""
        onChange={(e) => onFontSizeChange(e.target.value)}
        displayEmpty
        inputProps={{ 'aria-label': 'Font Size' }}
      >
        <MenuItem value="">Font Size</MenuItem>
        <MenuItem value="FONT_SIZE_12">12px</MenuItem>
        <MenuItem value="FONT_SIZE_16">16px</MenuItem>
        <MenuItem value="FONT_SIZE_20">20px</MenuItem>
      </Select>
    </Toolbar>
  </AppBar>
);

export default RichTextEditorToolbar;
