import Loader from "../../../components/loader/Loader";
import { render, screen } from "@testing-library/react";
describe("Footer Component", () => {
  it("renders loader component", () => {
    render(<Loader />);
    const loaderContainer = screen.getByTestId("loader-container");
    const loaderElement = screen.getByTestId("loader");
    expect(loaderContainer).toBeInTheDocument();
    expect(loaderElement).toBeInTheDocument();
  });
});
