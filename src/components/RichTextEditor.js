import React, { useState } from 'react';
import { Editor, EditorState, RichUtils, AtomicBlockUtils, DefaultDraftBlockRenderMap } from 'draft-js';
import 'draft-js/dist/Draft.css';
import RichTextEditorToolbar from './RichTextEditorToolbar';
import ImageComponent from '../utils/ImageComponent';
import { Map } from 'immutable';
import './RichTextEditor.css';

const blockRenderMap = Map({
  'atomic': {
    element: 'div',
    wrapper: <div />,
  },
});

const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

const mediaBlockRenderer = (block) => {
  if (block.getType() === 'atomic') {
    const type = block.getData().get('type');
    if (type === 'image') {
      return {
        component: ImageComponent,
        editable: false,
      };
    }
  }
  return null;
};

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

  const onImageClick = () => {
    const url = prompt('Enter image URL');
    if (url) {
      const contentState = editorState.getCurrentContent();
      const contentStateWithEntity = contentState.createEntity('IMAGE', 'IMMUTABLE', { src: url });
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      setEditorState(AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' '));
    }
  };

  const onCodeClick = () => toggleInlineStyle('CODE');

  // Undo/Redo Functions
  const undo = () => setEditorState(EditorState.undo(editorState));
  const redo = () => setEditorState(EditorState.redo(editorState));

  return (
    <div>
      <RichTextEditorToolbar
        onBold={onBoldClick}
        onItalic={onItalicClick}
        onUnderline={onUnderlineClick}
        onImage={onImageClick}
        onCode={onCodeClick}
        onUndo={undo}
        onRedo={redo}
      />
      <div className="editor-container" onClick={() => setEditorState(EditorState.moveFocusToEnd(editorState))}>
        <Editor
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          blockRenderMap={extendedBlockRenderMap}
          blockRendererFn={mediaBlockRenderer}
          placeholder="Start typing..."
          onChange={setEditorState}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
