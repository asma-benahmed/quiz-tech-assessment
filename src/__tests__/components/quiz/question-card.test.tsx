import QuestionCard from "../../../pages/quiz/components/QuestionCard";
import { render, screen } from "@testing-library/react";

const mockHandleInputChange = jest.fn();

const props = {
  question: {
    id: "q1",
    question: "Sample Question",
    choices: {
      option1: "Option 1",
      option2: "Option 2",
    },
    answerType: "SINGLE",
    points: 10,
  },
  handleInputChange: mockHandleInputChange,
};

describe("Question item Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders card with question and choices", () => {
    render(<QuestionCard {...props} />);

    const questionText = screen.getByText("Sample Question");
    expect(questionText).toBeInTheDocument();

    const option1Text = screen.getByText("Option 1");
    expect(option1Text).toBeInTheDocument();

    const option2Text = screen.getByText("Option 2");
    expect(option2Text).toBeInTheDocument();
  });
});
