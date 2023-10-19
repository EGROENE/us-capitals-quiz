interface AnswerResultProps {
  currentScore: number;
  answeredQuestions: number;
  isCorrect: boolean;
}

const AnswerResult = (props: AnswerResultProps) => {
  return (
    <p className="total-score">
      {props.isCorrect
        ? `Correct! Score for the round is ${props.currentScore} / ${props.answeredQuestions}.`
        : `Nope! Score for the round is ${props.currentScore} / ${props.answeredQuestions}.`}
    </p>
  );
};

export default AnswerResult;
