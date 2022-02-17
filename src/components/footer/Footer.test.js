import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Home", () => {
  it.each([
    ["About", "https://benmatselby.dev/about"],
    ["Blog", "https://benmatselby.dev/post/"],
    ["Recipes", "https://recipes.benmatselby.dev/"],
    ["Recommendations", "https://benmatselby.dev/recommendations/"],
    ["RSS", "https://benmatselby.dev/index.xml"],
    ["GitHub", "https://github.com/benmatselby"],
    ["Twitter", "https://twitter.com/benmatselby"],
    ["Polywork", "https://www.polywork.com/benmatselby"]
  ])("should render the recipe links", (link, url) => {
    const wrapper = render(<Footer />);

    expect(wrapper.getByText(link).closest("a").href).toMatch(url);
  });
});
