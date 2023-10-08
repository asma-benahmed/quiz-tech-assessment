import MainLayout from "../../../layouts/main";
import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

describe("Question item Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders header, content container, and footer", () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );

    const header = screen.getByTestId("header");
    const contentContainer = screen.getByTestId("content-container");
    const footer = screen.getByTestId("footer");

    expect(header).toBeInTheDocument();
    expect(contentContainer).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
