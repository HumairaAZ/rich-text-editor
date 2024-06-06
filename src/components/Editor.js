// src/components/Editor.js

import React, { useCallback, useMemo, useState } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor, Transforms, Text } from 'slate';
import { withHistory } from 'slate-history';
import Toolbar from './Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  editorContainer: {
    padding: theme.spacing(2),
    backgroundColor: '#fff',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
  },
}));

const Editor = () => {
  const classes = useStyles();
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'This is editable rich text, much better than a textarea!' }],
    },
  ]);
  const [color, setColor] = useState('#000000');

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case 'paragraph':
        return (
          <p
            {...props.attributes}
            style={{ textAlign: props.element.align }}
          >
            {props.children}
          </p>
        );
      default:
        return <p {...props.attributes}>{props.children}</p>;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return (
      <span
        {...props.attributes}
        style={{
          fontWeight: props.leaf.bold ? 'bold' : 'normal',
          fontStyle: props.leaf.italic ? 'italic' : 'normal',
          textDecoration: props.leaf.underlined ? 'underline' : 'none',
          textDecorationLine: props.leaf.strikethrough ? 'line-through' : 'none',
          color: props.leaf.color ? props.leaf.color : 'inherit',
        }}
      >
        {props.children}
      </span>
    );
  }, []);

  const handleChange = (newValue) => {
    setValue(newValue);
    const { selection } = editor;
    if (selection) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'paragraph',
      });

      if (match) {
        Transforms.setNodes(
          editor,
          { color: color },
          { match: n => Text.isText(n), split: true }
        );
      }
    }
  };

  return (
    <div>
      <Toolbar editor={editor} setColor={setColor} />
      <div className={classes.editorContainer}>
        <Slate editor={editor} value={value} onChange={handleChange}>
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder="Enter some rich text..."
          />
        </Slate>
      </div>
    </div>
  );
};

export default Editor;
