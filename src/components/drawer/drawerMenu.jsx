import React from "react";
import {
  Drawer,
  makeStyles,
  List,
  ListItem,
  Button,
} from "@material-ui/core";
import { HomeSharp, EventNoteSharp, PublicOutlined, ExploreSharp } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function DrawerMenu(props) {
  const classes = useStyles();
  return (
    <>
      <Drawer
        onClose={props.closeDrawer}
        anchor="left"
        elevation={15}
        open={props.drawer}
      >
        <div className={classes.drawer}>
          <List className={classes.root}>
            <ListItem>
            <Link style={{textDecoration: "none"}} to='/'>
              <Button className={classes.iconButton}>
              <HomeSharp style={{ marginRight: "13px" }} /> गृहपृष्ठ{" "}
              </Button>
              </Link>
            </ListItem>
            <ListItem>
            <Link style={{textDecoration: "none"}} to='/news'>
              <Button className={classes.iconButton}>
                <EventNoteSharp style={{ marginRight: "13px" }} /> समाचारहरु
              </Button>
              </Link>
            </ListItem>
            <ListItem>
            <Link style={{textDecoration: "none"}} to='/worldinfo'>
              <Button className={classes.iconButton}>
              <PublicOutlined style={{ marginRight: "13px" }} />विस्व तथ्यांक</Button>
              </Link>
            </ListItem>
            <ListItem>
            <Link style={{textDecoration: "none"}} to='/nepalinfo'>
              <Button className={classes.iconButton}><ExploreSharp style={{ marginRight: "13px" }} /> नेपालको तथ्यांक </Button>
              </Link>
          
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  iconButton: {
   
  },
  drawer: {

  },
  root: {
    marginTop: theme.spacing(5),
  },
}));
