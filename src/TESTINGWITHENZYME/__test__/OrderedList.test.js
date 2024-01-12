import { render, mount, shallow } from "../../enzyme";
import { OrderedList } from "../OrderedList";

describe("Ordered List component", () => {
  it("Should render all mocked option", () => {
    const animals = ["duck", "wales", "sheeps"];

    const wrapper = render(<OrderedList options={animals} />);
    expect(wrapper.find(".options")).toBeDefined();
  });
  it("Should render no animal at all", () => {
    const animals = [];
    const wrapper = shallow(<OrderedList options={animals} />);
    expect(wrapper.find(".empty").exists()).toBe(true);
  });
  it("Should render a single animal", () => {
    const animals = ["duck"];
    const wrapper = shallow(<OrderedList options={animals} />);
    expect(wrapper.find(".value")).toBeDefined();
  });
});
