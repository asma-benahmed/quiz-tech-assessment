import { Grid } from "@mui/material";
import styles from "./styles/styles.module.css";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { getQuiz, submitQuiz } from "../../redux/features/quiz/api";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import Loader from "../../components/loader/Loader";
import Card from "./components/QuestionCard";

function Quiz() {
  const { quiz, loading } = useSelector((state: any) => state.quiz);

  // Initialize state to store answers
  const [answers, setAnswers] = useState<{ [questionId: string]: string[] }>(
    {}
  );

  const dispatch = useAppDispatch();

  // Fetch quiz data on component mount
  useEffect(() => {
    dispatch(getQuiz());
  }, [dispatch]);

  // Handler for input changes
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    questionId: string
  ) => {
    const { value, checked, type } = event.target;

    // Update answers based on question type (radio or checkbox)
    if (type === "radio") {
      setAnswers({ ...answers, [questionId]: [value] });
    } else if (type === "checkbox") {
      const selectedOptions = answers[questionId] || [];
      const updatedOptions = checked
        ? [...selectedOptions, value]
        : selectedOptions.filter((option) => option !== value);

      setAnswers({ ...answers, [questionId]: updatedOptions });
    }
  };

  // Handler for form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Convert answers to the desired response format
    const response = Object.keys(answers).map((questionId) => ({
      questionId,
      answers: answers[questionId],
    }));
    const params = { responseData: response, quizId: quiz.quizId };
    dispatch(submitQuiz(params));
  };

  const { questions } = quiz;

  return (
    <div className={styles.container}>
      <div className={styles.cardWrapper}>
        {!!loading ? (
          <Loader />
        ) : (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} columnSpacing={2}>
              {questions?.map((question: any, index: number) => (
                <Grid item key={index} xs={12}>
                  <Card
                    question={question}
                    handleInputChange={handleInputChange}
                  />
                </Grid>
              ))}
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  style={{ float: "right" }}
                  type="submit"
                >
                  SAVE
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </div>
    </div>
  );
}

export default Quiz;
