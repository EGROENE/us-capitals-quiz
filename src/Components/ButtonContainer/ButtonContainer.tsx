interface ButtonContainerProps {
  toNextState?: void;
  stateHasBeenAnswered?: boolean;
  btnOneText: string;
  btnTwoText: string;
}

const ButtonContainer = (props: ButtonContainerProps) => {
  function refreshPage(): void {
    window.location.reload();
  }

  return (
    <div className="buttons-container">
      <button className="first-btn" onClick={refreshPage}>
        {props.btnOneText}
      </button>
      <button
        disabled={!props.stateHasBeenAnswered}
        className="second-btn"
        onClick={props.toNextState}
      >
        {props.btnTwoText}
      </button>
    </div>
  );
};

export default ButtonContainer;
