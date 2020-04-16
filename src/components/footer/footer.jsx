import React from "react";
import {
  Paper,
  Container,
  makeStyles,
  Toolbar,
  Grid,
  Typography,
  List,
  ListItem,
  Button,
} from "@material-ui/core";
import {
  HomeSharp,
  EventNoteSharp,
  PublicOutlined,
  ExploreSharp,
  EmailSharp,
  CopyrightSharp,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer(props) {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root}>
        <Container>
        
            <Grid container>
              <Grid item xs={12} sm={6}>
                    <List>
                      <ListItem>
                        <Link style={{ textDecoration: "none" }} to="/">
                          <Button className={classes.iconButton}>
                            <HomeSharp style={{ marginRight: "13px" }} />{" "}
                            गृहपृष्ठ{" "}
                          </Button>
                        </Link>
                      </ListItem>

                      <ListItem>
                        <Link style={{ textDecoration: "none" }} to="/news">
                          <Button className={classes.iconButton}>
                            <EventNoteSharp style={{ marginRight: "13px" }} />{" "}
                            समाचारहरु
                          </Button>
                        </Link>
                      </ListItem>

                      <ListItem>
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/worldinfo"
                        >
                          <Button className={classes.iconButton}>
                            <PublicOutlined style={{ marginRight: "13px" }} />
                            विस्व तथ्यांक
                          </Button>
                        </Link>
                      </ListItem>

                      <ListItem>
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/nepalinfo"
                        >
                          <Button className={classes.iconButton}>
                            <ExploreSharp style={{ marginRight: "13px" }} />{" "}
                            नेपालको तथ्यांक{" "}
                          </Button>
                        </Link>
                      </ListItem>
                    </List>
                  
                
              </Grid>
              <Grid item xs={12} sm={6}>
               
                    <List>
                      <ListItem>
                        <Typography>Email us on:</Typography>
                      </ListItem>
                      <ListItem>
                        <Toolbar>
                          <EmailSharp style={{ marginRight: "13px" }} />{" "}
                          <Typography>sujandahal38@gmail.com</Typography>{" "}
                        </Toolbar>
                      </ListItem>
                      <ListItem>
                        <Typography>Find us on:</Typography>
                      </ListItem>
                      <ListItem>
                        <Toolbar>
                          <a href="https://www.github.com/sujandahal38">
                            <FaGithub
                              size="1.5em"
                              color="white"
                              className={classes.icon}
                            />
                          </a>
                          <a href="https://www.instagram.com/__sujan____/">
                            <FaInstagram
                              size="1.5em"
                              color="white"
                              className={classes.icon}
                            />
                          </a>
                          <a href="https://twitter.com/DahalSd1">
                            <FaTwitter
                              size="1.5em"
                              color="white"
                              className={classes.icon}
                            />
                          </a>
                        </Toolbar>
                      </ListItem>
                    </List>
              
              </Grid>
            </Grid>
        
        </Container>
      </Paper>

      <Toolbar
        style={{
          width: "100vw",
          paddingTop: "25px",
          backgroundColor: "green",
          color: "white",
          justifyContent: "center",
        }}
      >
        <CopyrightSharp style={{ marginRight: "13px" }} />{" "}
        <Typography variant='button'>2020</Typography>
      </Toolbar>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "auto",
    backgroundColor: "#34C307",
    color: "white",
    marginTop: theme.spacing(3),
  },
  iconButton: {
    color: "white",
  },
  icon: {
    margin: theme.spacing(1),
    size: "2em",
  },
}));
