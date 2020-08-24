import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Test on <AddCategory /> component", () => {
  const value = "Hola Mundo";
  const setCategory = jest.fn();
  const setText = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategory={setCategory} />);
  });

  test("should render the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change the input value", () => {
    const before = wrapper.find("input");
    before.simulate("change", { target: { value } });
    const after = wrapper.find("input");
    expect(after.prop("value")).toBe(value);
  });

  test("should not be submit category if has not valid value", () => {
    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault() {} });
    expect(setCategory).not.toHaveBeenCalled();
  });

  test("should submit a category and clean the input", () => {
    const input = wrapper.find("input");
    input.simulate("change", { target: { value } });

    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault() {} });

    expect(setCategory).toHaveBeenCalledTimes(1);
    expect(setCategory).toHaveBeenCalledWith(expect.any(Function));

    expect(input.prop("value")).toBeEmpty;
  });
});
