import { MemoryRouter } from "react-router-dom";
import NotFound from "../../../pages/404";
import { fireEvent, render, screen } from "@testing-library/react";
describe("Footer Component", () => {
  it("renders not found component", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const oops = screen.getByTestId("error-404-image");
    expect(oops).toBeInTheDocument();
    const goBack = screen.getByText("GO BACK TO THE QUIZ");
    expect(goBack).toBeInTheDocument();
    fireEvent.click(goBack);
  });
});
