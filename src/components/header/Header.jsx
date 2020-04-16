import React from 'react';
import { Paper, Typography, Container, makeStyles, Toolbar, IconButton } from '@material-ui/core';
import {IoIosMenu } from 'react-icons/io'

export default function Header(props) {

  const classes = useStyles();
    return(
      <>
      <Paper className={classes.root}>
        <Toolbar>
        <IconButton onClick={props.openDrawer} className={classes.menuButton}><IoIosMenu className={classes.icon} /></IconButton>
        <Container className={classes.container}>
        <Typography className={classes.Typography}>कोरोना संक्र्मण तथ्यांक </Typography>
        </Container>
        </Toolbar>
      </Paper>
    
      </>
    )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#34C307',
    color: 'white',
    width: '100%',
    margin: '0px',
    position: 'sticky',
    top: '0px',
    zIndex: '5'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  Typography: {
    padding: theme.spacing(2),
    fontSize: theme.spacing(3)

  },
  menuButton:{
    color: 'white',
  },
  icon: {
    size: '75px'
  },
}));