import QuestionItem from "../../../pages/quiz/components/QuestionItem";
import { render, fireEvent, screen } from "@testing-library/react";

const mockHandleInputChange = jest.fn();

const props = {
  value: "Option 1",
  index: "1",
  questionId: "q1",
  answerType: "SINGLE",
  handleInputChange: mockHandleInputChange,
};

describe("Question item Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders radio input and label for SINGLE answerType", () => {
    render(<QuestionItem {...props} />);

    const radioInput = screen.getByLabelText("Option 1");
    expect(radioInput).toBeInTheDocument();
    expect(radioInput).toHaveAttribute("type", "radio");

    fireEvent.click(radioInput);
    expect(mockHandleInputChange).toHaveBeenCalled();
  });

  it("renders checkbox input and label for MULTIPLE answerType", () => {
    const propsMultiple = { ...props, answerType: "MULTIPLE" };
    render(<QuestionItem {...propsMultiple} />);

    const checkboxInput = screen.getByLabelText("Option 1");
    expect(checkboxInput).toBeInTheDocument();
    expect(checkboxInput).toHaveAttribute("type", "checkbox");

    fireEvent.click(checkboxInput);
    expect(mockHandleInputChange).toHaveBeenCalled();
  });
});
