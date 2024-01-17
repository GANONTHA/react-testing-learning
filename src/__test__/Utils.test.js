import { formatName } from "../TESTINGWITHJEST/Utils";

describe("Utils functions", () => {
  test("should format the name by adding @ at the beginning", () => {
    expect(formatName("@John")).toBe("@John");
  });
  test("should format the name by adding @ at the beginning", () => {
    expect(formatName("John")).toBe("@John");
  });
});
