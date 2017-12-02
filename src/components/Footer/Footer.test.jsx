import * as React from "react";
import * as renderer from "react-test-renderer";

import Footer from "./Footer";

describe("Test Footer", () => {
  it("renders snapshot", () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
