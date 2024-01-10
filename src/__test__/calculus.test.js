import { calculus } from "../TESTINGWITHJEST/function";
import { render, screen } from "@testing-library/react";
test("Should give the right result", () => {
  const result = calculus(2, 3);
  expect(result).toBe(5);
});
