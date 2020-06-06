const apis = require("../apis");
module.exports = function (app) {
  app.get("/cities", function (req, res) {
    let cities = apis.getCities();
    res.json(cities);
  });
  app.get("/flights", function (req, res) {
    const offset = Number(req.query.offset) || 0;
    const limit = 10;
    let flights = apis.flights(offset, limit);
    res.json(flights);
  });
  app.get("/filters", function (req, res) {
    let query = req.query;
    let body = {
      sourceCity: query.sourceCity,
      destinCity: query.destinCity,
      travelDate: query.travelDate.split("-").reverse().join("-"),
    };
    let flights = apis.filters(body);
    res.json(flights);
  });
};
