const api = require("../api/punkapi");
const schema = require("../schema/beers");

const { matchers } = require("jest-json-schema");

expect.extend(matchers);

describe("Q1 - Retrieve API Beers without pagination", () => {
    test("Response should return all list of beers", async() => {
        const response = await api.beers();
        expect(response.status).toEqual(200);
        expect(response.body).toHaveLength(25);
        expect(response.body).toMatchSchema(schema.beers);
        response.body.map((item) => {
            console.log(item.name);
        });
    });
});

describe("Q2 - Retrieve API Beers with pagination", () => {
    test("Response should return list of beers with 20 beers", async() => {
        const response = await api.beersPagination(20);
        expect(response.status).toEqual(200);
        expect(response.body).toHaveLength(20);
    });

    test("Response should return list of beers with 5 beers", async() => {
        const response = await api.beersPagination(5);
        expect(response.status).toEqual(200);
        expect(response.body).toHaveLength(5);
    });

    test("Response should return list of beers with 1 beer", async() => {
        const response = await api.beersPagination(1);
        expect(response.status).toEqual(200);
        expect(response.body).toHaveLength(1);
    });
});