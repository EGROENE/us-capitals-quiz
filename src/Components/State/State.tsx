import { Dispatch, SetStateAction } from "react";
import InGameBtns from "../InGameBtns/InGameBtns";
import AnswerResult from "../AnswerResult/AnswerResult";

interface StateOptionsObject {
  stateCapital: string;
  wrongOptionOne: string;
  wrongOptionTwo: string;
  wrongOptionThree: string;
}

interface StateDataObject {
  name: string;
  backgroundImage: string;
  options: StateOptionsObject;
}

interface StateProps {
  currentIndex: number;
  state: StateDataObject;
  answeredStates: number;
  statesInfoLength: number;
  currentScore: number;
  setCurrentScore: Dispatch<SetStateAction<number>>;
  toNextState: void;
  stateHasBeenAnswered: boolean;
  setStateHasBeenAnswered: Dispatch<SetStateAction<boolean>>;
  isCorrect: boolean;
  setIsCorrect: Dispatch<SetStateAction<boolean>>;
}

const State = (props: StateProps) => {
  // Randomize option order:
  const options = Object.entries(props.state.options);
  for (let i = 1; i < options.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  const handleAnswer = (option: string): void => {
    props.setStateHasBeenAnswered(true);
    if (option === "stateCapital") {
      // set state isCorrect to true:
      props.setIsCorrect(true);
      props.setCurrentScore(props.currentScore + 1);
    } else {
      props.setIsCorrect(false);
    }
  };

  return (
    <section
      id={`display-question-${props.state.name.toLowerCase()}`}
      className="display-question"
    >
      <header>{`${props.answeredStates} / ${props.statesInfoLength}`}</header>
      <header>{`What's the capital of ${props.state.name}?`}</header>
      {options.map((option) => (
        <button
          onClick={() => {
            handleAnswer(option[0]);
          }}
          key={option[1]}
          className="option"
        >
          {option[1]}
        </button>
      ))}
      {props.stateHasBeenAnswered && (
        <AnswerResult
          currentScore={props.currentScore}
          answeredQuestions={props.currentIndex + 1}
          isCorrect={props.isCorrect}
        />
      )}
      <InGameBtns
        toNextState={props.toNextState}
        stateHasBeenAnswered={props.stateHasBeenAnswered}
      />
    </section>
  );
};
export default State;
