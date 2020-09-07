import React from 'react';
import { makeStyles, Zoom, Fab } from '@material-ui/core';
import { ArrowUpward } from '@material-ui/icons';

const ToTop = ({showButton, scrollTop}) => {

  const classes = useStyles();
  return (
    <>
      <Zoom in={!!showButton} timeout={500}>
        <Fab className={classes.button} onClick={scrollTop} >
            <ArrowUpward/>
        </Fab>
      </Zoom>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  button: {
    position: 'fixed',
    right: 0,
    bottom: 0,
    backgroundColor: '#34C307',
    color: 'white',
    margin: theme.spacing(4),
    marginRight: theme.spacing(4),
    zIndex: 2000,
  },
  hideButton: {
    display: 'none',
  },
}));

export default ToTop;
