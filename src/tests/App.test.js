import React from "react";
import "@testing-library/jest-dom";

import { shallow } from "enzyme";
import App from "../App";

describe("Test on <App /> component", () => {
  test("should render the component correctly", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should create a list of categories", () => {
    const categories = ["One Punch", "Dragon Ball"];
    const wrapper = shallow(<App categories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("Grid").length).toBe(categories.length);
  });
});
