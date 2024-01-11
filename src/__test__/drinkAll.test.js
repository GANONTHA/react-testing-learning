import { drinkAll } from "../TESTINGWITHJEST/drinkAll";

//The test checks that the callback function has been called

describe("drinkAll", () => {
  test("drinks something lemon-flavoured", () => {
    const drink = jest.fn(); //create a mock function
    drinkAll(drink, "lemon");
    expect(drink).toHaveBeenCalled();
  });
  test("Make sure we do not drink something octopus-flavoured", () => {
    const drink = jest.fn();
    drinkAll(drink, "octopus");
    expect(drink).not.toHaveBeenCalled();
  });
  test("make sure the returned value contains the flavour", () => {
    const drink = jest.fn((flavour) => `nice ${flavour}`);
    drinkAll(drink, "orange");
    expect(drink("orange")).toContain("orange");
  });
});
