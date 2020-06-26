import React from 'react';
import { makeStyles, Fab, Zoom } from '@material-ui/core';
import { ArrowUpward } from '@material-ui/icons';
import { useState } from 'react';

const ToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const classes = useStyles();

  const scrollToTop = () => {
    if (window.pageYOffset > 1200) {
      setShowButton(true);
    }
    if (window.pageYOffset < 1200) {
      setShowButton(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', scrollToTop);

  return (
    <>
    <Zoom in={showButton} timeout={500}>
      <Fab
        onClick={scrollTop}
        className={showButton ? classes.button : classes.hideButton}
      >
        <ArrowUpward />
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
