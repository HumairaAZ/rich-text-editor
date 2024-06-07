import React, { useState, useEffect } from 'react';
import { Editor, EditorState, RichUtils, DefaultDraftBlockRenderMap, convertToRaw, convertFromRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import RichTextEditorToolbar from './RichTextEditorToolbar';
import { Container, Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)({
  padding: '16px',
  marginTop: '16px',
  minHeight: '200px',
  cursor: 'text',
  transition: 'border 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    border: '1px solid #3f51b5',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
});

const blockRenderMap = DefaultDraftBlockRenderMap;

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() => {
    const savedContent = localStorage.getItem('content');
    return savedContent ? EditorState.createWithContent(convertFromRaw(JSON.parse(savedContent))) : EditorState.createEmpty();
  });

  useEffect(() => {
    const contentState = editorState.getCurrentContent();
    localStorage.setItem('content', JSON.stringify(convertToRaw(contentState)));
  }, [editorState]);

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const toggleInlineStyle = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const onBoldClick = () => toggleInlineStyle('BOLD');
  const onItalicClick = () => toggleInlineStyle('ITALIC');
  const onUnderlineClick = () => toggleInlineStyle('UNDERLINE');
  const onStrikethroughClick = () => toggleInlineStyle('STRIKETHROUGH');
  const onBulletListClick = () => toggleBlockType('unordered-list-item');
  const onNumberListClick = () => toggleBlockType('ordered-list-item');

  const undo = () => setEditorState(EditorState.undo(editorState));
  const redo = () => setEditorState(EditorState.redo(editorState));

  const toggleBlockType = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  return (
    <Container maxWidth="md">
      <RichTextEditorToolbar
        onBold={onBoldClick}
        onItalic={onItalicClick}
        onUnderline={onUnderlineClick}
        onStrikethrough={onStrikethroughClick}
        onBulletList={onBulletListClick}
        onNumberList={onNumberListClick}
        onUndo={undo}
        onRedo={redo}
      />
      <StyledPaper onClick={() => setEditorState(EditorState.moveFocusToEnd(editorState))}>
        <Editor
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          blockRenderMap={blockRenderMap}
          placeholder="Start typing..."
          onChange={setEditorState}
        />
      </StyledPaper>
    </Container>
  );
};

export default RichTextEditor;
