import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container, Typography, Toolbar, Button } from "@material-ui/core";
import globe from "../../assets/icons/world .svg";
import nepal from "../../assets/icons/nepal.svg";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import {
  englishToNepaliNumber as nepaliNumber,
  nepaliNumberFormat as nepaliFormat,
} from "nepali-number";
import { Skeleton } from "@material-ui/lab";
import { Link } from "react-router-dom";

const nepaliNumberFormat = (number) => {
  const nepali = nepaliNumber(number);
  const finalNumber = nepaliFormat(nepali, "ne");
  return finalNumber;
};

export default function NepaliCardInfo() {
  const classes = useStyles({});
  const [data, setData] = useState({});
  const [nepalData, setNepalData] = useState({});
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const nepal = allData.filter((item, index) => item.country === "Nepal");
    if (nepal) {
      let tmp = nepal[0];
      setNepalData(tmp);
    }
  }, [allData]);

  useEffect(() => {
    let temp = allData.filter((item) => item.country === "World");
    let tmp = temp[0];
    setData(tmp);
  }, [allData]);

  const fetchData = () => {
    Axios.get("https://nepalcorona.info/api/v1/data/world")
      .then((res) => {
        setAllData(res.data);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              {allData[0] && data ? (
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <img src={globe} alt="gobe" className={classes.globeIcon} />
                  </Grid>
                  <Grid className={classes.worldData} item xs={12} sm={6}>
                    <Toolbar className={classes.worldData}>
                      <Typography>जम्मा संक्रमित :</Typography>
                      <Typography color="primary" className={classes.numbers}>
                        {nepaliNumberFormat(data.totalCases)}
                      </Typography>
                    </Toolbar>
                    <Toolbar className={classes.worldData}>
                      <Typography>कुल मृत्यु :</Typography>
                      <Typography color="error" className={classes.numbers}>
                        {nepaliNumberFormat(data.totalDeaths)}
                      </Typography>
                    </Toolbar>
                    <Toolbar className={classes.worldData}>
                      <Typography>नयाँ संक्रमण :</Typography>
                      <Typography color="error" className={classes.numbers}>
                        {nepaliNumberFormat(data.newCases)}
                      </Typography>
                    </Toolbar>
                    <Toolbar className={classes.worldData}>
                      <Typography>कुल निको भएको :</Typography>
                      <Typography
                        style={{ color: "#34C307" }}
                        className={classes.numbers}
                      >
                        {nepaliNumberFormat(data.totalRecovered)}
                      </Typography>
                    </Toolbar>
                    <Link style={{ textDecoration: "none" }} to="/worldinfo">
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.moreInfo}
                      >
                        थप विबरण
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              ) : (
                <>
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                </>
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              {allData[0] && nepalData ? (
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <img src={nepal} alt="gobe" className={classes.nepalIcon} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Toolbar className={classes.worldData}>
                      <Typography>जम्मा संक्रमित :</Typography>
                      <Typography color="primary" className={classes.numbers}>
                        {nepaliNumberFormat(nepalData.totalCases)}
                      </Typography>
                    </Toolbar>
                    <Toolbar className={classes.worldData}>
                      <Typography>कुल मृत्यु :</Typography>
                      <Typography color="error" className={classes.numbers}>
                        {nepaliNumberFormat(nepalData.totalDeaths)}
                      </Typography>
                    </Toolbar>
                    <Toolbar className={classes.worldData}>
                      <Typography>नयाँ संक्रमण :</Typography>
                      <Typography color="error" className={classes.numbers}>
                        {nepaliNumberFormat(nepalData.newCases)}
                      </Typography>
                    </Toolbar>
                    <Toolbar className={classes.worldData}>
                      <Typography>कुल निको भएको :</Typography>
                      <Typography
                        style={{ color: "#34C307" }}
                        className={classes.numbers}
                      >
                        {nepaliNumberFormat(nepalData.totalRecovered)}
                      </Typography>
                    </Toolbar>
                    <Link style={{ textDecoration: "none" }} to="/nepalinfo">
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.moreInfo}
                      >
                        थप विबरण
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              ) : (
                <>
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                </>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(6),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  nepalIcon: {
    [theme.breakpoints.down("md")]: {
      height: theme.spacing(15),
      width: theme.spacing(15),
    },
    height: theme.spacing(25),
    paddingTop: theme.spacing(3),
  },
  globeIcon: {
    [theme.breakpoints.down("md")]: {
      height: theme.spacing(15),
      width: theme.spacing(15),
    },
    height: theme.spacing(25),
    paddingTop: theme.spacing(3),
  },
  worldData: {
    justifyContent: "center",
    textAlign: "center",
    color: "black",
  },
  numbers: {
    padding: theme.spacing(1),
  },
  moreInfo: {
    width: "100%",
  },
}));
