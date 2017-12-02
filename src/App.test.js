import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

import App from "./App";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("Test App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("renders snapshot", () => {
    const mounted = mount(<App />);
    expect(toJson(mounted)).toMatchSnapshot();
  });
});
