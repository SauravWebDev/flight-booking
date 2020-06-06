const cityApi = process.env.API_URL + "/cities";
const flightApi = process.env.API_URL + "/flights";
const filtersApi = process.env.API_URL + "/filters";

export async function getCities() {
  try {
    let response = await fetch(cityApi);
    let data = await response.json();
    let map = {};
    for (let i in data.cities) {
      map[data.cities[i]] = data.cities[i];
    }
    return Promise.resolve(map);
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function getFlightData(offset) {
  try {
    let response = await fetch(flightApi + `?offset=${offset || 0}`);
    let flights = await response.json();
    return Promise.resolve(flights);
  } catch (e) {
    return Promise.reject(e);
  }
}
export async function filters(body) {
  try {
    let response = await fetch(
      filtersApi +
        `?sourceCity=${body.sourceCity}&&destinCity=${
          body.destinCity
        }&&travelDate=${body.travelDate}${
          body.returnDate ? "&&returnDate=" + body.returnDate : ""
        }`
    );
    let flights = await response.json();
    return Promise.resolve(flights);
  } catch (e) {
    return Promise.reject(e);
  }
}
