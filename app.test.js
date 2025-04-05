const request = require("supertest");
const app = require("./app");
describe("Calculator Routes", () => {
  let number1 = Math.floor(Math.random() * 100);
  let number2 = Math.floor(Math.random() * 100);
  test("GET /calculator/add => sum of numbers", () => {
    return request(app)
      .get(`/calculator/add?num1=${number1}&num2=${number2}`)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 + number2,
        });
      });
  });
  test("GET /calculator/subtract => subtraction of numbers", () => {
    return request(app)
      .get(`/calculator/subtract?num1=${number1}&num2=${number2}`)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 - number2,
        });
      });
  });
  test("GET /calculator/multiply => multiplication of numbers", () => {
    return request(app)
      .get(`/calculator/multiply?num1=${number1}&num2=${number2}`)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 * number2,
        });
      });
  });
  test("GET /calculator/divide => division of numbers", () => {
    return request(app)
      .get(`/calculator/divide?num1=${number1}&num2=${number2}`)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 / number2,
        });
      });
  });
});
