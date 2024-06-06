// src/components/Editor.js

import React, { useCallback, useMemo, useState } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';
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

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case 'paragraph':
        return <p {...props.attributes}>{props.children}</p>;
      default:
        return <p {...props.attributes}>{props.children}</p>;
    }
  }, []);

  return (
    <div>
      <Toolbar editor={editor} />
      <div className={classes.editorContainer}>
        <Slate editor={editor} value={value} onChange={value => setValue(value)}>
          <Editable renderElement={renderElement} placeholder="Enter some rich text..." />
        </Slate>
      </div>
    </div>
  );
};

export default Editor;
