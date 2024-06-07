import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import { styled } from '@mui/system';

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.2)',
    backgroundColor: theme.palette.action.hover,
  },
}));

const RichTextEditorToolbar = ({ onBold, onItalic, onUnderline, onStrikethrough, onBulletList, onNumberList, onUndo, onRedo }) => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>Rich Text Editor</Typography>
      <CustomIconButton color="inherit" onClick={onBold} aria-label="Bold">
        <FormatBoldIcon />
      </CustomIconButton>
      <CustomIconButton color="inherit" onClick={onItalic} aria-label="Italic">
        <FormatItalicIcon />
      </CustomIconButton>
      <CustomIconButton color="inherit" onClick={onUnderline} aria-label="Underline">
        <FormatUnderlinedIcon />
      </CustomIconButton>
      <CustomIconButton color="inherit" onClick={onStrikethrough} aria-label="Strikethrough">
        <StrikethroughSIcon />
      </CustomIconButton>
      <CustomIconButton color="inherit" onClick={onBulletList} aria-label="Bullet List">
        <FormatListBulletedIcon />
      </CustomIconButton>
      <CustomIconButton color="inherit" onClick={onNumberList} aria-label="Number List">
        <FormatListNumberedIcon />
      </CustomIconButton>
      <CustomIconButton color="inherit" onClick={onUndo} aria-label="Undo">
        <UndoIcon />
      </CustomIconButton>
      <CustomIconButton color="inherit" onClick={onRedo} aria-label="Redo">
        <RedoIcon />
      </CustomIconButton>
    </Toolbar>
  </AppBar>
);

export default RichTextEditorToolbar;
