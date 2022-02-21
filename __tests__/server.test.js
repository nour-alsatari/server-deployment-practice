"use strict";

const server = require("../server.js");

const supertest = require("supertest");

const test = supertest(server.app); // this will fake test my server

//creates a block that groups together several related tests
//it is where you perform individual tests. You should be able to describe each test like a little sentence
//describe is for grouping, it is for testing.

describe("test the routes and endpoints", () => {
  it("testing /", async () => {
    const response = await test.get("/");
    expect(response.text).toEqual("welcome to home");
  });

  it("testing/data", async () => {
    const response = await test.get("/data");
    expect(typeof response.body).toEqual('object');

  });
});
