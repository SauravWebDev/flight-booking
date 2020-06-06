import React, { useState, useRef } from "react";
import SingleSelect from "../common/SingleSelect";
import DatePicker from "../common/DatePicker";
import Button from "@material-ui/core/Button";
import { Grid, Container } from "@material-ui/core";
import "./FilterPage.css";

const FilterPage = ({ cities, filterFlight }) => {
  const sourceCity = useRef();
  const destinCity = useRef();
  const travelDate = useRef(null);
  const returnDate = useRef(null);
  const [sourceCityError, setSourceCityError] = useState(false);
  const [destinCityError, setDestinCityError] = useState(false);
  const [travelDateError, setTravelDateError] = useState(false);

  function search() {
    event.preventDefault();
    let sourceCityVal = sourceCity.current.value;
    let destinCityVal = destinCity.current.value;
    let travelDateVal = travelDate.current.value;
    let returDateVal = returnDate.current.value;
    if (sourceCityVal == "") {
      setSourceCityError(true);
      return;
    } else if (sourceCityError) {
      setSourceCityError(false);
    }
    if (destinCityVal == "") {
      setDestinCityError(true);
      return;
    } else if (destinCityError) {
      setDestinCityError(false);
    }
    if (travelDateVal == "") {
      setTravelDateError(true);
      return;
    } else if (travelDateError) {
      setTravelDateError(false);
    }

    let data = {
      sourceCity: sourceCityVal,
      destinCity: destinCityVal,
      travelDate: travelDateVal,
    };
    if (returDateVal != "") data.returnDate = returDateVal;
    filterFlight(data);
  }
  return (
    <div className="filterPage">
      <Container component="main">
        <form onSubmit={search}>
          <Grid container spacing={2} className="alignCenter">
            <Grid item xs={2}>
              <SingleSelect
                labelName="Source City *"
                required={true}
                inputItems={cities}
                refr={sourceCity}
                hasError={sourceCityError}
              />
            </Grid>
            <Grid item xs={2}>
              <SingleSelect
                labelName="Destination City *"
                required={true}
                inputItems={cities}
                refr={destinCity}
                hasError={destinCityError}
              />
            </Grid>

            <Grid item xs={2}>
              <DatePicker
                labelName="Travel Date *"
                name="travel-date"
                refr={travelDate}
                hasError={travelDateError}
              />
            </Grid>
            <Grid item xs={2}>
              <DatePicker
                labelName="Return Date"
                name="return-date"
                refr={returnDate}
              />
            </Grid>
            <Grid item xs={2} className="alignCenter">
              <Button
                size="small"
                variant="contained"
                color="primary"
                type="submit"
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default FilterPage;
