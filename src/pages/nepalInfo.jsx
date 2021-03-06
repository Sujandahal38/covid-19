import React from "react";
import {
  makeStyles,
  Container,
  CardHeader,
  CardMedia,
  CardContent,
  Toolbar,
  Typography,
  Card,
  Grid,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useEffect } from "react";
import Axios from "axios";
import nepal from "../assets/flags/nepal.svg";
import {
  englishToNepaliNumber as nepaliNumber,
  nepaliNumberFormat as nepaliFormat,
} from "nepali-number";
import { Skeleton } from "@material-ui/lab";

const nepaliNumberFormat = (number) => {
  const nepali = nepaliNumber(number);
  const finalNumber = nepaliFormat(nepali, "ne");
  return finalNumber;
};

export default function NepalInfo(props) {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [nepalData, setNepalData] = React.useState([]);
  const [woldometerData, setWorldometerData] = React.useState([]);

  const fetchData = () => {
    Axios.get("https://corona.askbhunte.com/api/v1/data/nepal")
      .then((res) => {
        setNepalData(res.data);
      })
      .catch((err) => {

      });
      Axios.get("https://corona.askbhunte.com/api/v1/data/world")
      .then( res => {
        let data = res.data.filter((item) =>
          item.country === 'Nepal'
        )
        setWorldometerData(data)
      } )
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {nepalData.tested_positive && woldometerData[0] ? (
        <>
          <Container>
            <Grid>
              <Grid item xs={12} sm={matches ? 12 : 6}>
                <Card className={classes.root} elevation={5}>
                  <CardHeader title="नेपाल" />
                  <CardMedia className={classes.media} image={nepal} />
                  <CardContent>
                    <Grid container>
                      <Grid item xs={12} sm={6}>
                        <Toolbar className={classes.worldData}>
                          <Typography>जम्मा संक्रमित :</Typography>
                          <Typography
                            color="primary"
                            className={classes.numbers}
                          >
                            {nepaliNumberFormat(woldometerData[0].totalCases)}
                          </Typography>
                        </Toolbar>
                        <Toolbar className={classes.worldData}>
                          <Typography>कुल मृत्यु :</Typography>
                          <Typography color="error" className={classes.numbers}>
                            {nepaliNumberFormat(woldometerData[0].totalDeaths)}
                          </Typography>
                        </Toolbar>
                        <Toolbar className={classes.worldData}>
                          <Typography>नयाँ संक्रमण :</Typography>
                          <Typography color="error" className={classes.numbers}>
                           +{nepaliNumberFormat(woldometerData[0].newCases)}
                          </Typography>
                        </Toolbar>
                        <Toolbar className={classes.worldData}>
                          <Typography>कुल निको भएको :</Typography>
                          <Typography
                            style={{ color: "#34C307" }}
                            className={classes.numbers}
                          >
                            {nepaliNumberFormat(woldometerData[0].totalRecovered)}
                          </Typography>
                        </Toolbar>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Toolbar>
                          <Typography className={classes.rightData}>
                            जम्मा टेस्ट भएको :
                          </Typography>
                          <Typography
                            color="primary"
                            className={classes.numbers}
                          >
                            {nepaliNumberFormat(nepalData.tested_total)}
                          </Typography>
                        </Toolbar>
                        <Toolbar>
                          <Typography className={classes.rightData}>
                            आइसोलेसनमा रखिएको :
                          </Typography>

                          <Typography
                            color="primary"
                            className={classes.numbers}
                          >
                            {nepaliNumberFormat(nepalData.in_isolation)}
                          </Typography>
                        </Toolbar>
                        <Toolbar>
                          <Typography className={classes.rightData}>
                            नतिजा आउन बाकी :
                          </Typography>
                          <Typography
                            color="primary"
                            className={classes.numbers}
                          >
                            {nepaliNumberFormat(nepalData.pending_result)}
                          </Typography>
                        </Toolbar>{" "}
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </>
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
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4),
  },
  nepalIcon: {
    [theme.breakpoints.down("md")]: {
      height: theme.spacing(15),
      width: theme.spacing(15),
    },
    height: theme.spacing(25),
    paddingTop: theme.spacing(3),
  },
  worldData: {
    justifyContent: "left",
    textAlign: "center",
    color: "black",
  },
  numbers: {
    padding: theme.spacing(1),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  rightData: {},
}));
