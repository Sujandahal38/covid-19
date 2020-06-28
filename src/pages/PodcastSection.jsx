import React from 'react';
import {
  makeStyles,
  Paper,
  Container,
  Toolbar,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  List,
  ListSubheader,
} from '@material-ui/core';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useEffect } from 'react';
import { Skeleton } from '@material-ui/lab';

const PodcastSection = () => {
  const classes = useStyles();
  const podcasts = useStoreState((state) => state.podcasts.podcastData);
  const fetchPodcast = useStoreActions(
    (action) => action.podcasts.fetchPodcast,
  );
  const ui = useStoreState((state) => state.ui);
  useEffect(() => {
    fetchPodcast();
  }, [fetchPodcast]);
  console.log(podcasts);
  return (
    <>
      {ui.showHeader ? (
        <Paper className={classes.holder}>
          <Toolbar className={classes.header}>
            <Toolbar style={{ color: 'white' }}>
              <h3>पड्ककास्टहरु </h3>
            </Toolbar>
          </Toolbar>
        </Paper>
      ) : null}
      <Container>
        <Paper className={classes.root}>
          <div className={classes.podcastList}>
            <List>
              <ListSubheader className={classes.subHeader}>पड्कास्टहरु</ListSubheader>
            {podcasts.length >> 0 ? (
                podcasts.map(item =>
                    <ListItem key={item.id} button>
                    <ListItemAvatar>
                      <Avatar src={item.image_url} />
                    </ListItemAvatar>
                    <ListItemText primary={item.title} />
                  </ListItem>

                    )) :
                    <>
                    <div>
                      {" "}
                      <Skeleton />
                      <Skeleton animation={false} />
                      <Skeleton animation="wave" />
                      <Skeleton animation="wave" />
                      <Skeleton animation="wave" />
                      <Skeleton animation="wave" />
                      <Skeleton animation="wave" />
                      <Skeleton animation="wave" />
                      <Skeleton animation="wave" />
                      <Skeleton />
                      <Skeleton animation={false} />
                      <Skeleton animation="wave" />
                      <Skeleton animation="wave" />
                      <Skeleton animation="wave" />
                      <Skeleton animation="wave" />
                      <Skeleton animation="wave" />
                      <Skeleton animation="wave" />
                      <Skeleton animation="wave" />
                      <Skeleton />
                      <Skeleton animation={false} />
                      <Skeleton animation="wave" />
                      <Skeleton animation="wave" />
                      <Skeleton animation="wave" />
                      <Skeleton animation="wave" />
                      <Skeleton animation="wave" />
                      <Skeleton animation="wave" />
                      <Skeleton animation="wave" />
                    </div>
                    </>
            }
                    </List>
          </div>
          <div className={classes.player}></div>
        </Paper>
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 200,
    marginTop: theme.spacing(3),
    display: 'flex',
  },
  holder: {
    marginTop: theme.spacing(3),
    backgroundColor: '#34C307',
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    color: 'white',
  },
  podcastList: {
    width: '50%',
    height: 'inherit',
    overflowX: 'hidden',
    overflow: 'scroll'
  },
  subHeader: {
    backgroundColor: 'black',
    color: 'white'
  }
}));
export default PodcastSection;
