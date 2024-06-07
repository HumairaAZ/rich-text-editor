import React, { useState, useEffect } from 'react';
import { Editor, EditorState, RichUtils, DefaultDraftBlockRenderMap, convertToRaw, convertFromRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import RichTextEditorToolbar from './RichTextEditorToolbar';
import './RichTextEditor.css';

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
    <div className="p-4 max-w-2xl mx-auto bg-white rounded shadow-lg">
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
      <div className="editor-container mt-4 p-4 border border-gray-300 rounded bg-white min-h-[200px] cursor-text focus:outline-none transition duration-300 ease-in-out transform hover:shadow-lg hover:border-gray-400" onClick={() => setEditorState(EditorState.moveFocusToEnd(editorState))}>
        <Editor
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          blockRenderMap={blockRenderMap}
          placeholder="Start typing..."
          onChange={setEditorState}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
