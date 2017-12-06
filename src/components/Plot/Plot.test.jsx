import * as React from "react";
import { mount } from "enzyme";
import toJson from 'enzyme-to-json';

import Plot from "./Plot";
import { prepareData } from "../../calculations/dataPrep";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("Test Plot", () => {
  it("renders snapshot", () => {
    const mounted = mount(<Plot regression={true} data={prepareData()} />);
    expect(toJson(mounted)).toMatchSnapshot();
  });
});
