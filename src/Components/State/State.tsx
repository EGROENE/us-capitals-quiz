import { Dispatch, SetStateAction, useState } from "react";
import ButtonContainer from "../ButtonContainer/ButtonContainer";
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
  const [selectedAnswer, setSelectedAnswer] = useState<string>();

  let correctAnswer: string;
  for (const option of props.stateAnswers) {
    if (option.includes("stateCapital")) {
      correctAnswer = option[1];
    }
  }

  const getAnswerStyle = (city: string) => {
    if (props.stateHasBeenAnswered) {
      if (
        (selectedAnswer === city && props.isCorrect) ||
        city === correctAnswer
      ) {
        return {
          borderColor: "springgreen",
        };
      } else if (selectedAnswer === city) {
        return {
          borderColor: "red",
        };
      } else {
        return undefined;
      }
    }
  };

  const handleAnswer = (option: string[]): void => {
    setSelectedAnswer(option[1]);
    props.setStateHasBeenAnswered(true);
    if (option[0] === "stateCapital") {
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
            handleAnswer(option);
          }}
          key={option[1]}
          className="option"
          style={getAnswerStyle(option[1])}
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
      <ButtonContainer
        btnOneText="Reset Game"
        btnTwoText="Next"
        toNextState={props.toNextState}
        stateHasBeenAnswered={props.stateHasBeenAnswered}
      />
    </section>
  );
};
export default State;
