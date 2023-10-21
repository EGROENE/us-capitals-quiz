const roundToHundredth = (val: number): number => {
  const newVal = val.toFixed(3);
  if (newVal.charAt(newVal.length - 1) === "5") {
    return Number(Number(newVal + "1").toFixed(2));
  } else {
    return Number(Number(newVal).toFixed(2));
  }
};

interface ResultsProps {
  currentScore: number;
  statesInfoLength: number;
}

const Results = (props: ResultsProps) => {
  const percentCorrect = roundToHundredth(
    props.currentScore / props.statesInfoLength
  );

  const getResultMessage = () => {
    if (percentCorrect === 1) {
      return "Perfect score!";
    } else if (percentCorrect < 1 && percentCorrect >= 0.9) {
      return "Nice work!";
    } else if (percentCorrect < 0.9 && percentCorrect >= 0.8) {
      return "Not bad.";
    } else if (percentCorrect < 0.8 && percentCorrect >= 0.7) {
      return "Not toooo bad.";
    } else if (percentCorrect < 0.7 && percentCorrect >= 0.3) {
      return "You can do better.";
    } else {
      return "Not good.";
    }
  };

  function refreshPage(): void {
    window.location.reload();
  }

  return (
    <div className="greeting-box">
      <h1>You scored {`${props.currentScore} / ${props.statesInfoLength}`}</h1>
      <header>{getResultMessage()}</header>
      <button onClick={refreshPage}>Play Again!</button>
    </div>
  );
};
export default Results;
