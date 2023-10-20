import { Dispatch, SetStateAction } from "react";
import InGameBtns from "../InGameBtns/InGameBtns";
import AnswerResult from "../AnswerResult/AnswerResult";

export interface StateAnswerObject {
  stateCapital: string;
  wrongOptionOne: string;
  wrongOptionTwo: string;
  wrongOptionThree: string;
}

export interface StateDataObject {
  name: string;
  backgroundImage: string;
  options: StateAnswerObject;
}

interface StateProps {
  currentIndex: number;
  stateName: string;
  stateAnswers: string[][];
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
  const handleAnswer = (option: string): void => {
    props.setStateHasBeenAnswered(true);
    if (option === "stateCapital") {
      props.setIsCorrect(true);
      props.setCurrentScore(props.currentScore + 1);
    } else {
      props.setIsCorrect(false);
    }
  };

  return (
    <section
      id={`display-question-${props.stateName.toLowerCase()}`}
      className="display-question"
    >
      <header>{`${props.answeredStates} / ${props.statesInfoLength}`}</header>
      <header>{`What's the capital of ${props.stateName}?`}</header>
      {props.stateAnswers.map((option) => (
        <button
          disabled={props.stateHasBeenAnswered}
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
