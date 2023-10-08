import Header from "../../../components/header";
import { render, screen } from "@testing-library/react";

describe("Footer Component", () => {
  it("renders the title of header", () => {
    render(<Header />);
    const headerTitle = screen.getByText("Quiz");
    expect(headerTitle).toBeInTheDocument();
  });
});
