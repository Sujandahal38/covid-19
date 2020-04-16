import React from 'react';
import { makeStyles, Container, Toolbar } from '@material-ui/core'
import {FaInstagram, FaTwitterSquare, FaGithub } from 'react-icons/fa'
export default function SocialBar(props) {


  const classes = useStyles();
   return(
     <>
     <div>
       <Container>
        <Toolbar className={classes.root} >
          <a href='https://www.github.com/sujandahal38'><FaGithub size='1.5em' color='black' className={classes.icon} /></a> 
          <a href='https://www.instagram.com/__sujan____/'><FaInstagram size='1.5em'  color='#E1306C' className={classes.icon} /></a> 
           <a href='https://twitter.com/DahalSd1'><FaTwitterSquare size='1.5em' color='#1DA1F2' className={classes.icon}/></a>
        </Toolbar>

     </Container>
     </div>
     </>
   )
}

const useStyles = makeStyles((theme)=> ({
root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end'
},
icon: {
  margin : theme.spacing(1),
  size: '2em'
}

}));