import { drinkEach } from "../TESTINGWITHJEST/drinkAll";

describe("drinkEach", () => {
  test("make sure the function has been called a given number of time", () => {
    const drink = jest.fn();
    drinkEach(drink, ["lemon", "octopus", "chocolate", "milk"]);
    expect(drink).toHaveBeenCalledTimes(4);
  });
  test("check if the arguments passed to the function are correct", () => {
    const drink = jest.fn();
  });
});
