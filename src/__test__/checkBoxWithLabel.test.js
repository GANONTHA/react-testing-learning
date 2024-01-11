import { cleanup, fireEvent, render } from "@testing-library/react";
import CheckBoxWithLabel from "../TESTINGWITHJEST/CheckBoxWithLabel";

afterEach(cleanup);

describe("checkbox with label component", () => {
  test("should change the label when the checkox is clicked", () => {
    const { queryByLabelText, getByLabelText } = render(
      <CheckBoxWithLabel labelOn="On" labelOff="Off" />
    );
    expect(queryByLabelText(/off/i)).toBeTruthy();
    fireEvent.click(getByLabelText(/off/i));
    expect(queryByLabelText(/on/i)).toBeTruthy();
  });
});
