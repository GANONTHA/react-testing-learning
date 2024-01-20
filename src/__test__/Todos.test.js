import axios from "../__mocks__/axios";
import Todos from "../TESTINGWITHJEST/Todos";
import { screen, render, getByTestId } from "@testing-library/react";
//MOCKING WITH JEST

// jest.mock(axios);

//declare a dummy data that has similar format that the result of todos api result
const todos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 2,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 3,
    id: 3,
    title: "delectus aut autem",
    completed: true,
  },
];
//test the todos component
test("should fetch todos", async () => {
  //mock the axios get method
  const data = { data: todos };
  axios.get.mockResolvedValue(data);

  //render the component
  render(<Todos />);
  //select the element
  const todoElement = await screen.findAllByTestId("todo");
  //assert the length of the elements
  expect(todoElement).toHaveLength(3);
  expect(axios.get).toHaveBeenCalledTimes(1);
});

//test the todos component
test("make sure the title displayed contains the word component", () => {
  render(<Todos />);
  const title = screen.getByTestId("todo-title").textContent;
  expect(title).toContain("Component");
});
test("check if TodoItem has correct props", () => {
  render(<Todos />);
  const todoItem = screen.getByTestId("todo-item");
  expect(todoItem).toHaveTextContent("delectus aut autem");
});
