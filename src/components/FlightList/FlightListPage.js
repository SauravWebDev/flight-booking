import React, { useState } from "react";
import PropTypes from "prop-types";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  head: {
    fontWeight: 600,
  },
});
export default function FlightListPage({ flights, totalFlights }) {
  const classes = useStyles();
  const rowsPerPage = 10;
  const noOfPages = totalFlights / rowsPerPage;
  const [start, setStart] = useState(0);
  const handleChangePage = (event, newPage) => {
    setStart(10 * (newPage - 1));
  };
  return (
    <div>
      <h1>Available Flights : {totalFlights}</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.head}>
              <TableCell>Flight Number</TableCell>
              <TableCell align="left">Airline Name</TableCell>
              <TableCell align="left">Departure and Arrival Time</TableCell>
              <TableCell align="left">Duration</TableCell>
              <TableCell align="left">No. Of Stops.</TableCell>
              <TableCell align="left">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {flights.slice(start, start + 10).map((flight) => (
              <TableRow key={flight.id}>
                <TableCell component="th" scope="row">
                  {flight.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {flight.airlineName}
                </TableCell>
                <TableCell component="th" scope="row">
                  {flight.departureDate + " | " + flight.arrivalData}
                </TableCell>
                <TableCell component="th" scope="row">
                  {flight.duration}
                </TableCell>
                <TableCell component="th" scope="row">
                  {flight.stops}
                </TableCell>
                <TableCell component="th" scope="row">
                  {flight.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          padding: "5px",
          margin: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          count={noOfPages}
          color="primary"
          onChange={handleChangePage}
          showLastButton={false}
        />
      </div>
    </div>
  );
}
FlightListPage.propTypes = {
  flights: PropTypes.array,
};
