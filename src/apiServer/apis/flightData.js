let data = [];
const airlineNames = ["Indigo", "Saurav", "kingfisher", "Indiana"];

const getRandomAirline = function () {
  let res = Math.floor(Math.random() * 100) % airlineNames.length;
  return airlineNames[res];
};
function randomDate(start, end) {
  function dateAndFullYear(inputDate) {
    let month =
      inputDate.getMonth() > 8
        ? inputDate.getMonth() + 1
        : "0" + (inputDate.getMonth() + 1);
    let date =
      inputDate.getDate() <= 9
        ? "0" + inputDate.getDate()
        : inputDate.getDate();
    let onlyDate = date + "-" + month + "-" + inputDate.getFullYear();
    let dateAndTime =
      onlyDate +
      " " +
      inputDate.getHours() +
      " hrs " +
      inputDate.getMinutes() +
      " mins";
    return {
      fullData: inputDate,
      date: onlyDate,
      dateAndTime,
    };
  }
  function timeDiff(date_future, date_now) {
    date_future = date_future.getTime();
    date_now = date_now.getTime();
    // get total seconds between the times
    var delta = Math.abs(date_future - date_now) / 1000;

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    return `${days} days ${hours} hrs ${minutes} mins`;
  }
  let departure = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  let departureData = dateAndFullYear(departure);
  let arrival = new Date(
    departure.getTime() + Math.random() * 1000 * 60 * 60 * 400
  );
  let arrivalData = dateAndFullYear(arrival);
  let duration = timeDiff(arrival, departure);
  return {
    departureDate: departureData.date,
    departureDateTime: departureData.dateAndTime,
    arrivalData: arrivalData.date,
    arrivalDateTime: arrivalData.dateAndTime,
    duration,
  };
}
function randomCity(cities) {
  let destinCity = cities[Math.floor(Math.random() * 100) % cities.length];

  return {
    sourceCity: cities[Math.floor(Math.random() * 100) % cities.length],
    destinCity,
    stops: (Math.floor(Math.random() * 100) % 3) + 1,
    price: Math.floor(Math.random() * 10000),
  };
}
function getMockData(cities) {
  let mockData = [];
  for (let i = 0; i < 30; i++) {
    let dateData = randomDate(new Date(2020, 0, 1), new Date(2022, 0, 1));
    let airlineName = getRandomAirline();
    let travelCity = randomCity(cities);
    mockData.push({
      ["id"]: airlineName + "-" + i,
      ...dateData,
      ...travelCity,
      airlineName,
    });
  }

  return mockData;
}

module.exports = { getMockData };
