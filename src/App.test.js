/* The code is a set of unit tests written in JavaScript using the testing library called
"@testing-library/react". */

import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import Count from "./TESTINGWITHJEST/Count";

test("the counter start at zero", () => {
  render(<App />);
  const counter = screen.getByText(0);
  expect(counter).toBeInTheDocument();
});

test("increment counter", () => {
  //add test block
  render(<App />); //render component
  const incrementButton = screen.getByTestId("increment"); //select element
  const counter = screen.getByTestId("counter"); //select element
  fireEvent.click(incrementButton); //interact with elements
  expect(counter).toHaveTextContent("1"); //assert results are expected
});
//decrement counter
test("decrement Counter", () => {
  render(<Count />);
  const decrement = screen.getByTestId("decrement");
  const counter = screen.getByTestId("counter");
  fireEvent.click(decrement);
  expect(counter).toHaveTextContent("-1");
});
//find the title of the page
test("should find the title on the screen", () => {
  render(<Count />);
  const title = screen.getByText("Count Component");

  expect(title).toBeInTheDocument();
});
