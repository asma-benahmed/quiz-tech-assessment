import { configureStore } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Quiz from "../../../pages/quiz";

// Define a sample state for your Redux store
const mockState: RootState = {
  quiz: {
    quiz: {
      quizId: "sampleQuizId",
      questions: [
        // Define sample questions here
      ],
    },
    loading: false,
  },
};

// Create a mock store with Redux Toolkit's configureStore
const store = configureStore({
  reducer: (state) => state,
  preloadedState: mockState,
});

describe("Quiz Component", () => {
  it("renders correctly and handles form submission", async () => {
    // Render the Quiz component with the mock store
    render(
      <Provider store={store}>
        <Quiz />
      </Provider>
    );

    // Simulate form submission
    const saveButton = screen.getByText("SAVE");
    fireEvent.click(saveButton);
  });
});
