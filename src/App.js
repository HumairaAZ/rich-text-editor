// src/App.js

import React from 'react';
import Editor from './components/Editor';
import { AppBar, Toolbar, Typography, Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Rich Text Editor
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.container}>
        <Editor />
      </Container>
    </div>
  );
}

export default App;
