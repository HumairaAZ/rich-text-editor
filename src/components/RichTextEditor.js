import React, { useState, useEffect } from 'react';
import { Editor, EditorState, RichUtils, AtomicBlockUtils, convertToRaw, convertFromRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import RichTextEditorToolbar from './RichTextEditorToolbar';

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() => {
    const savedContent = localStorage.getItem('content');
    return savedContent ? EditorState.createWithContent(convertFromRaw(JSON.parse(savedContent))) : EditorState.createEmpty();
  });

  useEffect(() => {
    const contentState = editorState.getCurrentContent();
    localStorage.setItem('content', JSON.stringify(convertToRaw(contentState)));
  }, [editorState]);

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const onBoldClick = () => setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  const onItalicClick = () => setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  const onUnderlineClick = () => setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  const onImageClick = () => {
    const url = prompt('Enter image URL');
    if (url) {
      const contentState = editorState.getCurrentContent();
      const contentStateWithEntity = contentState.createEntity('IMAGE', 'IMMUTABLE', { src: url });
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      setEditorState(AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' '));
    }
  };
  const onCodeClick = () => setEditorState(RichUtils.toggleCode(editorState));
  const onTableClick = () => {
    // Implement table insertion logic
  };

  return (
    <div>
      <RichTextEditorToolbar
        onBold={onBoldClick}
        onItalic={onItalicClick}
        onUnderline={onUnderlineClick}
        onImage={onImageClick}
        onCode={onCodeClick}
        onTable={onTableClick}
      />
      <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '10px' }}>
        <Editor
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={setEditorState}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;