import React from "react";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useEffect } from "react";
import { useState } from "react";
import { Skeleton } from "@material-ui/lab";
import {
  englishToNepaliNumber as nepaliNumber,
  nepaliNumberFormat as nepaliFormat,
} from "nepali-number";
import Axios from "axios";
import WorldPannel from "../components/pannels/worldPannel";

const nepaliNumberFormat = (number) => {
  const nepali = nepaliNumber(number);
  const finalNumber = nepaliFormat(nepali, "ne");
  return finalNumber;
};

const columns = [
  { id: "country", label: "देस", minWidth: 30, maxWidth: 50 },
  {
    id: "newCases",
    label: " नयाँ संक्रमण",
    style: {
      minWidth: 30,
      color: "red",
    },
    align: "right",
  },
  {
    id: "totalCases",
    label: "जम्मा संक्रमित",
    minWidth: 30,
    align: "right",
    format: (value) => value.toLocaleString(),
  },
  {
    id: "totalDeaths",
    label: "कुल मृत्यु",
    minWidth: 30,
    align: "right",
    format: (value) => value.toLocaleString(),
  },
  {
    id: "newDeaths",
    label: "नयाँ मृतक ",
    minWidth: 30,
    align: "right",
    style: {
      minWidth: 30,
      color: "red",
    },
    format: (value) => value.toLocaleString(),
  },
  {
    id: "totalRecovered",
    label: "कुल निको भएको",
    minWidth: 30,
    align: "right",
    format: (value) => value.toLocaleString(),
  },
  {
    id: "criticalCases",
    label: "गम्भिर केसहरु ",
    minWidth: 30,
    align: "right",
    format: (value) => value.toLocaleString(),
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    marginTop: theme.spacing(5),
  },
  container: {
    maxHeight: 440,
  },
  Skeleton: {
    height: "1000px",
  },
}));

function createData(
  country,
  NewConfirmedNepali,
  TotalConfirmedNepali,
  TotalDeathsNepali,
  NewDeathsNepali,
  TotalRecoveredNepali,
  NewRecoveredNepali
) {
  const newCases = "+ " + nepaliNumberFormat(NewConfirmedNepali);
  const totalCases = nepaliNumberFormat(TotalConfirmedNepali);
  const totalDeaths = nepaliNumberFormat(TotalDeathsNepali);
  const newDeaths = "+ " + nepaliNumberFormat(NewDeathsNepali);
  const totalRecovered = nepaliNumberFormat(TotalRecoveredNepali);
  const criticalCases = nepaliNumberFormat(NewRecoveredNepali);

  return {
    country,
    newCases,
    totalCases,
    totalDeaths,
    newDeaths,
    totalRecovered,
    criticalCases,
  };
}

export default function WoldInfo(props) {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const holder = [];
    const filterData = data.filter(
      (item, index) =>
        item.country !== "" &&
        item.country !== "Africa" &&
        item.country !== "Asia" &&
        item.country !== "World" &&
        item.country !== "South America" &&
        item.country !== "Europe" &&
        item.country !== "North America"
    );
    if (filterData) {
      filterData.map((item, index) =>
        holder.push(
          createData(
            item.country,
            item.newCases,
            item.totalCases,
            item.totalDeaths,
            item.newDeaths,
            item.totalRecovered,
            item.criticalCases
          )
        )
      );
      setRows(holder);
    }
  }, [data]);

  useEffect(() => {
    Axios.get("https://nepalcorona.info/api/v1/data/world")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return rows[0] ? (
    <>
      <WorldPannel data={data} />
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell
                    size="small"
                    key={index}
                    align={column.align}
                    style={column.style}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data[0] &&
                rows.map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            indec={column.id}
                            style={column.style}
                            align={column.align}
                          >
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  ) : (
    <>
      <div className={classes.Skeleton}>
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
  );
}
