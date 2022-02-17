import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  it.each([
    ["Vegetarian", "/vegetarian"],
    ["Meat", "/meat"],
    ["Dessert", "/dessert"],
    ["Drinks", "/drink"]
  ])("should render the recipe links", (link, url) => {
    const wrapper = render(<Home />);

    expect(wrapper.getByText(link).closest("a").href).toMatch(url);
  });
});
