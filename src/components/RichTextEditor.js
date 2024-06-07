import React, { useState } from 'react';
import { Editor, EditorState, RichUtils, AtomicBlockUtils, DefaultDraftBlockRenderMap } from 'draft-js';
import 'draft-js/dist/Draft.css';
import RichTextEditorToolbar from './RichTextEditorToolbar';
import ImageComponent from '../utils/ImageComponent';
import TableComponent from '../utils/TableComponent';
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
    if (type === 'table') {
      return {
        component: TableComponent,
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

  const onTableClick = () => {
    const rows = prompt('Enter number of rows');
    const columns = prompt('Enter number of columns');
    if (rows && columns) {
      const table = Array.from({ length: rows }, () => '| ' + '   | '.repeat(columns)).join('\n');
      const contentState = editorState.getCurrentContent();
      const contentStateWithEntity = contentState.createEntity('TABLE', 'IMMUTABLE', { table });
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      setEditorState(AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' '));
    }
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
