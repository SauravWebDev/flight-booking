const cities = require("./cities.json");
const flightOb = require("./flightData");
let flightArray = flightOb.getMockData(cities);

let citiesData = cities.map((city) => city.state_name);

const apis = {
  getCities: function () {
    return { cities: citiesData };
  },
  flights: function (offset, limit) {
    let max = limit + offset;
    let data = flightArray.slice(offset, max);
    return {
      totalFlights: flightArray.length,
      count: data.length,
      hasmore: flightArray.length > max ? true : false,
      data: flightArray,
      offset,
    };
  },
  filters: function (body) {
    console.log("body is", body);
    let data = flightArray.filter((fData) => {
      if (
        body.sourceCity == fData.sourceCity.state_name &&
        body.destinCity == fData.destinCity.state_name &&
        body.travelDate == fData.departureDate &&
        (body.returnDate ? body.returnDate === fData.arrivalData : true)
      ) {
        return true;
      }
    });

    return {
      totalFlights: data.length,
      count: data.length,
      hasmore: true,
      data: data,
      offset: 0,
    };
  },
};

module.exports = apis;
