import styles from "../styles/styles.module.css";
import { memo } from "react";

type Props = {
  value: string;
  index: string;
  answerType: string;
  questionId: string;
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    questionId: string
  ) => void;
};
function QuestionItem({
  value,
  index,
  questionId,
  answerType,
  handleInputChange,
}: Props) {
  return (
    <div key={index} style={{ margin: "10px 0px" }}>
      <input
        className={styles.check}
        type={answerType === "SINGLE" ? "radio" : "checkbox"}
        id={index}
        name={questionId}
        value={index}
        onChange={(e) => handleInputChange(e, questionId)}
      />
      <label htmlFor={index}>{value}</label>
    </div>
  );
}

export default memo(QuestionItem);
