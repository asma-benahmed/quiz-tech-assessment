import Footer from "../../../components/footer";
import { render, screen } from "@testing-library/react";

describe("Footer Component", () => {
  it("renders the copyright information", () => {
    render(<Footer />);
    const copyrightText = screen.getByText("Asma Ben Ahmed");
    expect(copyrightText).toBeInTheDocument();
  });

  it('renders the "Drive Terra - Tech Assessment" text', () => {
    render(<Footer />);
    const copyrightText = screen.getByText("Drive Terra - Tech Assesment");
    expect(copyrightText).toBeInTheDocument();
  });

  it("renders a link to Asma Ben Ahmed LinkedIn profile", () => {
    render(<Footer />);
    const linkedInLink = screen.getByText(/Asma Ben Ahmed/i);
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://tn.linkedin.com/in/asma-ben-ahmedd"
    );
    expect(linkedInLink).toHaveAttribute("target", "_blank");
    expect(linkedInLink).toHaveAttribute("rel", "noreferrer");
  });
});
