import React from "react";
import {
  Toolbar,
  Paper,
  Typography,
  makeStyles,
  GridList,
  Card,
  CardHeader,
  CircularProgress,
  useTheme,
  useMediaQuery,
  CardMedia,
  Container,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import Moment from "react-moment";

export default function News(props) {
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    Axios.get(`https://nepalcorona.info/api/v1/news?limit=${props.newsLength}`)
      .then((res) => {
        const data = res.data.data.filter((item) => item.lang === "np");
        setNews(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.newsLength]);

  const classes = useStyles();
  const Theme = useTheme();

  const matches = useMediaQuery(Theme.breakpoints.down("md"));

  return (
    <>
    {!props.hideHeader ?
      <Paper className={classes.holder}>
        <Toolbar className={classes.header}>
          <Typography style={{color: 'white'}} variant="h6">समाचारहरु </Typography>
        </Toolbar>
      </Paper>
   : null}

      <div className={classes.root}>
        {news[0] ? (
          <Container>
            <GridList
              spacing={0}
              className={classes.gridList}
              cols={matches ? 1 : 2.5}
            >
              {news.map((item, index) => (
                <Card
                  style={{ height: "auto" }}
                  key={index}
                  elevation={4}
                  className={classes.newsCard}
                >
                  <CardHeader
                    title={item.title}
                    subheader={<Moment fromNow>{item.created_at}</Moment>}
                  />

                  <CardMedia className={classes.media} image={item.image_url} />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{textAlign: 'justify' ,color: 'black'}}
                    >
                      {item.summary}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a className={classes.moreInfo} href={item.url}>
                      {" "}
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.moreInfo}
                      >
                        पुरा पढ्नुहोस
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              ))}
            </GridList>
          </Container>
        ) : (
          <div className={classes.spinnerContainer}>
          <Toolbar className={classes.spinerHolder}>
            <CircularProgress
              variant="indeterminate"
              className={classes.spinner}
            />
          </Toolbar>
          </div>
        )}
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  moreInfo: {
    width: "100%",
    color: "white",
    bottom: "0px",
    textDecoration: "none",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  newsCard: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(5),
      width: "40%",
      marginLeft: theme.spacing(15),
    },
  },
  spinerHolder: {
    width: "100%",
    justifyContent: "center",
  },
  spinnerContainer: {
    height: '1000px'
  },
  holder: {
    marginTop: theme.spacing(3),
    backgroundColor: "#34C307",
  },
  header: {
    width: "100%",
    justifyContent: "center",
    color: "white",
  },
  spinner: {
    marginTop: theme.spacing(5),
    color: "#34C307",
  },
}));
