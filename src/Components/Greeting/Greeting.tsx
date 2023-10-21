interface GreetingProps {
  toNextState: void;
}

const Greeting = (props: GreetingProps) => {
  return (
    <div className="message-box">
      <h1>Welcome to the US State Capitals Quiz!</h1>
      <h2>Click the button below to get started.</h2>
      <button id="start-btn" onClick={props.toNextState}>
        Let's go!
      </button>
    </div>
  );
};
export default Greeting;
