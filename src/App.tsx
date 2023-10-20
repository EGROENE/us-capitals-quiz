import "./App.css";
import { useState } from "react";
import statesInfo from "./constants.js";
import State, {
  StateAnswerObject,
  StateDataObject,
} from "./Components/State/State";
import shuffleArray from "./methods.js";

const allStateAnswersObjects = statesInfo.map((state: StateDataObject) => {
  return state.options;
});

// Use this to populate answers in State.tsx
const allStateAnswersObjectsShuffled = allStateAnswersObjects.map(
  (answerObject: StateAnswerObject) => {
    return shuffleArray(Object.entries(answerObject));
  }
);

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const [currentScore, setCurrentScore] = useState<number>(0);

  const [stateHasBeenAnswered, setStateHasBeenAnswered] =
    useState<boolean>(false);

  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  function toNextState(): void {
    setStateHasBeenAnswered(false);
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <>
      <div
        className={currentIndex === -1 ? "onGreet" : "onQuestion"}
        style={
          currentIndex !== -1
            ? {
                backgroundImage: `url(${statesInfo[currentIndex].backgroundImage})`,
              }
            : undefined
        }
        id="hero"
      >
        {currentIndex === -1 ? (
          <div id="greeting-box">
            <h1>Welcome to the US State Capitals Quiz!</h1>
            <h2>Click the button below to get started.</h2>
            <button id="start-btn" onClick={toNextState}>
              Let's go!
            </button>
          </div>
        ) : (
          <State
            currentIndex={currentIndex}
            toNextState={toNextState}
            stateHasBeenAnswered={stateHasBeenAnswered}
            setStateHasBeenAnswered={setStateHasBeenAnswered}
            currentScore={currentScore}
            setCurrentScore={setCurrentScore}
            answeredStates={currentIndex + 1}
            stateName={statesInfo[currentIndex].name}
            stateAnswers={allStateAnswersObjectsShuffled[currentIndex]}
            statesInfoLength={statesInfo.length}
            isCorrect={isCorrect}
            setIsCorrect={setIsCorrect}
          />
        )}
      </div>
    </>
  );
}

export default App;
