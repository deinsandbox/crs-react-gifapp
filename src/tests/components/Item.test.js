import React from "react";
import { shallow } from "enzyme";
import Item from "../../components/Item";

describe("Test on <Item /> component", () => {
  const url = "http://domine/image.png";
  const title = "Image description";
  const wrapper = shallow(<Item url={url} title={title} />);

  test("should render the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should have an url on image source", () => {
    const image = wrapper.find("img");
    // console.log(JSON.stringify(image.html()));
    // console.log(JSON.stringify(image.props()));
    // console.log(JSON.stringify(image.prop("src")));
    expect(image.prop("src")).toBe(url);
    expect(image.prop("alt")).toBe(title);
  });

  test("should have fade_in class animation", () => {
    const figure = wrapper.find("figure");
    //console.log(JSON.stringify(figure.prop("className")));
    expect(figure.hasClass("animate__fadeIn")).toBeTruthy();
  });
});
