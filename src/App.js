// src/App.js

import React from 'react';
import Editor from './components/Editor';
import { AppBar, Toolbar, Typography, Container, CssBaseline, Paper } from '@material-ui/core';
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
  paper: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
  },
  footer: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
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
        <Paper className={classes.paper}>
          <Editor />
        </Paper>
      </Container>
      <footer className={classes.footer}>
        <Typography variant="body1">© 2024 Humaira Azmi. All rights reserved.</Typography>
      </footer>
    </div>
  );
}

export default App;
