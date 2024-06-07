import React from 'react';
import { Toolbar, IconButton, Tooltip } from '@material-ui/core';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';

const RichTextEditorToolbar = ({ editor }) => (
  <Toolbar>
    <Tooltip title="Bold">
      <IconButton onClick={() => editor.chain().focus().toggleBold().run()} disabled={!editor.can().chain().focus().toggleBold().run()}>
        <FormatBoldIcon />
      </IconButton>
    </Tooltip>
    <Tooltip title="Italic">
      <IconButton onClick={() => editor.chain().focus().toggleItalic().run()} disabled={!editor.can().chain().focus().toggleItalic().run()}>
        <FormatItalicIcon />
      </IconButton>
    </Tooltip>
    <Tooltip title="Underline">
      <IconButton onClick={() => editor.chain().focus().toggleUnderline().run()} disabled={!editor.can().chain().focus().toggleUnderline().run()}>
        <FormatUnderlinedIcon />
      </IconButton>
    </Tooltip>
    {/* Add more buttons as needed */}
  </Toolbar>
);

export default RichTextEditorToolbar;
