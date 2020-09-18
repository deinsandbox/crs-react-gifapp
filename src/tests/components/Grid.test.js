import React from "react";
import "@testing-library/jest-dom";

import { shallow } from "enzyme";
import Grid from "../../components/Grid";

import useGetAnimations from "../../hooks/useGetAnimations";
jest.mock("../../hooks/useGetAnimations");

describe("Test on <Grid /> component", () => {
  const category = "test";
  const images = [
    {
      id: "01234",
      title: "name1",
      url: "http://localhost/image1.gif",
    },
    {
      id: "12345",
      title: "name2",
      url: "http://localhost/image2.gif",
    },
  ];

  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    useGetAnimations.mockReturnValue({ data: [], loading: true });
  });

  test("should render the component correctly", () => {
    wrapper = shallow(<Grid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Should show category value as title", () => {
    wrapper = shallow(<Grid category={category} />);
    const title = wrapper.find("h3");
    //console.log(JSON.stringify(title.text()));
    expect(title.text()).toBe(category);
  });

  test("Should show items when load images on useGetAnimations", () => {
    useGetAnimations.mockReturnValue({ data: images, loading: false });
    wrapper = shallow(<Grid category={category} />);

    //expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("Item").length).toBe(images.length);
  });
});
