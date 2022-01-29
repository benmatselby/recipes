import { render } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout", () => {
  it("should render the title provided", () => {
    const wrapper = render(<Layout title="This is the title" />);
    expect(wrapper.getByText("This is the title")).toBeTruthy();
  });

  it("should render any items inside the component", () => {
    const wrapper = render(
      <Layout title="A title">
        <p>This is a child paragraph</p>
      </Layout>
    );
    expect(wrapper.getByText("This is a child paragraph")).toBeTruthy();
  });
});
