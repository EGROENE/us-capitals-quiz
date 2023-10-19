import { Dispatch, SetStateAction } from "react";
import InGameBtns from "../InGameBtns/InGameBtns";

export interface StateOptionsObject {
  stateCapital: string;
  wrongOptionOne: string;
  wrongOptionTwo: string;
  wrongOptionThree: string;
}

export interface StateDataObject {
  name: string;
  backgroundImage: string;
  options: StateOptionsObject;
}

interface StateProps {
  state: StateDataObject;
  answeredStates: number;
  statesInfo: [];
  currentScore: number;
  setCurrentScore: Dispatch<SetStateAction<number>>;
  toNextState: void;
  stateHasBeenAnswered: boolean;
  setStateHasBeenAnswered: Dispatch<SetStateAction<boolean>>;
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
      props.setCurrentScore(props.currentScore + 1);
    }
  };

  return (
    <section
      id={`display-question-${props.state.name.toLowerCase()}`}
      className="display-question"
    >
      <header>{`${props.answeredStates} / ${props.statesInfo.length}`}</header>
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
      <InGameBtns
        toNextState={props.toNextState}
        stateHasBeenAnswered={props.stateHasBeenAnswered}
      />
    </section>
  );
};
export default State;
