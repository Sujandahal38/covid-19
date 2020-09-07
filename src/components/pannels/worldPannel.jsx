import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  Container,
  CardMedia,
  makeStyles,
  CardContent,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useEffect } from "react";
import {
  englishToNepaliNumber as nepaliNumber,
  nepaliNumberFormat as nepaliFormat,
} from "nepali-number";
import usaFlag from "../../assets/flags/usa.svg";
import indiaFlag from "../../assets/flags/india.svg";
import spainFlag from "../../assets/flags/spain.svg";
import italyFlag from "../../assets/flags/italy.svg";

const nepaliNumberFormat = (number) => {
  const nepali = nepaliNumber(number);
  const finalNumber = nepaliFormat(nepali, "ne");
  return finalNumber;
};

export default function WorldPannel(props) {
  const [america, setAmerica] = React.useState({});
  const [spain, setSpain] = React.useState({});
  const [italy, setItaly] = React.useState({});
  const [india, setIndaia] = React.useState({});
  const classes = useStyles();
  useEffect(() => {
    setAmerica(props.data.filter((item) => item.country === "USA"));
    setSpain(props.data.filter((item) => item.country === "Spain"));
    setItaly(props.data.filter((item) => item.country === "Italy"));
    setIndaia(props.data.filter((item) => item.country === "India"));
  }, [props.data]);

  return (
    <>
      {america[0] ? (
        <Container className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <Card elevation={5}>
                <CardHeader title='अमेरिका' />
                <CardMedia className={classes.media} image={usaFlag} />
                <CardContent>
                  <Toolbar className={classes.worldData}>
                    <Typography>जम्मा संक्रमित :</Typography>
                    <Typography color="primary" className={classes.numbers}>
                      {nepaliNumberFormat(america[0].totalCases)}
                    </Typography>
                  </Toolbar>
                  <Toolbar className={classes.worldData}>
                    <Typography>कुल मृत्यु :</Typography>
                    <Typography color="error" className={classes.numbers}>
                      {nepaliNumberFormat(america[0].totalDeaths)}
                    </Typography>
                  </Toolbar>
                  <Toolbar className={classes.worldData}>
                    <Typography>नयाँ संक्रमण :</Typography>
                    <Typography color="error" className={classes.numbers}>
                      {nepaliNumberFormat(america[0].newCases)}
                    </Typography>
                  </Toolbar>
                  <Toolbar className={classes.worldData}>
                    <Typography>नयाँ मृतक:</Typography>
                    <Typography
                      style={{ color: "red" }}
                      className={classes.numbers}
                    >
                     +{nepaliNumberFormat(america[0].newDeaths)}
                    </Typography>
                  </Toolbar>
                </CardContent>
              </Card>
            </Grid>{" "}
            <Grid item xs={12} sm={3}>
              <Card elevation={5}>
                <CardHeader title='स्पेन्' />
                <CardMedia className={classes.media} image={spainFlag} />
                <CardContent>
                  <Toolbar className={classes.worldData}>
                    <Typography>जम्मा संक्रमित :</Typography>
                    <Typography color="primary" className={classes.numbers}>
                      {nepaliNumberFormat(spain[0].totalCases)}
                    </Typography>
                  </Toolbar>
                  <Toolbar className={classes.worldData}>
                    <Typography>कुल मृत्यु :</Typography>
                    <Typography color="error" className={classes.numbers}>
                      {nepaliNumberFormat(spain[0].totalDeaths)}
                    </Typography>
                  </Toolbar>
                  <Toolbar className={classes.worldData}>
                    <Typography>नयाँ संक्रमण :</Typography>
                    <Typography color="error" className={classes.numbers}>
                      {nepaliNumberFormat(spain[0].newCases)}
                    </Typography>
                  </Toolbar>
                  <Toolbar className={classes.worldData}>
                    <Typography>नयाँ मृतक:</Typography>
                    <Typography
                      style={{ color: "red" }}
                      className={classes.numbers}
                    >
                     +{nepaliNumberFormat(spain[0].newDeaths)}
                    </Typography>
                  </Toolbar>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card elevation={5}>
                <CardHeader title='इटाली' />
                <CardMedia className={classes.media} image={italyFlag} />
                <CardContent>
                  <Toolbar className={classes.worldData}>
                    <Typography>जम्मा संक्रमित :</Typography>
                    <Typography color="primary" className={classes.numbers}>
                      {nepaliNumberFormat(italy[0].totalCases)}
                    </Typography>
                  </Toolbar>
                  <Toolbar className={classes.worldData}>
                    <Typography>कुल मृत्यु :</Typography>
                    <Typography color="error" className={classes.numbers}>
                      {nepaliNumberFormat(italy[0].totalDeaths)}
                    </Typography>
                  </Toolbar>
                  <Toolbar className={classes.worldData}>
                    <Typography>नयाँ संक्रमण :</Typography>
                    <Typography color="error" className={classes.numbers}>
                      {nepaliNumberFormat(italy[0].newCases)}
                    </Typography>
                  </Toolbar>
                  <Toolbar className={classes.worldData}>
                    <Typography>नयाँ मृतक:</Typography>
                    <Typography
                      style={{ color: "red" }}
                      className={classes.numbers}
                    >
                     +{nepaliNumberFormat(italy[0].newDeaths)}
                    </Typography>
                  </Toolbar>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card elevation={5}>
                <CardHeader title='भारत' />
                <CardMedia className={classes.media} image={indiaFlag} />
                <CardContent>
                  <Toolbar className={classes.worldData}>
                    <Typography>जम्मा संक्रमित :</Typography>
                    <Typography color="primary" className={classes.numbers}>
                      {nepaliNumberFormat(india[0].totalCases)}
                    </Typography>
                  </Toolbar>
                  <Toolbar className={classes.worldData}>
                    <Typography>कुल मृत्यु :</Typography>
                    <Typography color="error" className={classes.numbers}>
                      {nepaliNumberFormat(india[0].totalDeaths)}
                    </Typography>
                  </Toolbar>
                  <Toolbar className={classes.worldData}>
                    <Typography>नयाँ संक्रमण :</Typography>
                    <Typography color="error" className={classes.numbers}>
                      {nepaliNumberFormat(india[0].newCases)}
                    </Typography>
                  </Toolbar>
                  <Toolbar className={classes.worldData}>
                    <Typography>नयाँ मृतक:</Typography>
                    <Typography
                      style={{ color: "red" }}
                      className={classes.numbers}
                    >
                     +{nepaliNumberFormat(india[0].newDeaths)}
                    </Typography>
                  </Toolbar>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      ) : null}
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  root: {
    marginTop: "25px",
  },
  worldData: {
    justifyContent: "center",
    textAlign: "center",
    color: "black",
  },
  numbers: {
    padding: theme.spacing(1),
  },
}));
