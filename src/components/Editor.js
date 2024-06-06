// src/components/Editor.js

import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor, Transforms, Text } from 'slate';
import { withHistory } from 'slate-history';
import Toolbar from './Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  editorContainer: {
    padding: theme.spacing(2),
    backgroundColor: '#fff',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
  },
  wordCount: {
    marginTop: theme.spacing(2),
  },
  saveButton: {
    marginTop: theme.spacing(2),
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

  useEffect(() => {
    const savedData = localStorage.getItem('content');
    if (savedData) {
      setValue(JSON.parse(savedData));
    }
  }, []);

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
  };

  const handleSave = () => {
    localStorage.setItem('content', JSON.stringify(value));
    alert('Content saved!');
  };

  const wordCount = value.reduce((acc, node) => {
    return acc + node.children.reduce((innerAcc, n) => {
      return innerAcc + (n.text.match(/\w+/g) || []).length;
    }, 0);
  }, 0);

  return (
    <div>
      <Toolbar editor={editor} />
      <div className={classes.editorContainer}>
        <Slate editor={editor} value={value} onChange={handleChange}>
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder="Enter some rich text..."
          />
        </Slate>
      </div>
      <div className={classes.wordCount}>
        Word Count: {wordCount}
      </div>
      <Button variant="contained" color="primary" className={classes.saveButton} onClick={handleSave}>
        Save
      </Button>
    </div>
  );
};

export default Editor;
