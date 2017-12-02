import * as React from "react";
import * as renderer from "react-test-renderer";

import ControlPanel from "./ControlPanel";

describe("Test ControlPanel", () => {
  it("renders snapshot", () => {
    const tree = renderer
      .create(<ControlPanel switchAge={() => {}} calcRegression={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
