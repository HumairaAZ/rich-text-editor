import React, { useState } from 'react';
import { Editor, EditorState, RichUtils, AtomicBlockUtils, DefaultDraftBlockRenderMap, Modifier } from 'draft-js';
import 'draft-js/dist/Draft.css';
import RichTextEditorToolbar from './RichTextEditorToolbar';
import ImageComponent from '../utils/ImageComponent';
import TableComponent from '../utils/TableComponent';
import { Map } from 'immutable';
import './RichTextEditor.css';

const styleMap = {
  'FONT_SIZE_12': { fontSize: '12px' },
  'FONT_SIZE_16': { fontSize: '16px' },
  'FONT_SIZE_20': { fontSize: '20px' },
};

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

  // Undo/Redo Functions
  const undo = () => setEditorState(EditorState.undo(editorState));
  const redo = () => setEditorState(EditorState.redo(editorState));

  // Alignment and Font Size Functions
  const toggleBlockType = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleFontSize = (fontSize) => {
    const selection = editorState.getSelection();
    const nextContentState = Object.keys(styleMap)
      .reduce((contentState, font) => {
        return Modifier.removeInlineStyle(contentState, selection, font);
      }, editorState.getCurrentContent());

    let nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      'change-inline-style'
    );

    const currentStyle = editorState.getCurrentInlineStyle();

    if (selection.isCollapsed()) {
      nextEditorState = currentStyle.reduce((state, style) => {
        return RichUtils.toggleInlineStyle(state, style);
      }, nextEditorState);
    }

    if (!currentStyle.has(fontSize)) {
      nextEditorState = RichUtils.toggleInlineStyle(
        nextEditorState,
        fontSize
      );
    }

    setEditorState(nextEditorState);
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
        onUndo={undo}
        onRedo={redo}
        onBlockTypeChange={toggleBlockType}
        onFontSizeChange={toggleFontSize}
      />
      <div className="editor-container" onClick={() => setEditorState(EditorState.moveFocusToEnd(editorState))}>
        <Editor
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          blockRenderMap={extendedBlockRenderMap}
          blockRendererFn={mediaBlockRenderer}
          customStyleMap={styleMap}
          placeholder="Start typing..."
          onChange={setEditorState}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
