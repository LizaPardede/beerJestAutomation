const supertest = require("supertest");
const env = require("dotenv").config();

const api = supertest(process.env.API_BASE_URL);

const beers = () =>
  api
    .get("/v2/beers")
    .set("Content-Type", "application/json")
    .set("Accept", "*/*");

const beersPagination = (limit) =>
  api
    .get(`/v2/beers?page=2&per_page=${limit}`)
    .set("Content-Type", "application/json")
    .set("Accept", "*/*");

module.exports = {
  beers,
  beersPagination,
};
