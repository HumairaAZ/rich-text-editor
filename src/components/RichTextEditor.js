import React, { useState } from 'react';
import { Editor, EditorState, RichUtils, DefaultDraftBlockRenderMap } from 'draft-js';
import 'draft-js/dist/Draft.css';
import RichTextEditorToolbar from './RichTextEditorToolbar';
import './RichTextEditor.css';

const blockRenderMap = DefaultDraftBlockRenderMap;

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

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
  const onCodeClick = () => toggleInlineStyle('CODE');

  // Undo/Redo Functions
  const undo = () => setEditorState(EditorState.undo(editorState));
  const redo = () => setEditorState(EditorState.redo(editorState));

  return (
    <div className="p-4 max-w-2xl mx-auto bg-white rounded shadow-lg">
      <RichTextEditorToolbar
        onBold={onBoldClick}
        onItalic={onItalicClick}
        onUnderline={onUnderlineClick}
        onCode={onCodeClick}
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
