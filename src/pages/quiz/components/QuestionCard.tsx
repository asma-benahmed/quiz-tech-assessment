import styles from "../styles/styles.module.css";

import { memo } from "react";
import QuestionItem from "./QuestionItem";

type Props = {
  question: {
    id: string;
    question: string;
    choices: { [key: string]: string };
    answerType: string;
    points: number;
  };
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    questionId: string
  ) => void;
};

function Card({ question, handleInputChange }: Props) {
  return (
    <div className={styles.card} data-testid="question-card">
      <p className={styles.questionText}>{question.question}</p>
      {question?.choices &&
        Object.entries(question.choices).map(([key, value]) => (
          <div key={key}>
            <QuestionItem
              value={value}
              index={key}
              questionId={question.id}
              answerType={question.answerType}
              handleInputChange={handleInputChange}
            />
          </div>
        ))}
    </div>
  );
}

export default memo(Card);
