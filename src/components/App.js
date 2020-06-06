import React, { useEffect } from "react";
import { connect } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FilterPage from "./Filter/FilterPage";
import FlightListPage from "./FlightList/FlightListPage";
import { getAllCity } from "../redux/actions/citiesAction";
import { getAllFlights, filterFlight } from "../redux/actions/flightActions";
import PropTypes from "prop-types";

function App({
  getAllFlights,
  cities,
  flights,
  totalFlights,
  count,
  loading,
  getAllCity,
  filterFlight,
}) {
  useEffect(() => {
    if (flights.length === 0)
      getAllFlights().catch((err) => {
        alert("error");
      });
  }, []);
  useEffect(() => {
    if (Object.keys(cities).length === 0)
      getAllCity().catch(() => alert("error"));
  }, []);

  return loading ? (
    <>loading...</>
  ) : (
    <div className="container-fluid">
      <header style={{ display: "flex", justifyContent: "flex-end" }}>
        HOME/LOGIN/SIGUP
      </header>
      <FilterPage cities={cities} filterFlight={filterFlight} />
      <FlightListPage
        flights={flights}
        totalFlights={totalFlights}
        count={count}
      />
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}
const mapDispatchToProps = {
  getAllCity,
  getAllFlights,
  filterFlight,
};
function mapStateToProps(state) {
  return {
    cities: state.cities,
    flights: state.flights.data,
    totalFlights: state.flights.totalFlights || 0,
    count: state.flights.count || 0,
    loading: state.apiCallsInProgress > 0,
  };
}
App.propTypes = {
  cities: PropTypes.object.isRequired,
  flights: PropTypes.array.isRequired,
  totalFlights: PropTypes.number,
  loading: PropTypes.bool.isRequired,
  getAllCity: PropTypes.func.isRequired,
  getAllFlights: PropTypes.func.isRequired,
  filterFlight: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
